import { createStyle } from '@gluestack-style/react'

export const Radio = createStyle({
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
          h: '$6',
          p: 2,
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
          h: '$5',
          p: 1.5,
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
          h: '$4',
          p: 1,
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
