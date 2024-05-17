import { createStyle } from '@gluestack-style/react'

export const MenuBackdrop = createStyle({
  // bg: '$backgroundLight500',
  _web: {
    cursor: 'default',
  },
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  // use this for when you want to give background colour to backdrop
  // opacity: 0.5,
  top: 0,
})
