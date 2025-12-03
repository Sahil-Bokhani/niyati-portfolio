// scripts/fetch-download-thumbs.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const instagramUrls = [
  'https://www.instagram.com/reel/DRbkq7niCNf/?igsh=NWJvdzdoenA4a2V4',
  'https://www.instagram.com/reel/DRPVa-UCH39/?igsh=NnBtMjZjbXVpaHQ3',
  'https://www.instagram.com/reel/DQO6q0rCIXx/?igsh=MTIwY2l0YnA1aWNoaw==',
  'https://www.instagram.com/reel/DPS4sXgCKqA/?igsh=Y3hqZ21rOGM5Zmlw',
  'https://www.instagram.com/reel/DHx0KbZhhaR/?igsh=MWp1a3VmZGtsZTNudg==',
  'https://www.instagram.com/p/DReB19LiNOV/?igsh=NmtjN3g1bTQ3eDk5',
  'https://www.instagram.com/p/DKheLpMo0Ra/?igsh=MXR0aWxkcjBhbDRhYg==',
  'https://www.instagram.com/p/DQeTPTmjQLN/?igsh=ZzJodXE3aDlhb25v',
  'https://www.instagram.com/p/DMFmEDChPKN/?img_index=4&igsh=MXIwajBoMjdiN3ZtdA==',
];

const outDir = path.resolve(process.cwd(), 'src', 'assets', 'portfolio');

function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }

async function fetchHtml(url){
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      Accept: 'text/html',
    },
  });
  if(!res.ok) throw new Error(`Fetch failed ${res.status}`);
  return await res.text();
}

function extractOgImage(html){
  const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i);
  return m?.[1] ?? null;
}

async function download(url, filepath){
  const res = await fetch(url);
  if(!res.ok) throw new Error(`Download failed ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filepath, buffer);
}

(async ()=>{
  if(!fs.existsSync(outDir)) fs.mkdirSync(outDir, {recursive:true});
  const results = [];

  for(let i=0;i<instagramUrls.length;i++){
    const url = instagramUrls[i];
    console.log(`Fetching page ${i+1}/${instagramUrls.length}: ${url}`);
    try {
      const html = await fetchHtml(url);
      const img = extractOgImage(html);
      if(!img) {
        console.warn('No og:image found for', url);
        results.push({url, thumbnail: null});
      } else {
        // choose extension based on url
        const ext = (img.split('?')[0].split('.').pop() || 'jpg').slice(0,5);
        const fileName = `thumb-${i+1}.${ext}`;
        const outPath = path.join(outDir, fileName);
        console.log('Downloading', img, '->', outPath);
        await download(img, outPath);
        results.push({url, thumbnail: `./assets/portfolio/${fileName}`});
        // polite delay
        await sleep(1200);
      }
    } catch(err) {
      console.error('Error for', url, err.message);
      results.push({url, thumbnail: null, error: err.message});
      await sleep(1500);
    }
  }

  const mappingPath = path.resolve(process.cwd(), 'scripts', 'thumb-map.json');
  fs.writeFileSync(mappingPath, JSON.stringify(results, null, 2));
  console.log('Done. Mapping saved to', mappingPath);
})();
