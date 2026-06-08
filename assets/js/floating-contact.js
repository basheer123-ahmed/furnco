(function() {
  'use strict';

  // 1. Create stylesheet element and inject the CSS rules
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .furnco-floating-contact {
      position: fixed;
      right: 24px;
      bottom: 24px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      z-index: 9999;
      font-family: 'Inter', sans-serif;
      opacity: 0;
      animation: furnco-fade-in 0.6s ease forwards 0.5s;
    }

    @keyframes furnco-fade-in {
      to {
        opacity: 1;
      }
    }

    .furnco-floating-btn {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-decoration: none;
      background: rgba(10, 6, 4, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(212, 175, 55, 0.25);
      border-radius: 50px;
      height: 52px;
      min-width: 52px;
      color: #fff;
      box-shadow: 0 8px 32px rgba(10, 6, 4, 0.25);
      transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
      overflow: hidden;
      position: relative;
    }

    .furnco-floating-btn .btn-icon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: transform 0.4s ease;
      z-index: 2;
    }

    .furnco-floating-btn .btn-label {
      max-width: 0;
      opacity: 0;
      white-space: nowrap;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
      padding-left: 0;
      z-index: 1;
    }

    /* Hover States */
    .furnco-floating-btn:hover {
      background: #0A0604;
      border-color: #D4AF37;
      box-shadow: 0 12px 40px rgba(212, 175, 55, 0.35);
      padding-left: 20px;
    }

    .furnco-floating-btn:hover .btn-label {
      max-width: 180px;
      opacity: 1;
      padding-right: 14px;
    }

    .furnco-floating-btn:hover .btn-icon {
      transform: rotate(8deg) scale(1.05);
    }

    /* Phone Specific */
    .btn-call {
      border-color: rgba(212, 175, 55, 0.45);
    }
    .btn-call .btn-icon {
      color: #D4AF37;
    }
    .btn-call:hover {
      background: #D4AF37;
      color: #0A0604;
      border-color: #D4AF37;
    }
    .btn-call:hover .btn-icon {
      color: #0A0604;
    }

    /* WhatsApp Specific */
    .btn-whatsapp {
      border-color: rgba(37, 211, 102, 0.4);
    }
    .btn-whatsapp .btn-icon {
      color: #25D366;
    }
    .btn-whatsapp:hover {
      background: #25D366;
      color: #fff;
      border-color: #25D366;
      box-shadow: 0 12px 40px rgba(37, 211, 102, 0.45);
    }
    .btn-whatsapp:hover .btn-icon {
      color: #fff;
    }

    /* Book Visit Specific */
    .btn-book-visit {
      border-color: rgba(201, 168, 76, 0.45);
    }
    .btn-book-visit .btn-icon {
      color: #C9A84C;
    }
    .btn-book-visit:hover {
      background: #C9A84C;
      color: #0A0604;
      border-color: #C9A84C;
      box-shadow: 0 12px 40px rgba(201, 168, 76, 0.45);
    }
    .btn-book-visit:hover .btn-icon {
      color: #0A0604;
    }

    /* Subtle pulse animation for attention */
    .btn-call {
      animation: btn-pulse-call 5s infinite ease-in-out;
    }
    .btn-whatsapp {
      animation: btn-pulse-wa 5s infinite ease-in-out 2.5s;
    }
    .btn-book-visit {
      animation: btn-pulse-book 5s infinite ease-in-out 1.2s;
    }

    @keyframes btn-pulse-call {
      0%, 100% { box-shadow: 0 8px 32px rgba(10, 6, 4, 0.25); }
      50% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.45); border-color: rgba(212, 175, 55, 0.6); }
    }

    @keyframes btn-pulse-wa {
      0%, 100% { box-shadow: 0 8px 32px rgba(10, 6, 4, 0.25); }
      50% { box-shadow: 0 0 20px rgba(37, 211, 102, 0.45); border-color: rgba(37, 211, 102, 0.6); }
    }

    @keyframes btn-pulse-book {
      0%, 100% { box-shadow: 0 8px 32px rgba(10, 6, 4, 0.25); }
      50% { box-shadow: 0 0 20px rgba(201, 168, 76, 0.45); border-color: rgba(201, 168, 76, 0.6); }
    }

    /* Tablet & Mobile Layout Adjustments */
    @media (max-width: 768px) {
      .furnco-floating-contact {
        right: 16px;
        bottom: 20px;
        gap: 12px;
      }
      .furnco-floating-btn {
        height: 48px;
        min-width: 48px;
      }
      .furnco-floating-btn .btn-icon {
        width: 46px;
        height: 46px;
      }
    }
  `;
  document.head.appendChild(styleEl);

  // 2. Create the widget elements dynamically
  const widgetContainer = document.createElement('div');
  widgetContainer.className = 'furnco-floating-contact';

  widgetContainer.innerHTML = `
    <!-- Book Visit Button -->
    <a href="contact.html?booking=true" class="furnco-floating-btn btn-book-visit" title="Book Experience Center Visit" id="floating-book-visit-btn">
      <span class="btn-label">Book Visit</span>
      <div class="btn-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>
    </a>

    <!-- Phone Call Button -->
    <a href="tel:+919620974224" class="furnco-floating-btn btn-call" title="Call Us">
      <span class="btn-label">Call Us</span>
      <div class="btn-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </div>
    </a>

    <!-- WhatsApp Button -->
    <a href="https://wa.me/919620974224?text=Hello%20Furnco%20Interiors,%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project." target="_blank" rel="noopener noreferrer" class="furnco-floating-btn btn-whatsapp" title="Chat on WhatsApp">
      <span class="btn-label">WhatsApp</span>
      <div class="btn-icon">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </div>
    </a>
  `;

  document.body.appendChild(widgetContainer);

  // 3. Handle click behavior on contact.html
  setTimeout(() => {
    const bookBtn = document.getElementById('floating-book-visit-btn');
    const isContactPage = window.location.pathname.includes('contact') || window.location.hash.includes('booking');
    if (bookBtn && isContactPage) {
      bookBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.openConsultationModal) {
          window.openConsultationModal();
        }
      });
    }
  }, 200);
})();
