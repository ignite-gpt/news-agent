import { createStyle } from '@gluestack-style/react'

export const Alert = createStyle({
  alignItems: 'center',
  borderRadius: '$sm',
  defaultProps: {
    action: 'info',
    variant: 'solid',
  },
  flexDirection: 'row',
  p: '$3',

  variants: {
    action: {
      error: {
        _dark: {
          _icon: {
            color: '$error500',
          },
          bg: '$backgroundDarkError',
          borderColor: '$error700',
        },
        _icon: {
          color: '$error500',
        },
        bg: '$backgroundLightError',
        borderColor: '$error300',
      },
      info: {
        _dark: {
          _icon: {
            color: '$info500',
          },
          bg: '$backgroundDarkInfo',
          borderColor: '$info700',
        },
        _icon: {
          color: '$info500',
        },
        bg: '$backgroundLightInfo',
        borderColor: '$info300',
      },
      muted: {
        _dark: {
          _icon: {
            color: '$secondary500',
          },
          bg: '$backgroundDarkMuted',
          borderColor: '$secondary700',
        },
        _icon: {
          color: '$secondary500',
        },
        bg: '$backgroundLightMuted',
        borderColor: '$secondary300',
      },
      success: {
        _dark: {
          _icon: {
            color: '$success500',
          },
          bg: '$backgroundDarkSuccess',
          borderColor: '$success700',
        },
        _icon: {
          color: '$success500',
        },
        bg: '$backgroundLightSuccess',
        borderColor: '$success300',
      },
      warning: {
        _dark: {
          _icon: {
            color: '$warning500',
          },
          bg: '$backgroundDarkWarning',
          borderColor: '$warning700',
        },
        _icon: {
          color: '$warning500',
        },
        bg: '$backgroundLightWarning',
        borderColor: '$warning300',
      },
    },

    variant: {
      accent: {
        borderLeftWidth: '$4',
      },
      outline: {
        _dark: {
          bg: '$black',
        },
        bg: '$white',
        borderWidth: '$1',
      },
      solid: {},
    },
  },
})
