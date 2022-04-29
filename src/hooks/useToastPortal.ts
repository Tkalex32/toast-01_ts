import { useEffect, useState } from 'react';
import { uuid } from 'shared';

export const useToastPortal = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [portalId] = useState<string>(`toast-portal-${uuid()}`);

  useEffect((): (() => void) => {
    const div: HTMLDivElement = document.createElement('div');
    div.id = portalId;
    div.setAttribute('style', 'position: fixed; top: 10px; right: 10px;');
    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalId]);

  return { loaded, portalId };
};
