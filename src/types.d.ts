interface IToast {
  id: string;
  message: string;
  mode: ToastType;
}

type ToastType = 'success' | 'error' | 'info' | 'warning';
