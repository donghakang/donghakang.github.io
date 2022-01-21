const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  small: "14px",
  base: "16px",
  // lg: calcRem(18),
  // xl: calcRem(20),
  // xxl: calcRem(22),
  // xxxl: calcRem(24),
  // titleSize: calcRem(50),
};

// const paddings = {
//   small: calcRem(8),
//   base: calcRem(10),
//   lg: calcRem(12),
//   xl: calcRem(14),
//   xxl: calcRem(16),
//   xxxl: calcRem(18),
// };

// const margins = {
//   small: calcRem(8),
//   base: calcRem(10),
//   lg: calcRem(12),
//   xl: calcRem(14),
//   xxl: calcRem(16),
//   xxxl: calcRem(18),
// };

// const interval = {
//   base: calcRem(50),
//   lg: calcRem(100),
//   xl: calcRem(150),
//   xxl: calcRem(200),
// };

// const verticalInterval = {
//   base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
// };

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  bg_gray: "#e8e4e4",
  green_1: "#3cb46e",

  blue_1: "#006ad1",
  blue_2: "#0077ea",
  blue_3: "#0483ff",
  main_blue: "#1e90ff",
  blue_5: "#389ddf",
  blue_6: "#6bb6ff",
  blue_7: "#51a9ff",

  alternate_blue_1: "#1e58ff",
  alternate_blue_2: "#1e6bff",
  alternate_blue_3: "#1e7dff",
  alternate_blue_5: "#1ea3ff",
  alternate_blue_6: "#1eb6ff",
  alternate_blue_7: "#1ec8ff",

  obj_1: "#0078f4",
  obj_2: "#67a6ff",
  obj_3: "#004dc0",

  main_orange: "#ff8d1e",
};

// const device = {
//   mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
//   mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
//   mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
//   tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
//   tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
// };

const theme = {
  fontSizes,
  colors,
  deviceSizes,
};

export default theme;
