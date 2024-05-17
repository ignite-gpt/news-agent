import { createStyle } from '@gluestack-style/react'

export const InputField = createStyle({
  _dark: {
    color: '$textDark50',
    props: {
      placeholderTextColor: '$textDark400',
    },
  },
  _web: {
    ':disabled': {
      cursor: 'not-allowed',
    },
    cursor: 'text',
  },
  color: '$textLight900',
  flex: 1,
  props: {
    placeholderTextColor: '$textLight500',
  },
  variants: {
    size: {
      '2xl': {
        fontSize: '$2xl',
      },
      '2xs': {
        fontSize: '$2xs',
      },

      '3xl': {
        fontSize: '$3xl',
      },

      '4xl': {
        fontSize: '$4xl',
      },

      '5xl': {
        fontSize: '$5xl',
      },

      '6xl': {
        fontSize: '$6xl',
      },

      lg: {
        fontSize: '$lg',
      },

      md: {
        fontSize: '$md',
      },

      sm: {
        fontSize: '$sm',
      },

      xl: {
        fontSize: '$xl',
      },

      xs: {
        fontSize: '$xs',
      },
    },
  },
})
