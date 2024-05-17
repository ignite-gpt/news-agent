import { createStyle } from '@gluestack-style/react'

export const TabsTab = createStyle({
  ':active': {
    // bg: '$secondary50_alpha_10',
    borderRadius: '$full',
  },
  ':disabled': {
    opacity: 0.5,
  },

  ':focus': {
    // bg: '$secondary50_alpha_20',
    borderRadius: '$full',
  },

  ':hover': {
    // bg: '$secondary50_alpha_20',
    borderRadius: '$full',
  },
  _dark: {
    ':active': {
      bg: '$backgroundLight400',
      borderRadius: '$full',
    },
    ':disabled': {
      opacity: 0.5,
    },
    ':focus': {
      bg: '$backgroundLight400',
      borderRadius: '$full',
    },
    ':hover': {
      bg: '$backgroundLight500',
      borderRadius: '$full',
    },
  },
  _web: {
    outlineWidth: 0,
  },
  bg: 'transparent',
  defaultProps: {
    size: 'md',
  },

  variants: {
    size: {
      md: {
        _text: {
          fontSize: '$md',
          lineHeight: '$md',
        },
        px: '$4',

        py: '$2',
      },
    },
  },
})
