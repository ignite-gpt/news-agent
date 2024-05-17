import { createStyle } from '@gluestack-style/react'

export const ButtonGroup = createStyle({
  defaultProps: {
    size: 'md',
    space: 'sm',
  },
  variants: {
    isAttached: {
      true: {
        gap: 0,
      },
    },
    size: {
      lg: {
        _button: {
          props: {
            size: 'lg',
          },
        },
      },
      md: {
        _button: {
          props: {
            size: 'md',
          },
        },
      },
      sm: {
        _button: {
          props: {
            size: 'sm',
          },
        },
      },
      xl: {
        _button: {
          _button: {
            props: {
              size: 'xl',
            },
          },
        },
      },
      xs: {
        _button: {
          props: {
            size: 'xs',
          },
        },
      },
    },
    space: {
      '2xl': {
        gap: '$6',
      },
      '3xl': {
        gap: '$7',
      },
      '4xl': {
        gap: '$8',
      },
      lg: {
        gap: '$4',
      },
      md: {
        gap: '$3',
      },
      sm: {
        gap: '$2',
      },
      xl: {
        gap: '$5',
      },
      xs: {
        gap: '$1',
      },
    },
  },
})
