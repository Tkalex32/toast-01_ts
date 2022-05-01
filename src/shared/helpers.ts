export const uuid: Function = (): string => {
  let dt = new Date().getTime();

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    },
  );
};

export const setPosition: Function = (position: string): Position[] => {
  switch (position) {
    case 'top-right':
      return ['top', 'right'];
    case 'top-left':
      return ['top', 'left'];
    case 'bottom-right':
      return ['bottom', 'right'];
    case 'bottom-left':
      return ['bottom', 'left'];
    default:
      return ['top', 'right'];
  }
};
