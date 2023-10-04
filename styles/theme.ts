// color
const primary = '#34df00'
const black = '#000'
const white = '#fff'
const gray50 = '#f9fafb'
const gray100 = '#f3f4f6'
const gray200 = '#e5e7eb'
const gray300 = '#d1d5db'
const gray400 = '#9ca3af'
const gray500 = '#6b7280'
const gray600 = '#4b5563'
const gray700 = '#374151'
const gray800 = '#1f2937'
const gray900 = '#111827'
const gray950 = '#030712'

const sm = '640px'
const md = '768px'
const lg = '1024px'
const xl = '1280px'

export const screen = {
  sm,
  md,
  lg,
  xl,
}

export const color = {
  primary,
  black,
  white,
  gray: {
    50: gray50,
    100: gray100,
    200: gray200,
    300: gray300,
    400: gray400,
    500: gray500,
    600: gray600,
    700: gray700,
    800: gray800,
    900: gray900,
    950: gray950,
  },
}

const theme = {
  color,
  screen,
}

export default theme
