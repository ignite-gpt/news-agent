import { createStyle } from '@gluestack-style/react'

export const SliderThumb = createStyle({
  ':active': {
    _dark: {
      bg: '$primary300',
    },
    bg: '$primary600',
  },
  ':disabled': {
    _dark: {
      bg: '$primary500',
    },
    bg: '$primary500',
  },
  ':focus': {
    _dark: {
      bg: '$primary300',
    },
    bg: '$primary600',
  },
  ':hover': {
    _dark: {
      bg: '$primary300',
    },
    bg: '$primary600',
  },
  _dark: {
    bg: '$primary400',
  },
  _web: {
    ':active': {
      _dark: {
        outlineColor: '$primary500',
      },
      outlineColor: '$primary400',
      outlineStyle: 'solid',
      outlineWidth: 4,
    },
    ':focus': {
      _dark: {
        outlineColor: '$primary500',
      },
      outlineColor: '$primary400',
      outlineStyle: 'solid',
      outlineWidth: 4,
    },
    //@ts-ignore
    cursor: 'pointer',
  },
  bg: '$primary500',
  borderRadius: '$full',
  defaultProps: {
    hardShadow: '1',
  },
  position: 'absolute',
})
