interface IToast {
  id?: string;
  message: string;
  mode: string;
  autoClose?: boolean;
}

type Position = 'top' | 'bottom' | 'left' | 'right';
