import { useEffect, useState, RefObject } from "react";

export function useInView(
  ref: RefObject<Element>,
  options?: { once?: boolean; margin?: string }
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options?.once) {
            observer.disconnect();
          }
        } else if (!options?.once) {
          setIsInView(false);
        }
      },
      {
        rootMargin: options?.margin || "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options?.once, options?.margin]);

  return isInView;
}
