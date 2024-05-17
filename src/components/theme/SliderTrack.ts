import { createStyle } from '@gluestack-style/react'

export const SliderTrack = createStyle({
  // h: '100%',
  _dark: {
    bg: '$backgroundDark700',
  },
  // w: '100%',
  bg: '$backgroundLight300',
  borderRadius: '$lg',
  overflow: 'hidden',

  variants: {
    variant: {
      horizontal: {
        width: '100%',
      },
      vertical: {
        height: '100%',
      },
    },
  },
})
