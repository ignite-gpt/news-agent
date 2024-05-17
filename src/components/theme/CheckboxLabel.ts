import { createStyle } from '@gluestack-style/react'

export const CheckboxLabel = createStyle({
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
      ':disabled': {
        color: '$textLight900',
      },
      color: '$textLight900',
    },
    ':disabled': {
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
    ':disabled': {
      color: '$textDark100',
    },
    ':hover': {
      ':checked': {
        ':disabled': {
          color: '$textDark100',
        },
        color: '$textDark100',
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
