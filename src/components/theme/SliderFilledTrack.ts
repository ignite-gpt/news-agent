import { createStyle } from '@gluestack-style/react'

export const SliderFilledTrack = createStyle({
  ':active': {
    _dark: {
      bg: '$primary300',
    },
    bg: '$primary600',
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
  bg: '$primary500',
})
