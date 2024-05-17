import { createStyle } from '@gluestack-style/react'

export const Button = createStyle({
  ':disabled': {
    opacity: 0.4,
  },
  _icon: {
    _dark: {
      color: '$textDark0',
    },
    color: '$textLight0',
  },
  _spinner: {
    _dark: {
      props: {
        color: '$backgroundDark0',
      },
    },
    props: {
      color: '$backgroundLight0',
    },
  },
  _text: {
    _dark: {
      color: '$textDark0',
    },
    color: '$textLight0',
    fontWeight: '$semibold',
  },
  _web: {
    ':focusVisible': {
      _dark: {
        outlineColor: '$primary300',
      },
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      outlineWidth: '$0.5',
    },
  },

  alignItems: 'center',

  backgroundColor: '$primary500',

  borderRadius: '$sm',

  compoundVariants: [
    {
      action: 'primary',
      value: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: 'transparent',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: 'transparent',
          },
          bg: 'transparent',
        },
        bg: 'transparent',
        px: '$0',
      },
      variant: 'link',
    },
    {
      action: 'secondary',
      value: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: 'transparent',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: 'transparent',
          },
          bg: 'transparent',
        },
        bg: 'transparent',
        px: '$0',
      },
      variant: 'link',
    },
    {
      action: 'positive',
      value: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: 'transparent',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: 'transparent',
          },
          bg: 'transparent',
        },
        bg: 'transparent',
        px: '$0',
      },
      variant: 'link',
    },
    {
      action: 'negative',
      value: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: 'transparent',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: 'transparent',
          },
          bg: 'transparent',
        },
        bg: 'transparent',
        px: '$0',
      },
      variant: 'link',
    },
    {
      action: 'primary',
      value: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: '$backgroundLight50',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: '$backgroundDark900',
          },
          bg: 'transparent',
        },
        bg: 'transparent',
      },
      variant: 'outline',
    },
    {
      action: 'secondary',
      value: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: '$backgroundLight50',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: '$backgroundDark900',
          },
          bg: 'transparent',
        },
        bg: 'transparent',
      },
      variant: 'outline',
    },
    {
      action: 'positive',
      value: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: '$backgroundLight50',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: '$backgroundDark900',
          },
          bg: 'transparent',
        },
        bg: 'transparent',
      },
      variant: 'outline',
    },
    {
      action: 'negative',
      value: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: '$backgroundLight50',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: '$backgroundDark900',
          },
          bg: 'transparent',
        },
        bg: 'transparent',
      },
      variant: 'outline',
    },
    {
      action: 'primary',
      value: {
        _dark: {
          _icon: {
            ':active': {
              color: '$textDark0',
            },
            ':hover': {
              color: '$textDark0',
            },
            color: '$textDark0',
          },
          _spinner: {
            ':active': {
              props: { color: '$textDark0' },
            },
            ':hover': {
              props: { color: '$textDark0' },
            },
            props: { color: '$textDark0' },
          },
          _text: {
            ':active': {
              color: '$textDark0',
            },
            ':hover': {
              color: '$textDark0',
            },
            color: '$textDark0',
          },
        },
        _icon: {
          ':active': {
            color: '$textLight0',
          },
          ':hover': {
            color: '$textLight0',
          },
          color: '$textLight0',
        },
        _spinner: {
          ':active': {
            props: { color: '$textLight0' },
          },
          ':hover': {
            props: { color: '$textLight0' },
          },
          props: { color: '$textLight0' },
        },
        _text: {
          ':active': {
            color: '$textLight0',
          },
          ':hover': {
            color: '$textLight0',
          },
          color: '$textLight0',
        },
      },
      variant: 'solid',
    },
    {
      action: 'secondary',
      value: {
        _dark: {
          _icon: {
            ':active': {
              color: '$textDark0',
            },
            ':hover': {
              color: '$textDark0',
            },
            color: '$textDark0',
          },
          _spinner: {
            ':active': {
              props: { color: '$textDark0' },
            },
            ':hover': {
              props: { color: '$textDark0' },
            },
            props: { color: '$textDark0' },
          },
          _text: {
            ':active': {
              color: '$textDark0',
            },
            ':hover': {
              color: '$textDark0',
            },
            color: '$textDark0',
          },
        },
        _icon: {
          ':active': {
            color: '$textLight0',
          },
          ':hover': {
            color: '$textLight0',
          },
          color: '$textLight0',
        },
        _spinner: {
          ':active': {
            props: { color: '$textLight0' },
          },
          ':hover': {
            props: { color: '$textLight0' },
          },
          props: { color: '$textLight0' },
        },
        _text: {
          ':active': {
            color: '$textLight0',
          },
          ':hover': {
            color: '$textLight0',
          },
          color: '$textLight0',
        },
      },
      variant: 'solid',
    },
    {
      action: 'positive',
      value: {
        _dark: {
          _icon: {
            ':active': {
              color: '$textDark0',
            },
            ':hover': {
              color: '$textDark0',
            },
            color: '$textDark0',
          },
          _spinner: {
            ':active': {
              props: { color: '$textDark0' },
            },
            ':hover': {
              props: { color: '$textDark0' },
            },
            props: { color: '$textDark0' },
          },
          _text: {
            ':active': {
              color: '$textDark0',
            },
            ':hover': {
              color: '$textDark0',
            },
            color: '$textDark0',
          },
        },
        _icon: {
          ':active': {
            color: '$textLight0',
          },
          ':hover': {
            color: '$textLight0',
          },
          color: '$textLight0',
          props: { color: '$textLight0' },
        },
        _spinner: {
          ':active': {
            props: { color: '$textLight0' },
          },
          ':hover': {
            props: { color: '$textLight0' },
          },
          props: { color: '$textLight0' },
        },

        _text: {
          ':active': {
            color: '$textLight0',
          },
          ':hover': {
            color: '$textLight0',
          },
          color: '$textLight0',
        },
      },
      variant: 'solid',
    },
    {
      action: 'negative',
      value: {
        _dark: {
          _icon: {
            ':active': {
              color: '$textDark0',
            },
            ':hover': {
              color: '$textDark0',
            },
            color: '$textDark0',
          },
          _spinner: {
            ':active': {
              props: { color: '$textDark0' },
            },
            ':hover': {
              props: { color: '$textDark0' },
            },
            props: { color: '$textDark0' },
          },
          _text: {
            ':active': {
              color: '$textDark0',
            },
            ':hover': {
              color: '$textDark0',
            },
            color: '$textDark0',
          },
        },
        _icon: {
          ':active': {
            color: '$textLight0',
          },
          ':hover': {
            color: '$textLight0',
          },
          color: '$textLight0',
        },
        _spinner: {
          ':active': {
            props: { color: '$textLight0' },
          },
          ':hover': {
            props: { color: '$textLight0' },
          },
          props: { color: '$textLight0' },
        },
        _text: {
          ':active': {
            color: '$textLight0',
          },
          ':hover': {
            color: '$textLight0',
          },
          color: '$textLight0',
        },
      },
      variant: 'solid',
    },
  ],
  flexDirection: 'row',

  justifyContent: 'center',

  props: {
    action: 'primary',
    size: 'md',
    variant: 'solid',
  },

  variants: {
    action: {
      default: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: '$backgroundLight50',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: '$backgroundDark900',
          },
          bg: 'transparent',
        },
        bg: '$transparent',
      },
      negative: {
        ':active': {
          bg: '$error700',
          borderColor: '$error700',
        },
        ':hover': {
          bg: '$error600',
          borderColor: '$error400',
        },
        _dark: {
          ':active': {
            bg: '$error600',
            borderColor: '$error300',
          },
          ':focusVisible': {
            _web: {
              boxShadow: 'offset 0 0 0 2px $info400',
            },
          },
          ':hover': {
            bg: '$error500',
            borderColor: '$error400',
          },
          _icon: {
            ':active': {
              color: '$error200',
            },
            ':hover': {
              color: '$error300',
            },
            color: '$error300',
          },
          _spinner: {
            ':active': {
              props: { color: '$error200' },
            },
            ':hover': {
              props: { color: '$error300' },
            },
            props: {
              color: '$error300',
            },
          },
          _text: {
            ':active': {
              color: '$error200',
            },
            ':hover': {
              color: '$error300',
            },
            color: '$error300',
          },
          bg: '$error400',
          borderColor: '$error700',
        },

        _icon: {
          ':active': {
            color: '$error700',
          },
          ':hover': {
            color: '$error600',
          },
          color: '$error600',
        },
        _spinner: {
          ':active': {
            props: { color: '$error700' },
          },
          ':hover': {
            props: { color: '$error600' },
          },
          props: {
            color: '$error600',
          },
        },
        _text: {
          ':active': {
            color: '$error700',
          },
          ':hover': {
            color: '$error600',
          },
          color: '$error600',
        },
        bg: '$error500',
        borderColor: '$error300',
      },
      positive: {
        ':active': {
          bg: '$success700',
          borderColor: '$success700',
        },
        ':hover': {
          bg: '$success600',
          borderColor: '$success400',
        },
        _dark: {
          ':active': {
            bg: '$success600',
            borderColor: '$success300',
          },
          ':focusVisible': {
            _web: {
              boxShadow: 'offset 0 0 0 2px $info400',
            },
          },
          ':hover': {
            bg: '$success500',
            borderColor: '$success400',
          },
          _icon: {
            ':active': {
              color: '$success200',
            },
            ':hover': {
              color: '$success300',
            },
            color: '$success300',
          },
          _spinner: {
            ':active': {
              props: { color: '$success200' },
            },
            ':hover': {
              props: { color: '$success300' },
            },
            props: {
              color: '$success300',
            },
          },
          _text: {
            ':active': {
              color: '$success200',
            },
            ':hover': {
              color: '$success300',
            },
            color: '$success300',
          },
          bg: '$success400',
          borderColor: '$success700',
        },

        _icon: {
          ':active': {
            color: '$success700',
          },
          ':hover': {
            color: '$success600',
          },
          color: '$success600',
        },

        _spinner: {
          ':active': {
            props: { color: '$success700' },
          },
          ':hover': {
            props: { color: '$success600' },
          },
          props: {
            color: '$success600',
          },
        },
        _text: {
          ':active': {
            color: '$success700',
          },
          ':hover': {
            color: '$success600',
          },
          color: '$success600',
        },
        bg: '$success500',
        borderColor: '$success300',
      },
      primary: {
        ':active': {
          bg: '$primary700',
          borderColor: '$primary700',
        },
        ':hover': {
          bg: '$primary600',
          borderColor: '$primary400',
        },

        _dark: {
          ':active': {
            bg: '$primary600',
            borderColor: '$primary300',
          },
          ':focusVisible': {
            _web: {
              boxShadow: 'offset 0 0 0 2px $info400',
            },
          },
          ':hover': {
            bg: '$primary500',
            borderColor: '$primary400',
          },
          _icon: {
            ':active': {
              color: '$primary200',
            },
            ':hover': {
              color: '$primary300',
            },
            color: '$primary300',
          },
          _spinner: {
            ':active': {
              props: { color: '$primary200' },
            },
            ':hover': {
              props: { color: '$primary300' },
            },
            props: { color: '$primary300' },
          },
          _text: {
            ':active': {
              color: '$primary200',
            },
            ':hover': {
              color: '$primary300',
            },
            color: '$primary300',
          },
          bg: '$primary400',

          borderColor: '$primary700',
        },

        _icon: {
          ':active': {
            color: '$primary700',
          },
          ':hover': {
            color: '$primary600',
          },
          color: '$primary600',
        },

        _spinner: {
          ':active': {
            props: {
              color: '$primary700',
            },
          },
          ':hover': {
            props: {
              color: '$primary600',
            },
          },
          props: {
            color: '$primary600',
          },
        },

        _text: {
          ':active': {
            color: '$primary700',
          },
          ':hover': {
            color: '$primary600',
          },
          color: '$primary600',
        },

        bg: '$primary500',

        borderColor: '$primary300',
      },

      secondary: {
        ':active': {
          bg: '$secondary700',
          borderColor: '$secondary700',
        },
        ':hover': {
          bg: '$secondary600',
          borderColor: '$secondary400',
        },

        _dark: {
          ':active': {
            bg: '$secondary600',
            borderColor: '$secondary300',
          },
          ':hover': {
            bg: '$secondary500',
            borderColor: '$secondary400',
          },
          _icon: {
            ':active': {
              color: '$secondary200',
            },
            ':hover': {
              color: '$secondary300',
            },
            color: '$secondary300',
          },
          _spinner: {
            ':active': {
              props: { color: '$secondary200' },
            },
            ':hover': {
              props: { color: '$secondary300' },
            },
            props: {
              color: '$secondary300',
            },
          },
          _text: {
            ':active': {
              color: '$secondary200',
            },
            ':hover': {
              color: '$secondary300',
            },
            color: '$secondary300',
          },
          bg: '$secondary400',
          borderColor: '$secondary700',
        },

        _icon: {
          ':active': {
            color: '$secondary700',
          },
          ':hover': {
            color: '$secondary600',
          },
          color: '$secondary600',
        },

        _spinner: {
          ':active': {
            props: { color: '$secondary700' },
          },
          ':hover': {
            props: { color: '$secondary600' },
          },
          props: {
            color: '$secondary600',
          },
        },
        _text: {
          ':active': {
            color: '$secondary700',
          },
          ':hover': {
            color: '$secondary600',
          },
          color: '$secondary600',
        },

        bg: '$secondary500',

        borderColor: '$secondary300',
      },
    },

    size: {
      lg: {
        _icon: {
          props: {
            size: 'md',
          },
        },
        _text: {
          props: {
            size: 'lg',
          },
        },
        h: '$11',
        px: '$6',
      },
      md: {
        _icon: {
          props: {
            size: 'md',
          },
        },
        _text: {
          props: {
            size: 'md',
          },
        },
        h: '$10',
        px: '$5',
      },
      sm: {
        _icon: {
          props: {
            size: 'sm',
          },
        },
        _text: {
          props: {
            size: 'sm',
          },
        },
        h: '$9',
        px: '$4',
      },
      xl: {
        _icon: {
          props: {
            size: 'lg',
          },
        },
        _text: {
          props: {
            size: 'xl',
          },
        },
        h: '$12',
        px: '$7',
      },
      xs: {
        _icon: {
          props: {
            size: '2xs',
          },
        },
        _text: {
          props: {
            size: 'xs',
          },
        },
        h: '$8',
        px: '$3.5',
      },
    },

    variant: {
      link: {
        ':active': {
          _text: {
            textDecorationLine: 'underline',
          },
        },
        ':hover': {
          _text: {
            textDecorationLine: 'underline',
          },
        },
        px: '$0',
      },
      outline: {
        ':active': {
          bg: 'transparent',
        },
        ':hover': {
          bg: '$backgroundLight50',
        },
        _dark: {
          ':active': {
            bg: 'transparent',
          },
          ':hover': {
            bg: '$backgroundDark900',
          },
          bg: 'transparent',
        },
        bg: 'transparent',
        borderWidth: '$1',
      },
      solid: {
        _dark: {
          _icon: {
            ':active': {
              props: { color: '$textDark0' },
            },
            ':hover': {
              props: { color: '$textDark0' },
            },
            props: { color: '$textDark0' },
          },
          _spinner: {
            ':active': {
              props: { color: '$textDark0' },
            },
            ':hover': {
              props: { color: '$textDark0' },
            },
            props: { color: '$textDark0' },
          },
          _text: {
            ':active': {
              color: '$textDark0',
            },
            ':hover': {
              color: '$textDark0',
            },
            color: '$textDark0',
          },
        },
        _icon: {
          ':active': {
            props: { color: '$textLight0' },
          },
          ':hover': {
            props: { color: '$textLight0' },
          },
          props: { color: '$textLight0' },
        },
        _spinner: {
          ':active': {
            props: { color: '$textLight0' },
          },
          ':hover': {
            props: { color: '$textLight0' },
          },
          props: { color: '$textLight0' },
        },
        _text: {
          ':active': {
            color: '$textLight0',
          },
          ':hover': {
            color: '$textLight0',
          },
          color: '$textLight0',
        },
      },
    },
  },
})
