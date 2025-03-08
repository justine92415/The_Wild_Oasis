import { useEffect, useRef } from "react";

export function useOutsideClick<Ref extends HTMLElement>(
  handler?: () => void,
  listenCapturing = true,
) {
  const ref = useRef<Ref>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) handler?.();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing],
  );

  return ref;
}
