import { createStyle } from '@gluestack-style/react'

export const Toast = createStyle({
  _web: {
    pointerEvents: 'auto',
  },
  borderRadius: '$sm',
  defaultProps: {
    action: 'attention',
    hardShadow: '5',
    variant: 'solid',
  },
  flexDirection: 'row',
  m: '$3',
  px: '$4',

  py: '$3',
  variants: {
    action: {
      attention: {
        _dark: {
          _icon: {
            color: '$secondary400',
          },
          bg: '$backgroundDarkMuted',
          borderColor: '$secondary700',
        },
        _icon: {
          color: '$secondary600',
        },
        bg: '$backgroundLightMuted',
        borderColor: '$secondary300',
      },
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
      success: {
        _dark: {
          _icon: {
            color: '$warning500',
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
