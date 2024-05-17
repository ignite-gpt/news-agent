import { createStyle } from '@gluestack-style/react'

export const Fab = createStyle({
  ':active': {
    bg: '$primary700',
  },
  ':disabled': {
    _web: {
      cursor: 'not-allowed',
      // @ts-ignore
      pointerEvents: 'all !important',
    },
    opacity: 0.4,
  },
  ':hover': {
    bg: '$primary600',
  },
  _dark: {
    ':active': {
      bg: '$primary600',
    },
    ':disabled': {
      _web: {
        cursor: 'not-allowed',
      },
      opacity: 0.4,
    },
    ':hover': {
      bg: '$primary500',
    },
    bg: '$primary400',
  },
  _icon: {
    ':active': {
      color: '$textLight0',
    },
    ':hover': {
      color: '$textLight0',
    },
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
    },
    color: '$textLight50',
  },

  _text: {
    _dark: {
      _text: {
        color: '$textDark50',
      },
    },
    color: '$textLight50',
    fontWeight: '$normal',
  },
  _web: {
    ':focusVisible': {
      _dark: {
        outlineColor: '$primary300',
      },
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      outlineWidth: 2,
    },
  },
  alignItems: 'center',
  bg: '$primary500',

  defaultProps: {
    hardShadow: '2',
    placement: 'bottom right',
    size: 'md',
  },

  flexDirection: 'row',

  justifyContent: 'center',

  p: 16,

  position: 'absolute',

  rounded: '$full',

  variants: {
    placement: {
      'bottom center': {
        alignSelf: 'center',
        bottom: '$4',
        // TODO: fix this, this is correct way, but React Native doesn't support this on Native
        // left: '50%',
        // transform: [
        //   {
        //     // @ts-ignore
        //     translateX: '-50%',
        //   },
        // ],
      },

      'bottom left': {
        bottom: '$4',
        left: '$4',
      },

      'bottom right': {
        bottom: '$4',
        right: '$4',
      },

      'top center': {
        alignSelf: 'center',
        top: '$4',
        // TODO: fix this, this is correct way, but React Native doesn't support this on Native
        // left: '50%',
        // transform: [
        //   {
        //     // @ts-ignore
        //     translateX: '-50%',
        //   },
        // ],
      },

      'top left': {
        left: '$4',
        top: '$4',
      },

      'top right': {
        right: '$4',
        top: '$4',
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
          fontSize: '$lg',
        },
        px: '$4',
        py: '$4',
      },
      md: {
        _icon: {
          props: {
            size: 'md',
          },
        },
        _text: {
          fontSize: '$md',
        },
        px: '$3',
        py: '$3',
      },
      sm: {
        _icon: {
          props: {
            size: 'sm',
          },
        },
        _text: {
          fontSize: '$sm',
        },
        px: '$2.5',
        py: '$2.5',
      },
    },
  },
  zIndex: 20,
})
