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

    /* PREMIUM MODAL OVERLAY STYLES */
    .furnco-modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(10, 6, 4, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 10000;
      align-items: flex-start;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.4s ease;
      padding: 40px 20px;
      overflow-y: auto;
    }

    .furnco-modal-overlay.active {
      display: flex;
      opacity: 1;
    }

    .furnco-modal-card {
      background: #0A0604;
      color: white;
      border: 1.5px solid rgba(201, 168, 76, 0.3);
      border-radius: 4px;
      max-width: 480px;
      width: 100%;
      padding: 40px 32px 32px;
      position: relative;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
      transform: scale(0.95);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      margin: auto;
    }

    .furnco-modal-overlay.active .furnco-modal-card {
      transform: scale(1);
    }

    .furnco-modal-close {
      position: absolute;
      top: 16px;
      right: 16px;
      background: none;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 2px;
      color: rgba(255, 255, 255, 0.6);
      width: 32px;
      height: 32px;
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    }

    .furnco-modal-close:hover {
      border-color: #C9A84C;
      color: #C9A84C;
      transform: rotate(90deg);
    }

    /* Form Styles inside Modal */
    .furnco-modal-form-group {
      margin-bottom: 16px;
      text-align: left;
    }

    .furnco-modal-form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }

    .furnco-modal-label {
      display: block;
      color: rgba(255, 255, 255, 0.85);
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .furnco-modal-label span {
      color: #C9A84C;
    }

    .furnco-modal-input {
      width: 100%;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 2px;
      padding: 12px 14px;
      color: white;
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      transition: all 0.3s;
      outline: none;
      box-sizing: border-box;
    }

    .furnco-modal-input:focus {
      border-color: #C9A84C;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 10px rgba(201, 168, 76, 0.15);
    }

    .furnco-modal-input.is-invalid {
      border-color: #ff4d4d !important;
      box-shadow: 0 0 10px rgba(255, 77, 77, 0.1) !important;
    }

    .furnco-modal-error {
      color: #ff4d4d;
      font-size: 0.7rem;
      margin-top: 4px;
      display: block;
      min-height: 14px;
    }

    .furnco-modal-submit {
      width: 100%;
      padding: 14px;
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0A0604;
      background: linear-gradient(135deg, #c9a84c 0%, #f5d78e 50%, #c9a84c 100%);
      border: none;
      border-radius: 2px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 15px rgba(201, 168, 76, 0.25);
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .furnco-modal-submit:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(201, 168, 76, 0.4);
    }

    .furnco-modal-submit:disabled {
      background: #4a4538;
      color: #7a7568;
      cursor: not-allowed;
      box-shadow: none;
    }

    .furnco-spinner {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(10, 6, 4, 0.2);
      border-top-color: #0A0604;
      border-radius: 50%;
      animation: furnco-spin 0.8s infinite linear;
    }

    @keyframes furnco-spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleEl);

  // 2. Create the floating contact buttons dynamically
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

  // 3. Inject Modals HTML
  const modalsWrapper = document.createElement('div');
  modalsWrapper.innerHTML = `
    <!-- Modal 1: Free Consultation -->
    <div id="consultation-modal" class="furnco-modal-overlay">
      <div class="furnco-modal-card">
        <button class="furnco-modal-close" type="button" aria-label="Close">&times;</button>
        <span style="font-family:'Inter',sans-serif;font-size:0.65rem;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:#C9A84C;display:block;margin-bottom:8px;text-align:center;">LIMITED TIME OFFER</span>
        <h3 style="font-family:'Playfair Display',serif;font-size:1.6rem;color:white;font-weight:600;margin:0 0 10px;line-height:1.3;text-align:center;">Book Your Free Interior Design Consultation</h3>
        <p style="font-family:'Inter',sans-serif;font-size:0.8rem;color:rgba(255,255,255,0.6);margin:0 0 24px;line-height:1.5;text-align:center;">Enter your details below and our design experts will reach out to transform your dream space.</p>
        
        <form action="https://formsubmit.co/furnco.info@zohomail.in" method="POST" id="consultation-form" novalidate>
          <input type="hidden" name="_subject" value="New FREE Consultation Request — Furnco Interiors">
          <input type="hidden" name="_next" class="furnco-next-url" value="success.html">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="inquiry_type" value="Free Consultation">

          <div class="furnco-modal-form-group">
            <label class="furnco-modal-label" for="c-name">Full Name <span>*</span></label>
            <input type="text" id="c-name" name="name" class="furnco-modal-input" placeholder="Rajesh Sharma">
            <span class="furnco-modal-error" id="c-name-error"></span>
          </div>

          <div class="furnco-modal-form-group">
            <label class="furnco-modal-label" for="c-phone">Phone Number <span>*</span></label>
            <input type="tel" id="c-phone" name="phone" class="furnco-modal-input" placeholder="+91 98765 43210">
            <span class="furnco-modal-error" id="c-phone-error"></span>
          </div>

          <div class="furnco-modal-form-group">
            <label class="furnco-modal-label" for="c-email">Email Address <span>*</span></label>
            <input type="email" id="c-email" name="email" class="furnco-modal-input" placeholder="rajesh@example.com">
            <span class="furnco-modal-error" id="c-email-error"></span>
          </div>

          <div class="furnco-modal-form-row">
            <div class="furnco-modal-form-group">
              <label class="furnco-modal-label" for="c-property">Property Type</label>
              <select id="c-property" name="property_type" class="furnco-modal-input" style="background:#0A0604;">
                <option value="" disabled selected>Select</option>
                <option value="Apartment (2BHK/3BHK/4BHK)">Apartment</option>
                <option value="Independent House / Villa">Villa / House</option>
                <option value="Commercial / Office Space">Commercial Space</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="furnco-modal-form-group">
              <label class="furnco-modal-label" for="c-city">City</label>
              <input type="text" id="c-city" name="city" class="furnco-modal-input" placeholder="Bengaluru">
            </div>
          </div>

          <div class="furnco-modal-form-group" style="margin-bottom:20px;">
            <label class="furnco-modal-label" for="c-time">Preferred Contact Time</label>
            <select id="c-time" name="preferred_contact_time" class="furnco-modal-input" style="background:#0A0604;">
              <option value="" disabled selected>Select slot</option>
              <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
            </select>
          </div>

          <!-- SECURITY VERIFICATION (CAPTCHA) -->
          <div style="background:#FDFBF7; border:1.5px solid #e8e0d5; padding:20px; border-radius:2px; margin-bottom:24px; color:#1A1A1A;">
            <label class="furnco-modal-label" style="color:#1A1A1A; font-weight:700; margin-bottom:12px; font-family:'Inter',sans-serif; font-size:0.7rem; letter-spacing:0.15em; text-transform:uppercase;">SECURITY VERIFICATION <span style="color:#C9A84C">*</span></label>
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px; flex-wrap:wrap;">
              <canvas id="c-captcha-canvas" width="140" height="42" style="border:1.5px solid #d4c9b8; border-radius:2px; background:#f5f0e8; cursor:pointer; flex-shrink:0;"></canvas>
              <button type="button" id="c-captcha-reload" style="width:38px; height:38px; border:1.5px solid #d4c9b8; background:white; border-radius:2px; cursor:pointer; display:flex; align-items:center; justify-content:center; color:#888; flex-shrink:0; transition:all 0.3s;" title="Refresh CAPTCHA">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
              </button>
              <span style="font-family:'Inter',sans-serif; font-size:0.68rem; color:#8a8275;">Click refresh icon to get a new code</span>
            </div>
            <input type="text" id="c-captcha" class="furnco-modal-input" placeholder="TYPE THE CODE ABOVE" style="width:100%; border:1.5px solid #e8e0d5; background:white; color:#1A1A1A; font-size:1rem; letter-spacing:0.22em; font-weight:600; padding:11px 14px; outline:none; border-radius:2px;">
            <span class="furnco-modal-error" id="c-captcha-error" style="color:#ff4d4d; font-size:0.7rem; margin-top:4px; display:block;"></span>
          </div>

          <button type="submit" class="furnco-modal-submit" id="c-submit-btn">
            GET FREE CONSULTATION &rarr;
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(modalsWrapper);

  // 4. Modal Triggers & Controls
  const consultationModal = document.getElementById('consultation-modal');

  document.querySelectorAll('.furnco-next-url').forEach(el => {
    const origin = window.location.origin || (window.location.protocol + '//' + window.location.host);
    el.value = origin.includes('http') ? (origin + '/success.html') : 'success.html';
  });

  window.openConsultationModal = function() {
    closeAllModals();
    consultationModal.classList.add('active');
    generateCaptcha('c');
  };

  function closeAllModals() {
    consultationModal.classList.remove('active');
  }

  // Close triggers (Close button, overlay background, escape key)
  document.querySelectorAll('.furnco-modal-close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.furnco-modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // 5. Canvas CAPTCHA Generation
  let currentCaptchaTextC = '';

  function generateCaptcha() {
    const canvas = document.getElementById('c-captcha-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz';
    let text = '';
    for (let i = 0; i < 5; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    currentCaptchaTextC = text;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(201, 168, 76, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(201, 168, 76, ${0.1 + Math.random() * 0.25})`;
      ctx.lineWidth = 1 + Math.random();
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    for (let i = 0; i < 35; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.25})`;
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1 + Math.random() * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.textBaseline = 'middle';
    const charWidth = canvas.width / (text.length + 1);
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const fontSize = 16 + Math.floor(Math.random() * 6);
      ctx.font = `bold ${fontSize}px 'Courier New', monospace, sans-serif`;
      ctx.fillStyle = Math.random() > 0.5 ? '#8B6B23' : '#B8860B';

      const x = charWidth * (i + 0.8) + (Math.random() - 0.5) * 5;
      const y = canvas.height / 2 + (Math.random() - 0.5) * 6;
      const angle = (Math.random() - 0.5) * 0.4;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }
  }

  // Bind CAPTCHA refresh triggers
  const captchaReloadC = document.getElementById('c-captcha-reload');
  if (captchaReloadC) {
    captchaReloadC.addEventListener('click', generateCaptcha);
  }

  // 6. Form Validation & Submissions
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const PHONE_RE = /^[\+]?[\d\s\-\(\)]{7,15}$/;

  const consultationForm = document.getElementById('consultation-form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Always prevent default browser submit
      if (consultationForm.dataset.submitted === 'true') {
        return;
      }
      let isValid = true;

      // Inputs
      const nameEl = document.getElementById('c-name');
      const phoneEl = document.getElementById('c-phone');
      const emailEl = document.getElementById('c-email');
      const captchaEl = document.getElementById('c-captcha');

      // Errors
      const nameErr = document.getElementById('c-name-error');
      const phoneErr = document.getElementById('c-phone-error');
      const emailErr = document.getElementById('c-email-error');
      const captchaErr = document.getElementById('c-captcha-error');

      // Reset styles
      [nameEl, phoneEl, emailEl, captchaEl].forEach(el => el.classList.remove('is-invalid'));
      [nameErr, phoneErr, emailErr, captchaErr].forEach(el => el.textContent = '');

      if (!nameEl.value.trim()) {
        nameEl.classList.add('is-invalid');
        nameErr.textContent = 'Full name is required.';
        isValid = false;
      }

      if (!phoneEl.value.trim()) {
        phoneEl.classList.add('is-invalid');
        phoneErr.textContent = 'Phone number is required.';
        isValid = false;
      } else if (!PHONE_RE.test(phoneEl.value.trim())) {
        phoneEl.classList.add('is-invalid');
        phoneErr.textContent = 'Please enter a valid phone number.';
        isValid = false;
      }

      if (!emailEl.value.trim()) {
        emailEl.classList.add('is-invalid');
        emailErr.textContent = 'Email address is required.';
        isValid = false;
      } else if (!EMAIL_RE.test(emailEl.value.trim())) {
        emailEl.classList.add('is-invalid');
        emailErr.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // CAPTCHA verification
      if (!captchaEl.value.trim()) {
        captchaEl.classList.add('is-invalid');
        captchaErr.textContent = 'Security code is required.';
        isValid = false;
      } else if (captchaEl.value.replace(/\s+/g, '').toLowerCase() !== currentCaptchaTextC.replace(/\s+/g, '').toLowerCase()) {
        captchaEl.classList.add('is-invalid');
        captchaErr.textContent = 'Incorrect code. Please try again.';
        generateCaptcha('c');
        captchaEl.value = '';
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      consultationForm.dataset.submitted = 'true';
      const submitBtn = document.getElementById('c-submit-btn');
      submitBtn.innerHTML = '<span class="furnco-spinner"></span> SENDING...';

      // Build JSON payload
      const formData = new FormData(consultationForm);
      const data = {};
      formData.forEach((value, key) => {
        if (key !== 'c-captcha' && key !== '_honey') {
          data[key] = value;
        }
      });

      // Submit via Fetch
      fetch("https://formsubmit.co/ajax/furnco.info@zohomail.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          const origin = window.location.origin || (window.location.protocol + '//' + window.location.host);
          window.location.href = origin.includes('http') ? (origin + '/success.html') : 'success.html';
        } else {
          throw new Error("FormSubmit response not OK");
        }
      })
      .catch(error => {
        console.error("Submission error:", error);
        consultationForm.dataset.submitted = '';
        submitBtn.innerHTML = 'GET FREE CONSULTATION &rarr;';
        alert("Something went wrong. Please try again or email us directly at furnco.info@zohomail.in");
      });
    });
  }

  // Setup Visit Form Handler
  const visitForm = document.getElementById('visit-form');
  if (visitForm) {
    visitForm.addEventListener('submit', function(e) {
      if (visitForm.dataset.submitted === 'true') {
        e.preventDefault();
        return;
      }
      let isValid = true;

      // Inputs
      const nameEl = document.getElementById('v-name');
      const phoneEl = document.getElementById('v-phone');
      const emailEl = document.getElementById('v-email');
      const dateEl = document.getElementById('v-date');
      const timeEl = document.getElementById('v-time');
      const visitorsEl = document.getElementById('v-visitors');
      const captchaEl = document.getElementById('v-captcha');

      // Errors
      const nameErr = document.getElementById('v-name-error');
      const phoneErr = document.getElementById('v-phone-error');
      const emailErr = document.getElementById('v-email-error');
      const dateErr = document.getElementById('v-date-error');
      const timeErr = document.getElementById('v-time-error');
      const visitorsErr = document.getElementById('v-visitors-error');
      const captchaErr = document.getElementById('v-captcha-error');

      // Reset
      [nameEl, phoneEl, emailEl, dateEl, timeEl, visitorsEl, captchaEl].forEach(el => el.classList.remove('is-invalid'));
      [nameErr, phoneErr, emailErr, dateErr, timeErr, visitorsErr, captchaErr].forEach(el => el.textContent = '');

      if (!nameEl.value.trim()) {
        nameEl.classList.add('is-invalid');
        nameErr.textContent = 'Full name is required.';
        isValid = false;
      }

      if (!phoneEl.value.trim()) {
        phoneEl.classList.add('is-invalid');
        phoneErr.textContent = 'Phone number is required.';
        isValid = false;
      } else if (!PHONE_RE.test(phoneEl.value.trim())) {
        phoneEl.classList.add('is-invalid');
        phoneErr.textContent = 'Please enter a valid phone number.';
        isValid = false;
      }

      if (!emailEl.value.trim()) {
        emailEl.classList.add('is-invalid');
        emailErr.textContent = 'Email address is required.';
        isValid = false;
      } else if (!EMAIL_RE.test(emailEl.value.trim())) {
        emailEl.classList.add('is-invalid');
        emailErr.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!dateEl.value) {
        dateEl.classList.add('is-invalid');
        dateErr.textContent = 'Visit date is required.';
        isValid = false;
      }

      if (!timeEl.value) {
        timeEl.classList.add('is-invalid');
        timeErr.textContent = 'Visit time slot is required.';
        isValid = false;
      }

      if (!visitorsEl.value) {
        visitorsEl.classList.add('is-invalid');
        visitorsErr.textContent = 'Headcount is required.';
        isValid = false;
      }

      // CAPTCHA verification
      if (!captchaEl.value.trim()) {
        captchaEl.classList.add('is-invalid');
        captchaErr.textContent = 'Security code is required.';
        isValid = false;
      } else if (captchaEl.value.replace(/\s+/g, '').toLowerCase() !== currentCaptchaTextV.replace(/\s+/g, '').toLowerCase()) {
        captchaEl.classList.add('is-invalid');
        captchaErr.textContent = 'Incorrect code. Please try again.';
        generateCaptcha('v');
        captchaEl.value = '';
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
        return;
      }

      visitForm.dataset.submitted = 'true';
      const submitBtn = document.getElementById('v-submit-btn');
      submitBtn.innerHTML = '<span class="furnco-spinner"></span> SENDING...';
    });
  }

  // Real-time space stripping for modal CAPTCHA inputs
  const cCaptchaInput = document.getElementById('c-captcha');
  if (cCaptchaInput) {
    cCaptchaInput.addEventListener('input', function() {
      this.value = this.value.replace(/\s+/g, '');
    });
  }
  const vCaptchaInput = document.getElementById('v-captcha');
  if (vCaptchaInput) {
    vCaptchaInput.addEventListener('input', function() {
      this.value = this.value.replace(/\s+/g, '');
    });
  }

  // 7. Click Interceptors for Global Triggers
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a, button');
    if (!target) return;

    const text = (target.textContent || '').trim().toLowerCase();
    const id = target.id || '';
    const href = target.getAttribute('href') || '';

    // Handle "Book Consultation" triggers
    if (text.includes('book consultation') || id === 'hero-cta-contact') {
      e.preventDefault();
      window.openConsultationModal();
    }
    // Handle "Book Visit" / "Book Experience Center Visit" triggers
    else if (
      text.includes('book experience center visit') || 
      id === 'book-visit-cta' || 
      id === 'floating-book-visit-btn' || 
      href.includes('booking=true')
    ) {
      const inquirySelect = document.getElementById('inquiry-type');
      if (inquirySelect) {
        e.preventDefault();
        inquirySelect.value = 'Experience Center Visit';
        inquirySelect.dispatchEvent(new Event('change'));
        const formCard = document.querySelector('.contact-form-card');
        if (formCard) {
          formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      // If no inquiry-type select (meaning we are not on contact.html),
      // let the default link behavior navigate the user to contact.html?booking=true
    }
  });

  // 8. Query Parameter Handler for Autoloading
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('booking') === 'true') {
    const selectAndScroll = () => {
      const inquirySelect = document.getElementById('inquiry-type');
      if (inquirySelect) {
        inquirySelect.value = 'Experience Center Visit';
        inquirySelect.dispatchEvent(new Event('change'));
        const formCard = document.querySelector('.contact-form-card');
        if (formCard) {
          formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => {
        setTimeout(selectAndScroll, 400);
      });
    } else {
      setTimeout(selectAndScroll, 400);
    }
  }

})();
