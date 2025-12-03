//import React, { useState } from 'react';
//import styles from './ContactForm.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ContactForm() {
  const { ref, isRevealed } = useScrollReveal();
  //const [status, setStatus] = useState('idle');

  /*const handleSubmit = (event) => {
    event.preventDefault();
    // In a real app, you'd send the data to a backend or email service here.
    setStatus('submitted');
  };*/

  return (
    <section
      id="contact"
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''} border-t border-slate-800`}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] items-start">
          <div>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl font-semibold text-white mb-4"
            >
              Let&apos;s work on your profile
            </h2>
            <p className="text-slate-300 mb-4">
              Share a bit about your brand, your goals, and the type of content you&apos;re
              looking for. I&apos;ll get back to you with ideas and next steps.
            </p>

            <div className="space-y-2 text-sm text-slate-300">
              <p>
                Email:{' '}
                <a
                  href="mailto:niyatimaheshwari28@gmail.com"
                  className="text-primary-400 hover:text-primary-300 underline decoration-slate-700 decoration-1"
                >
                  niyatimaheshwari28@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href="tel:+917984956549"
                  className="text-primary-400 hover:text-primary-300 underline decoration-slate-700 decoration-1"
                >
                  +91 79849 56549
                </a>
              </p>
            </div>
          </div>

          {/*<div className={styles.formContainer}>
            <form onSubmit={handleSubmit} aria-describedby="contact-success">
              <div className={styles.formGrid}>
                <div>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={styles.input}
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.fullRow}>
                  <label className={styles.label} htmlFor="budget">
                    Approximate budget (optional)
                  </label>
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    placeholder="e.g. ₹5,000 / month or ₹1,000 per reel"
                    className={styles.input}
                  />
                </div>
                <div className={styles.fullRow}>
                  <label className={styles.label} htmlFor="message">
                    Tell me about your brand and goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className={styles.textarea}
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>

              <p
                id="contact-success"
                aria-live="polite"
                className={styles.successMessage}
              >
                {status === 'submitted'
                  ? 'Thank you! Your message has been received. I will get back to you soon.'
                  : ''}
              </p>
            </form>
          </div>*/}
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
