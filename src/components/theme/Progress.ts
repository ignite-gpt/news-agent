import { createStyle } from '@gluestack-style/react'

export const Progress = createStyle({
  _dark: {
    bg: '$backgroundDark700',
  },
  bg: '$backgroundLight300',
  borderRadius: '$full',
  defaultProps: {
    size: 'md',
  },
  variants: {
    size: {
      '2xl': {
        _filledTrack: {
          h: '$6',
        },
        h: '$6',
      },
      lg: {
        _filledTrack: {
          h: '$4',
        },
        h: '$4',
      },
      md: {
        _filledTrack: {
          h: '$3',
        },
        h: '$3',
      },
      sm: {
        _filledTrack: {
          h: '$2',
        },
        h: '$2',
      },
      xl: {
        _filledTrack: {
          h: '$5',
        },
        h: '$5',
      },
      xs: {
        _filledTrack: {
          h: '$1',
        },
        h: '$1',
      },
    },
  },
  w: '100%',
})
