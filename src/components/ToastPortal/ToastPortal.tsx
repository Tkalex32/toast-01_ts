import { FC, useEffect, useState } from 'react';
import { uuid } from 'shared';
import styles from './styles.module.css';

export const ToastPortal: FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [portalId] = useState<string>(`toast-portal-${uuid()}`);

  useEffect((): (() => void) => {
    const div: HTMLDivElement = document.createElement('div');
    div.id = portalId;
    div.setAttribute('style', 'position: fixed; top: 10px; right: 10px;');
    document.getElementsByTagName('body')[0].prepend(div);
    //document.body.prepend(div);

    setLoaded(true);

    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
      //document.getElementById(portalId)?.remove();
    };
  }, [portalId]);

  return <>ToastPortal</>;
};
