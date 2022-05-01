interface IToast {
  id?: string;
  message: string;
  mode: string;
}

type Position = 'top' | 'bottom' | 'left' | 'right';
