import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function About() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''} border-t border-slate-800`}
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl font-semibold mb-4 text-white"
        >
          About Niyati
        </h2>
        <p className="text-slate-300 mb-4">
          I&apos;m a Social Media Manager & Video Editor with 1 year of hands-on experience
          helping creators and small businesses show up consistently online. I&apos;m also
          pursuing my Bachelor of Dental Science (BDS) and studying Digital Marketing, which
          helps me blend creativity with a strong understanding of people and behavior.
        </p>
        <p className="text-slate-300 mb-4">
          I specialize in Instagram: reels, profile optimization, and content that is not only
          aesthetic, but also strategic. From planning content calendars to editing short-form
          videos, my goal is simple—make your profile look more attractive and help you reach
          higher.
        </p>
        <p className="text-slate-300">
          If you&apos;re looking for someone to manage your social media so you can focus on
          what you do best, I&apos;d love to collaborate with you.
        </p>
      </div>
    </section>
  );
}

export default About;
