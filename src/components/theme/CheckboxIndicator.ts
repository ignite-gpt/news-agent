import { createStyle } from '@gluestack-style/react'

export const CheckboxIndicator = createStyle({
  ':active': {
    ':checked': {
      bg: '$primary800',
      borderColor: '$primary800',
    },
  },
  ':checked': {
    bg: '$primary600',
    borderColor: '$primary600',
  },
  ':disabled': {
    opacity: 0.4,
  },
  ':hover': {
    ':checked': {
      ':disabled': {
        ':invalid': {
          borderColor: '$error700',
        },
        bg: '$primary600',
        borderColor: '$primary600',
        opacity: 0.4,
      },
      bg: '$primary700',
      borderColor: '$primary700',
    },
    ':disabled': {
      ':invalid': {
        borderColor: '$error700',
      },
      borderColor: '$borderLight400',
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
      ':checked': {
        bg: '$primary300',
        borderColor: '$primary300',
      },
    },
    ':checked': {
      bg: '$primary500',
      borderColor: '$primary500',
    },

    ':disabled': {
      opacity: 0.4,
    },
    ':hover': {
      ':checked': {
        ':disabled': {
          ':invalid': {
            borderColor: '$error400',
          },
          bg: '$primary500',
          borderColor: '$primary500',
          opacity: 0.4,
        },
        bg: '$primary400',
        borderColor: '$primary400',
      },
      ':disabled': {
        ':invalid': {
          borderColor: '$error400',
        },
        borderColor: '$borderDark500',
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
        outlineColor: '$primary300',
      },
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      outlineWidth: '2px',
    },
  },

  alignItems: 'center',

  bg: '$transparent',
  borderColor: '$borderLight400',
  borderRadius: 4,

  justifyContent: 'center',
})
