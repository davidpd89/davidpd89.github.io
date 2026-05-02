// Email obfuscation — build mailto: links from data-n + data-d at runtime
// Bots that don't execute JS see href="#" and no email in the href
document.querySelectorAll('[data-n][data-d]').forEach(el => {
  const addr = el.dataset.n + '@' + el.dataset.d;
  const subj = el.dataset.s ? '?subject=' + encodeURIComponent(el.dataset.s) : '';
  el.href = 'mailto:' + addr + subj;
});

// Mobile nav
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Copy to clipboard (press kit bios)
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetEl = document.getElementById(btn.dataset.copyTarget);
    if (!targetEl) return;
    const text = targetEl.textContent.trim();
    const original = btn.textContent;

    const finish = () => {
      btn.textContent = "✓ Copiado";
      setTimeout(() => { btn.textContent = original; }, 2200);
    };

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(finish).catch(() => fallbackCopy(text, finish));
    } else {
      fallbackCopy(text, finish);
    }
  });
});

function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); done(); } catch (_) {}
  document.body.removeChild(ta);
}

// FAQ accordion
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const isOpen = item.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
    answer.hidden = !isOpen;
  });
});

