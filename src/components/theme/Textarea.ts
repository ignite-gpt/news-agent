import { createStyle } from '@gluestack-style/react'

export const Textarea = createStyle({
  ':disabled': {
    ':hover': {
      borderColor: '$backgroundLight300',
    },
    opacity: 0.4,
  },
  ':focus': {
    ':hover': {
      borderColor: '$primary700',
    },
    borderColor: '$primary700',
  },
  ':hover': {
    borderColor: '$borderLight400',
  },
  _dark: {
    ':disabled': {
      ':hover': {
        borderColor: '$borderDark700',
      },
    },
    ':focus': {
      ':hover': {
        borderColor: '$primary400',
      },
      borderColor: '$primary400',
    },
    ':hover': {
      borderColor: '$borderDark600',
    },
    borderColor: '$borderDark700',
  },
  _input: {
    _web: {
      outline: 'none',
      outlineWidth: 0,
    },
    p: '$3',
  },
  borderColor: '$backgroundLight300',
  borderRadius: '$sm',

  borderWidth: 1,

  defaultProps: {
    size: 'md',
    variant: 'default',
  },
  h: 100,

  variants: {
    size: {
      lg: {
        _input: {
          fontSize: '$lg',
        },
      },

      md: {
        _input: {
          fontSize: '$md',
        },
      },
      sm: {
        _input: {
          fontSize: '$sm',
        },
      },
      xl: {
        _input: {
          fontSize: '$xl',
        },
      },
    },
    variant: {
      default: {
        ':focus': {
          _web: {
            boxShadow: 'inset 0 0 0 1px $primary700',
          },
          borderColor: '$primary700',
        },
        ':invalid': {
          ':disabled': {
            ':hover': {
              _web: {
                boxShadow: 'inset 0 0 0 1px $error700',
              },
              borderColor: '$error700',
            },
          },
          ':focus': {
            ':hover': {
              _web: {
                boxShadow: 'inset 0 0 0 1px $primary700',
              },
              borderColor: '$primary700',
            },
          },
          ':hover': {
            borderColor: '$error700',
          },
          _web: {
            boxShadow: 'inset 0 0 0 1px $error700',
          },
          borderColor: '$error700',
        },
        _dark: {
          ':focus': {
            _web: {
              boxShadow: 'inset 0 0 0 1px $primary400',
            },
            borderColor: '$primary400',
          },
          ':invalid': {
            ':disabled': {
              ':hover': {
                _web: {
                  boxShadow: 'inset 0 0 0 1px $error400',
                },
                borderColor: '$error400',
              },
            },
            ':focus': {
              ':hover': {
                _web: {
                  boxShadow: 'inset 0 0 0 1px $primary400',
                },
                borderColor: '$primary400',
              },
            },
            ':hover': {
              borderColor: '$error400',
            },
            _web: {
              boxShadow: 'inset 0 0 0 1px $error400',
            },
            borderColor: '$error400',
          },
        },
        _input: {
          _web: {
            outline: 'none',
            outlineWidth: '0',
          },
        },
      },
    },
  },

  w: '100%',
})
