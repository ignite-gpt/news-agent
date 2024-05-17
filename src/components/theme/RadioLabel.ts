import { createStyle } from '@gluestack-style/react'

export const RadioLabel = createStyle({
  ':active': {
    ':checked': {
      color: '$textLight900',
    },
    color: '$textLight900',
  },
  ':checked': {
    color: '$textLight900',
  },
  ':disabled': {
    opacity: 0.4,
  },
  ':hover': {
    ':checked': {
      color: '$textLight900',
    },
    ':disabled': {
      ':checked': {
        color: '$textLight900',
      },
      color: '$textLight600',
    },
    color: '$textLight900',
  },

  _dark: {
    ':active': {
      ':checked': {
        color: '$textDark100',
      },
      color: '$textDark100',
    },
    ':checked': {
      color: '$textDark100',
    },
    ':hover': {
      ':checked': {
        color: '$textDark100',
      },
      ':disabled': {
        ':checked': {
          color: '$textDark100',
        },
        color: '$textDark400',
      },
      color: '$textDark100',
    },
    color: '$textDark400',
  },

  _web: {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  color: '$textLight600',
})
