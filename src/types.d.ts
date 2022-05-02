interface IToast {
  id?: string;
  message: string;
  mode: string;
  autoClose?: boolean;
}

type Position = {
  position: string;
  text: string;
};
