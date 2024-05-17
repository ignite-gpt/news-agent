import { createStyle } from '@gluestack-style/react'

export const Link = createStyle({
  _text: {
    ':active': {
      color: '$info700',
    },
    ':disabled': {
      opacity: 0.4,
    },
    ':hover': {
      color: '$info600',
      textDecorationLine: 'none',
    },
    _dark: {
      ':active': {
        color: '$info300',
      },
      ':hover': {
        color: '$info400',
      },
    },
  },
  _web: {
    ':disabled': {
      cursor: 'not-allowed',
    },
    ':focusVisible': {
      _dark: {
        outlineColor: '$primary400',
      },
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      outlineWidth: 2,
    },
    outlineWidth: 0,
  },
})
