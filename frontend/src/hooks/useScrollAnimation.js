import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    // Observe all children with scroll-animate class
    const animatedElements = element.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    // Also observe the element itself if it has scroll-animate class
    if (element.classList.contains('scroll-animate')) {
      observer.observe(element);
    }

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      if (element.classList.contains('scroll-animate')) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return elementRef;
};
