import { createStyle } from '@gluestack-style/react'

export const Card = createStyle({
  defaultProps: {
    size: 'md',
    theme: 'light',
    variant: 'elevated',
  },
  variants: {
    size: {
      lg: {
        borderRadius: '$xl',
        p: '$6',
      },
      md: {
        borderRadius: '$md',
        p: '$4',
      },
      sm: {
        borderRadius: '$sm',
        p: '$3',
      },
    },
    variant: {
      elevated: {
        _dark: {
          bg: '$backgroundDark900',
        },
        bg: '$backgroundLight0',
        elevation: 3,
        shadowColor: '$backgroundLight800',
        shadowOffset: {
          height: 1,
          width: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      filled: {
        _dark: {
          bg: '$backgroundDark900',
        },
        bg: '$backgroundLight50',
      },
      ghost: {
        borderRadius: 'none',
      },
      outline: {
        _dark: {
          borderColor: '$borderDark800',
        },
        borderColor: '$borderLight200',
        borderWidth: 1,
      },
    },
  },
})
