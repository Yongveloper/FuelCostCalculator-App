export const handleOnlyNumber = (value: string) => {
  return value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
};
