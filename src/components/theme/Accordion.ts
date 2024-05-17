import { createStyle } from '@gluestack-style/react'

export const Accordion = createStyle({
  _contentText: {
    _dark: {
      color: '$textDark200',
    },
    color: '$textLight700',
  },
  _icon: {
    _dark: {
      color: '$textDark50',
    },
    color: '$textLight900',
  },
  _titleText: {
    _dark: {
      color: '$textDark50',
    },
    color: '$textLight900',
  },
  defaultProps: {
    size: 'md',
    theme: 'light',
    variant: 'filled',
  },

  variants: {
    size: {
      lg: {
        _contentText: {
          fontFamily: '$body',
          fontSize: '$lg',
          fontWeight: '$normal',
          lineHeight: '$lg',
        },
        _titleText: {
          fontFamily: '$body',
          fontSize: '$lg',
          fontWeight: '$bold',
          lineHeight: '$lg',
        },
      },
      md: {
        _contentText: {
          fontFamily: '$body',
          fontSize: '$md',
          fontWeight: '$normal',
          lineHeight: '$md',
        },
        _titleText: {
          fontFamily: '$body',
          fontSize: '$md',
          fontWeight: '$bold',
          lineHeight: '$md',
        },
      },
      sm: {
        _contentText: {
          fontFamily: '$body',
          fontSize: '$sm',
          fontWeight: '$normal',
          lineHeight: '$sm',
        },
        _titleText: {
          fontFamily: '$body',
          fontSize: '$sm',
          fontWeight: '$bold',
          lineHeight: '$sm',
        },
      },
    },
    variant: {
      filled: {
        _dark: {
          _item: {
            backgroundColor: '$backgroundDark950',
          },
          backgroundColor: 'transparent',
        },
        _item: {
          backgroundColor: '$backgroundLight0',
        },
        backgroundColor: '$white',
        elevation: 10,
        shadowColor: '$backgroundLight900',
        shadowOffset: {
          height: 3,
          width: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      unfilled: {
        _dark: {
          _item: {
            backgroundColor: 'transparent',
          },
        },
        _item: {
          backgroundColor: 'transparent',
        },
        shadowColor: 'transparent',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
    },
  },
  width: '$full',
})
