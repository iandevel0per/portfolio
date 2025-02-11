import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const elements = document.querySelectorAll(
      '.reveal, .fade-in, .slide-up, .slide-in-left, .slide-in-right, .scale-up'
    );

    elements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observerRef.current?.unobserve(element);
      });
    };
  }, []);
}