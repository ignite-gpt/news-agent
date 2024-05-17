import { createStyle } from '@gluestack-style/react'

export const RadioIndicator = createStyle({
  ':active': {
    bg: 'transparent',
    borderColor: '$primary800',
  },
  ':checked': {
    bg: 'transparent',
    borderColor: '$primary600',
  },
  ':disabled': {
    ':checked': {
      bg: 'transparent',
      borderColor: '$borderLight400',
    },
    ':invalid': {
      borderColor: '$error400',
    },
    opacity: 0.4,
  },
  ':hover': {
    ':checked': {
      bg: 'transparent',
      borderColor: '$primary700',
    },
    ':disabled': {
      ':invalid': {
        borderColor: '$error400',
        opacity: 0.4,
      },
      borderColor: '$borderLight400',
      opacity: 0.4,
    },

    ':invalid': {
      borderColor: '$error700',
    },
    bg: 'transparent',
    borderColor: '$borderLight500',
  },
  ':invalid': {
    borderColor: '$error700',
  },
  _dark: {
    ':active': {
      bg: 'transparent',
      borderColor: '$primary300',
    },
    ':checked': {
      borderColor: '$primary500',
    },

    ':hover': {
      ':checked': {
        bg: 'transparent',
        borderColor: '$primary400',
      },
      ':disabled': {
        ':checked': {
          bg: 'transparent',
          borderColor: '$primary500',
        },
        ':invalid': {
          borderColor: '$error400',
        },
        borderColor: '$borderDark500',
        opacity: 0.4,
      },

      ':invalid': {
        borderColor: '$error400',
      },
      bg: 'transparent',
      borderColor: '$borderDark400',
    },

    ':invalid': {
      borderColor: '$error400',
    },

    bg: '$transparent',
    borderColor: '$borderDark500',
  },
  _web: {
    ':focusVisible': {
      _dark: {
        outlineColor: '$primary400',
      },
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      outlineWidth: 2,
    },
  },

  alignItems: 'center',

  bg: 'transparent',

  borderColor: '$borderLight400',

  borderRadius: 999,

  borderWidth: 2,

  justifyContent: 'center',
})
