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

const screen = {
  mobile_view: "768px",
  mq: {
    mobile: `@media only screen and (max-width: 768px)`,
    web: `@media only screen and (min-width: 768px)`,
  },
};

const theme = {
  colors,
  screen,
};

export default theme;
