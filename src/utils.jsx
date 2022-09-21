const colors = {
  white: '#fff',
  blue: '#0a192f',
  dark: '#212121',
  lightBlue: '#32527b',
  green: '#04aa6d',
  red: '#ff4742',
  darkRed: '#ee7f53',
  black: '#111111',
  aqua: '#05F79E',
}

const size = {
  xsmall: '0.5rem',
  small: '1rem',
  xmedium: '1.5rem',
  medium: '2rem',
  xlarge: '2.5rem',
  large: '3rem',
  big: '4rem',
  fbig: '6rem',
}

const viewport = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1441px',
}

const device = {
  mobileS: `(max-width: ${viewport.mobileS})`,
  mobileM: `(max-width: ${viewport.mobileM})`,
  mobileL: `(max-width: ${viewport.mobileL})`,
  tablet: `(max-width: ${viewport.tablet})`,
  laptop: `(max-width: ${viewport.laptop})`,
  laptopL: `(max-width: ${viewport.laptopL})`,
  desktop: `(min-width: ${viewport.desktop})`,
}

export { device, colors, size }
