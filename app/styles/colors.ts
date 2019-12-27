// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = (strHex: string) => {
  let input = strHex;
  input = input.replace('#', '');
  const hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    const first = input[0];
    const second = input[1];
    const last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase();
  const first = input[0] + input[1];
  const second = input[2] + input[3];
  const last = input[4] + input[5];
  return `${parseInt(first, 16)}, ${parseInt(second, 16)}, ${parseInt(
    last,
    16,
  )}`;
};

const primaryColor = '#5FB063';
const secondaryColor = '#00a79b';
const warningColor = ['#ff9800'];
const dangerColor = ['#f44336'];
const successColor = ['#4caf50'];
const borderColor = ['#cccccc', '#dddddd', '#eeeeee', '#ffffff'];
const badgeColor = '#ed1c24';
const textColor = [
  '#000000',
  '#222222',
  '#808285',
  '#414042',
  '#58595b',
  '#6d6e71',
  '#ffffff',
  '#939598',
];
const backgroundColor = [
  '#ffffff',
  '#f1f2f2',
  '#e6e7e8',
  '#d1d3d4',
  '#808080',
  '#dc1662',
  '#000000',
  '#f4f4f4',
  '#ffd5cd',
];

export {
  hexToRgb,
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  borderColor,
  textColor,
  badgeColor,
  backgroundColor,
};
