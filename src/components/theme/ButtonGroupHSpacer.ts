import { createStyle } from '@gluestack-style/react'

export const ButtonGroupHSpacer = createStyle({
  variants: {
    space: {
      lg: {
        w: '$3',
      },
      md: {
        w: '$2',
      },
      sm: {
        w: '$1.5',
      },
      xl: {
        w: '$4',
      },
      xs: {
        w: '$1',
      },
    },
  },
})
