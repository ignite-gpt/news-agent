import { createStyle } from '@gluestack-style/react'

export const ButtonGroupVSpacer = createStyle({
  variants: {
    space: {
      lg: {
        h: '$3',
      },
      md: {
        h: '$2',
      },
      sm: {
        h: '$1.5',
      },
      xl: {
        h: '$4',
      },
      xs: {
        h: '$1',
      },
    },
  },
})
