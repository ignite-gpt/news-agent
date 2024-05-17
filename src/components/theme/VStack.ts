import { createStyle } from '@gluestack-style/react'

export const VStack = createStyle({
  flexDirection: 'column',
  variants: {
    reversed: {
      true: {
        flexDirection: 'column-reverse',
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
