import { createStyle } from '@gluestack-style/react'

export const HStack = createStyle({
  flexDirection: 'row',
  variants: {
    reversed: {
      true: {
        flexDirection: 'row-reverse',
      },
    },
    space: {
      '2xl': {
        gap: `$6`,
      },
      '3xl': {
        gap: `$7`,
      },
      '4xl': {
        gap: `$8`,
      },
      lg: {
        gap: `$4`,
      },
      md: {
        gap: `$3`,
      },
      sm: {
        gap: `$2`,
      },
      xl: {
        gap: `$5`,
      },
      xs: {
        gap: `$1`,
      },
    },
  },
})
