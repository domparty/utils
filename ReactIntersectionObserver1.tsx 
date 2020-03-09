import { useEffect, useRef, useState } from 'react';

// store all observers
let observers = {};

// store all different callbacks
const callbacks = {};

function observe(entries, opts: string) {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting && typeof callbacks[opts][i] === 'function') callbacks[opts][i]();
  });
}

type result = [(node: Element | null) => void, boolean];

export function useInView(options = {}): result {
  const opts = JSON.stringify(options);
  if (typeof observers[opts] === 'undefined' && typeof window !== 'undefined') {
    observers[opts] = new IntersectionObserver(entries => observe(entries, opts), options);
  }

  const ref = useRef<Element>(null) as React.MutableRefObject<Element>;
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    if (typeof callbacks[opts] === 'undefined') callbacks[opts] = [];

    if (ref.current) {
      callbacks[opts].push(() => {
        if (inView === false) setInView(true);
      });

      observers[opts].observe(ref.current);
    }
  }, [ref]);

  // @ts-ignore
  return [ref, inView];
}

export default useInView;
