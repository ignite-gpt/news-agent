import { createStyle } from '@gluestack-style/react'

export const Checkbox = createStyle({
  _web: {
    ':disabled': {
      cursor: 'not-allowed',
    },
    cursor: 'pointer',
  },
  alignItems: 'center',
  defaultProps: {
    size: 'md',
  },

  flexDirection: 'row',

  justifyContent: 'flex-start',

  variants: {
    size: {
      lg: {
        _icon: {
          props: {
            size: 'md',
          },
        },

        _indicator: {
          borderWidth: 3,
          h: '$6',
          w: '$6',
        },
        _text: {
          props: {
            size: 'lg',
          },
        },
      },

      md: {
        _icon: {
          props: {
            size: 'sm',
          },
        },

        _indicator: {
          borderWidth: 2,
          h: '$5',
          w: '$5',
        },
        _text: {
          props: {
            size: 'md',
          },
        },
      },

      sm: {
        _icon: {
          props: {
            size: '2xs',
          },
        },

        _indicator: {
          borderWidth: 2,
          h: '$4',
          w: '$4',
        },
        _text: {
          props: {
            size: 'sm',
          },
        },
      },
    },
  },
})
