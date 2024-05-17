import { createStyle } from '@gluestack-style/react'

export const Divider = createStyle({
  _dark: {
    bg: '$backgroundLight800',
  },
  bg: '$backgroundLight200',
  defaultProps: {
    orientation: 'horizontal',
  },
  variants: {
    orientation: {
      horizontal: {
        height: '$px',
        width: '$full',
      },
      vertical: {
        height: '$full',
        width: '$px',
      },
    },
  },
})
