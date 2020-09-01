import { useCallback, useEffect, useState } from 'react';

const useClickAway = (onClickAway: (e: MouseEvent) => void) => {
  const [node, setNode] = useState<HTMLElement | null>(null);

  const nodeRef = useCallback((node: HTMLElement) => {
    setNode(node);
  }, []);

  useEffect(() => {
    if (!node) return;

    const onClick = (event: MouseEvent) => {
      if (!node.contains(event.target as Element)) {
        onClickAway(event);
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [node, onClickAway]);

  return nodeRef;
};

export default useClickAway;
