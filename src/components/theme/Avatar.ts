import { createStyle } from '@gluestack-style/react'

export const Avatar = createStyle({
  alignItems: 'center',
  bg: '$primary600',
  borderRadius: '$full',
  defaultProps: {
    size: 'md',
  },
  justifyContent: 'center',
  position: 'relative',
  variants: {
    size: {
      '2xl': {
        _badge: {
          h: '$8',
          w: '$8',
        },
        _image: {
          h: '$full',
          w: '$full',
        },

        _text: {
          props: { size: '5xl' },
        },
        h: '$32',

        w: '$32',
      },

      lg: {
        _badge: {
          h: '$4',
          w: '$4',
        },
        _image: {
          h: '$full',
          w: '$full',
        },

        _text: {
          props: { size: 'xl' },
        },
        h: '$16',

        w: '$16',
      },

      md: {
        _badge: {
          h: '$3',
          w: '$3',
        },
        _image: {
          h: '$full',
          w: '$full',
        },

        _text: {
          props: { size: 'md' },
        },
        h: '$12',

        w: '$12',
      },

      sm: {
        _badge: {
          h: '$2',
          w: '$2',
        },
        _image: {
          h: '$full',
          w: '$full',
        },

        _text: {
          props: { size: 'xs' },
        },
        h: '$8',

        w: '$8',
      },

      xl: {
        _badge: {
          h: '$6',
          w: '$6',
        },
        _image: {
          h: '$full',
          w: '$full',
        },

        _text: {
          props: { size: '3xl' },
        },
        h: '$24',

        w: '$24',
      },

      xs: {
        _badge: {
          h: '$2',
          w: '$2',
        },
        _image: {
          h: '$full',
          w: '$full',
        },

        _text: {
          props: { size: '2xs' },
        },
        h: '$6',

        w: '$6',
      },
    },
  },
})
