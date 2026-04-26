import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const killAllScrollTriggers = () => ScrollTrigger.killAll();

export function splitChars(element: HTMLElement): NodeListOf<Element> {
  const text = element.textContent || '';
  element.innerHTML = text.split('').map((char) => {
    if (char === ' ') return ' ';
    return `<span class="char" style="display:inline-block;overflow:hidden;"><span class="char-inner" style="display:inline-block;">${char}</span></span>`;
  }).join('');
  return element.querySelectorAll('.char');
}

export function splitWords(element: HTMLElement): NodeListOf<Element> {
  const html = element.innerHTML;
  element.innerHTML = html.split(/\s+/).map((word) =>
    word ? `<span class="word" style="display:inline-block;overflow:hidden;vertical-align:top;"><span class="word-inner" style="display:inline-block;">${word}</span></span>` : ' '
  ).join(' ');
  return element.querySelectorAll('.word');
}

export function animateChars(
  chars: NodeListOf<Element>,
  options: { y?: number; stagger?: number; duration?: number; ease?: string; rotation?: number } = {}
) {
  const { y = 100, stagger = 0.04, duration = 0.9, ease = 'expo.out', rotation = 0 } = options;

  chars.forEach((char) => {
    const inner = char.querySelector('.char-inner') as HTMLElement;
    if (!inner) return;
    inner.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
    inner.style.opacity = '0';
  });

  chars.forEach((char, i) => {
    const inner = char.querySelector('.char-inner') as HTMLElement;
    if (!inner) return;
    setTimeout(() => {
      inner.style.transition = `transform ${duration}s ${ease}, opacity ${duration * 0.8}s ease-out`;
      inner.style.transform = 'translateY(0) rotate(0deg)';
      inner.style.opacity = '1';
    }, i * stagger * 1000);
  });
}

export function animateWords(
  words: NodeListOf<Element>,
  options: { y?: number; stagger?: number; duration?: number; ease?: string } = {}
) {
  const { y = 40, stagger = 0.1, duration = 0.6, ease = 'power2.out' } = options;

  words.forEach((word) => {
    const inner = word.querySelector('.word-inner') as HTMLElement;
    if (!inner) return;
    inner.style.transform = `translateY(${y}px)`;
    inner.style.opacity = '0';
  });

  words.forEach((word, i) => {
    const inner = word.querySelector('.word-inner') as HTMLElement;
    if (!inner) return;
    setTimeout(() => {
      inner.style.transition = `transform ${duration}s ${ease}, opacity ${duration * 0.7}s ease-out`;
      inner.style.transform = 'translateY(0)';
      inner.style.opacity = '1';
    }, i * stagger * 1000);
  });
}

export function initScrollAnimation(
  selector: string,
  animationFn: (elements: NodeListOf<Element>, options?: unknown) => void,
  animationOptions?: unknown
) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationFn(entry.target.querySelectorAll('.char, .word') as NodeListOf<Element>, animationOptions);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}

export function gsapFadeUp(elements: Element | Element[], options: gsap.TweenVars = {}) {
  gsap.from(elements, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    ...options,
  });
}

export function gsapStagger(elements: Element[], options: { stagger?: number; y?: number } = {}) {
  const { stagger = 0.1, y = 80 } = options;
  gsap.from(elements, {
    y,
    opacity: 0,
    scale: 0.95,
    stagger,
    duration: 0.8,
    ease: 'power3.out',
  });
}