import { useEffect, type RefObject } from "react";

/** Reveal each content block once, without hiding content before JS loads. */
export function usePageReveals(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = root.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!container || !("IntersectionObserver" in window)) return;

    const selector = ".impact-inner > *, .about-grid > *, .section-heading > *, .career-row, .degree-row, .certifications, .contact-grid > *";
    const elements = container.querySelectorAll<HTMLElement>(selector);
    let observer: IntersectionObserver | undefined;

    const setup = () => {
      observer?.disconnect();
      elements.forEach((element) => element.classList.remove("scroll-reveal"));
      if (preference.matches) return;

      observer = new IntersectionObserver((entries) => {
        let stagger = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.style.setProperty("--reveal-delay", `${Math.min(stagger++, 3) * 80}ms`);
          element.classList.add("scroll-reveal");
          observer?.unobserve(element);
        });
      }, { threshold: 0.08 });
      elements.forEach((element) => observer?.observe(element));
    };

    setup();
    preference.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", setup);
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [root]);
}
