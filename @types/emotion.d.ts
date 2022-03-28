import '@emotion/react'

declare module "@emotion/react" {
  export interface Theme {
    screen: {
      mobile_view: string;
      mq: {
        mobile: string;
        web: string;
      };
    };
    colors: {
      black: string;
      white: string;
      bg_gray: string;
      green_1: string;

      blue_1: string;
      blue_2: string;
      blue_3: string;
      main_blue: string;
      blue_5: string;
      blue_6: string;
      blue_7: string;

      alternate_blue_1: string;
      alternate_blue_2: string;
      alternate_blue_3: string;
      alternate_blue_5: string;
      alternate_blue_6: string;
      alternate_blue_7: string;

      obj_1: string;
      obj_2: string;
      obj_3: string;

      main_orange: string;
    };
  }
}
