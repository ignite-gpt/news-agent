import { createStyle } from '@gluestack-style/react'

export const PopoverCloseButton = createStyle({
  ':active': {
    _icon: {
      color: '$backgroundLight900',
    },
    _text: {
      color: '$backgroundLight900',
    },
  },
  ':focusVisible': {
    _dark: {
      _icon: {
        color: '$backgroundLight100',
      },
      _text: {
        color: '$backgroundLight100',
      },
      bg: '$backgroundDark700',
    },
    _icon: {
      color: '$backgroundLight900',
    },
    _text: {
      color: '$backgroundLight900',
    },
    bg: '$backgroundLight100',
  },
  ':hover': {
    _icon: {
      color: '$backgroundLight700',
    },
    _text: {
      color: '$backgroundLight700',
    },
  },
  _dark: {
    ':active': {
      _icon: {
        color: '$backgroundDark100',
      },
      _text: {
        color: '$backgroundDark100',
      },
    },
    ':hover': {
      _icon: {
        color: '$backgroundDark200',
      },
      _text: {
        color: '$backgroundDark200',
      },
    },
    _icon: {
      color: '$backgroundDark400',
    },

    _text: {
      color: '$backgroundDark400',
    },
  },
  _icon: {
    color: '$backgroundLight400',
  },

  _text: {
    color: '$backgroundLight400',
  },

  _web: {
    cursor: 'pointer',
    outlineWidth: 0,
  },

  p: '$2',
  rounded: '$sm',

  zIndex: 1,
})
