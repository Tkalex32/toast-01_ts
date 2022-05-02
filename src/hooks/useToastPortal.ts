import { useEffect, useState } from 'react';
import { uuid, setPosition } from 'shared';

export const useToastPortal: (position: string) => {
  loaded: boolean;
  portalId: string;
} = position => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [portalId] = useState<string>(`toast-portal-${uuid()}`);
  const toastsPosition = setPosition(position);

  useEffect((): (() => void) => {
    const div: HTMLDivElement = document.createElement('div');
    div.id = portalId;
    div.setAttribute('style', `position: fixed; top: 10px; right: 10px;`);
    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalId]);

  useEffect((): void => {
    const div = document.getElementsByTagName('div')[0];
    div.setAttribute('style', `position: fixed; ${toastsPosition}`);
  }, [toastsPosition]);

  return { loaded, portalId };
};
