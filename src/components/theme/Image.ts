import { createStyle } from '@gluestack-style/react'

export const Image = createStyle({
  _web: {
    props: {
      // set property to revert-layer as RNW always set image height width inline
      style: {
        height: 'revert-layer',
        width: 'revert-layer',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
  maxWidth: '$full',

  variants: {
    size: {
      '2xl': {
        h: '$64',
        w: '$64',
      },

      '2xs': {
        h: '$6',
        w: '$6',
      },

      full: {
        h: '$full',
        w: '$full',
      },

      lg: {
        h: '$24',
        w: '$24',
      },

      md: {
        h: '$20',
        w: '$20',
      },

      sm: {
        h: '$16',
        w: '$16',
      },

      xl: {
        h: '$32',
        w: '$32',
      },
      xs: {
        h: '$10',
        w: '$10',
      },
    },
  },
})
