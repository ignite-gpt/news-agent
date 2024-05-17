import { createStyle } from '@gluestack-style/react'

export const Badge = createStyle({
  ':disabled': {
    opacity: 0.5,
  },
  alignItems: 'center',
  borderRadius: '$xs',
  defaultProps: {
    action: 'info',
    size: 'md',
    variant: 'solid',
  },

  flexDirection: 'row',
  variants: {
    action: {
      error: {
        _dark: {
          _icon: {
            color: '$error400',
          },
          _text: {
            color: '$error400',
          },
          bg: '$backgroundDarkError',
          borderColor: '$error700',
        },
        _icon: {
          color: '$error600',
        },
        _text: {
          color: '$error600',
        },
        bg: '$backgroundLightError',
        borderColor: '$error300',
      },
      info: {
        _dark: {
          _icon: {
            color: '$info400',
          },
          _text: {
            color: '$info400',
          },
          bg: '$backgroundDarkInfo',
          borderColor: '$info700',
        },
        _icon: {
          color: '$info600',
        },
        _text: {
          color: '$info600',
        },
        bg: '$backgroundLightInfo',
        borderColor: '$info300',
      },
      muted: {
        _dark: {
          _icon: {
            color: '$secondary400',
          },
          _text: {
            color: '$secondary400',
          },
          bg: '$backgroundDarkMuted',
          borderColor: '$secondary700',
        },
        _icon: {
          color: '$secondary600',
        },
        _text: {
          color: '$secondary600',
        },
        bg: '$backgroundLightMuted',
        borderColor: '$secondary300',
      },
      success: {
        _dark: {
          _icon: {
            color: '$success400',
          },
          _text: {
            color: '$success400',
          },
          bg: '$backgroundDarkSuccess',
          borderColor: '$success700',
        },
        _icon: {
          color: '$success600',
        },
        _text: {
          color: '$success600',
        },
        bg: '$backgroundLightSuccess',
        borderColor: '$success300',
      },
      warning: {
        _dark: {
          _icon: {
            color: '$warning400',
          },
          _text: {
            color: '$warning400',
          },
          bg: '$backgroundDarkWarning',
          borderColor: '$warning700',
        },
        _icon: {
          color: '$warning600',
        },
        _text: {
          color: '$warning600',
        },
        bg: '$backgroundLightWarning',
        borderColor: '$warning300',
      },
    },

    size: {
      lg: {
        _icon: {
          props: { size: 'sm' },
        },
        _text: {
          props: { size: 'sm' },
        },
        px: '$2',
      },
      md: {
        _icon: {
          props: {
            size: 'xs',
          },
        },
        _text: {
          props: {
            size: 'xs',
          },
        },
        px: '$2',
      },
      sm: {
        _icon: {
          props: {
            size: '2xs',
          },
        },
        _text: {
          props: {
            size: '2xs',
          },
        },
        px: '$2',
      },
    },

    variant: {
      outline: {
        borderWidth: '$1',
      },
      solid: {},
    },
  },
})
