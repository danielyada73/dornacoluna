import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511922272726"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50"
      aria-label="Falar no WhatsApp"
    >
      {/* Ícone oficial do WhatsApp */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" width="56" height="56">
        <defs>
          <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#57d163"/>
            <stop offset="1" stopColor="#23b33a"/>
          </linearGradient>
        </defs>
        <circle cx="87.6" cy="87.8" r="87" fill="url(#wa-grad)"/>
        <path fill="#fff" d="M87.5 25.8C53.9 25.8 26.5 53.1 26.5 86.8c0 11.2 3 21.7 8.2 30.7L25.5 150l33.4-8.7c8.7 4.7 18.6 7.4 29.2 7.4 33.6 0 61-27.3 61-61s-27.4-61.9-61.6-61.9zm0 112.6c-9.9 0-19.2-2.7-27.1-7.3l-1.9-1.1-20 5.2 5.3-19.4-1.3-2c-5.1-8.2-8-17.8-8-28.1 0-28.6 23.3-52 51.9-52 28.6 0 51.9 23.4 51.9 52s-23.2 52.7-50.8 52.7zm28.5-39c-1.6-.8-9.3-4.6-10.7-5.1-1.4-.5-2.4-.8-3.4.8-1 1.6-3.9 5.1-4.8 6.1-.9 1-1.7 1.1-3.3.4-1.6-.8-6.7-2.5-12.7-7.9-4.7-4.2-7.9-9.4-8.8-10.9-.9-1.6-.1-2.4.7-3.2.7-.7 1.6-1.8 2.4-2.7.8-.9 1-1.6 1.6-2.6.5-1 .3-1.9-.2-2.7-.5-.8-3.4-8.2-4.7-11.2-1.2-2.9-2.5-2.5-3.4-2.6-.9 0-1.9-.1-2.9-.1s-2.6.4-4 1.9c-1.4 1.6-5.3 5.2-5.3 12.6s5.4 14.6 6.2 15.6c.8 1 10.6 16.2 25.7 22.7 3.6 1.6 6.4 2.5 8.6 3.1 3.6 1.1 6.9.9 9.5.6 2.9-.4 8.9-3.6 10.1-7.2 1.3-3.5 1.3-6.5.9-7.1-.3-.7-1.3-1.1-2.9-1.9z"/>
      </svg>
    </a>
  );
}
