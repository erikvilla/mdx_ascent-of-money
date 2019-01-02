import { notes as notesTheme } from 'mdx-deck/themes'

const headerColor = 'rgba(0,0,0,.80)'

const theme = { 
  ...notesTheme,
  h1: {
    color: headerColor
  },
  h2: {
    color: headerColor
  },
  h3: {
    color: headerColor
  },
  p: {
    fontSize: '20px'
  }
};

export {
  theme
}
