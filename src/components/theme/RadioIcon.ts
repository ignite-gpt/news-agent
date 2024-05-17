import { createStyle } from '@gluestack-style/react'

export const RadioIcon = createStyle({
  ':checked': {
    ':hover': {
      ':disabled': {
        color: '$primary600',
      },
      color: '$primary700',
    },
    color: '$primary600',
  },
  _dark: {
    ':checked': {
      ':disabled': {
        color: '$primary500',
      },
      ':hover': {
        ':disabled': {
          color: '$primary500',
        },
        color: '$primary400',
      },
      color: '$primary500',
    },
  },
  borderRadius: '$full',
})
