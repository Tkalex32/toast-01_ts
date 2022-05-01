import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useToastAutoClose = ({
  toasts,
  setToasts,
  autoClose,
  autoCloseTime,
}: {
  toasts: IToast[];
  setToasts: Dispatch<SetStateAction<IToast[]>>;
  autoClose: boolean;
  autoCloseTime: number;
}) => {
  const [removing, setRemoving] = useState('');

  useEffect(() => {
    if (removing) {
      setToasts(t => t.filter(_t => _t.id !== removing));
    }
  }, [removing, setToasts]);

  useEffect(() => {
    if (autoClose && toasts.length) {
      const id: string = toasts[toasts.length - 1].id as string;
      setTimeout(() => setRemoving(id), autoCloseTime);
    }
  }, [toasts, autoClose, autoCloseTime]);
};
