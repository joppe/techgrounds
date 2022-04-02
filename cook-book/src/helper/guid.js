const TEMPLATE = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';

export function guid() {
  return TEMPLATE.split('')
    .map((char) => {
      if (char === 'x') {
        return digit();
      }

      return char;
    })
    .join('');
}

export function digit() {
  const number = Math.round(Math.random() * 15);

  return number.toString(16);
}
