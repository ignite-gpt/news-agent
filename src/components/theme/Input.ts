import { createStyle } from '@gluestack-style/react'

export const Input = createStyle({
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
      borderColor: '$borderDark400',
    },
    borderColor: '$borderDark700',
  },
  _icon: {
    color: '$textLight400',
  },
  _input: {
    overflow: 'hidden',
    px: '$3',
    py: 'auto',
  },

  alignContent: 'center',

  borderColor: '$backgroundLight300',

  borderRadius: '$sm',

  borderWidth: 1,

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },

  flexDirection: 'row',

  overflow: 'hidden',

  variants: {
    size: {
      lg: {
        _icon: {
          props: {
            size: 'lg',
          },
        },
        _input: {
          props: {
            size: 'lg',
          },
        },
        h: '$11',
      },
      md: {
        _icon: {
          props: {
            size: 'sm',
          },
        },
        _input: {
          props: {
            size: 'md',
          },
        },
        h: '$10',
      },
      sm: {
        _icon: {
          props: {
            size: 'xs',
          },
        },
        _input: {
          props: {
            size: 'sm',
          },
        },
        h: '$9',
      },
      xl: {
        _icon: {
          props: {
            size: 'xl',
          },
        },
        _input: {
          props: {
            size: 'xl',
          },
        },
        h: '$12',
      },
    },
    variant: {
      outline: {
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
                boxShadow: 'inset 0 0 0 1px $error700',
              },
              borderColor: '$error700',
            },
            borderColor: '$error700',
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
                  boxShadow: 'inset 0 0 0 1px $error400',
                },
                borderColor: '$error400',
              },
              borderColor: '$error400',
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
            outlineWidth: 0,
          },
        },
      },

      rounded: {
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
                boxShadow: 'inset 0 0 0 1px $error700',
              },
              borderColor: '$error700',
            },
            borderColor: '$error700',
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
                  boxShadow: 'inset 0 0 0 1px $error400',
                },
                borderColor: '$error400',
              },
              borderColor: '$error400',
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
            outlineWidth: 0,
          },
          px: '$4',
        },

        borderRadius: 999,
      },

      underlined: {
        ':focus': {
          _web: {
            boxShadow: 'inset 0 -1px 0 0 $primary700',
          },
          borderColor: '$primary700',
        },
        ':invalid': {
          ':disabled': {
            ':hover': {
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $error700',
              },
              borderBottomColor: '$error700',
            },
          },
          ':focus': {
            ':hover': {
              _web: {
                boxShadow: 'inset 0 -1px 0 0 $error700',
              },
              borderBottomColor: '$error700',
            },
            borderBottomColor: '$error700',
          },
          ':hover': {
            borderBottomColor: '$error700',
          },
          _web: {
            boxShadow: 'inset 0 -1px 0 0 $error700',
          },
          borderBottomColor: '$error700',
          borderBottomWidth: 2,
        },
        _dark: {
          ':focus': {
            _web: {
              boxShadow: 'inset 0 -1px 0 0 $primary400',
            },
            borderColor: '$primary400',
          },
          ':invalid': {
            ':disabled': {
              ':hover': {
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error400',
                },
                borderBottomColor: '$error400',
              },
            },
            ':focus': {
              ':hover': {
                _web: {
                  boxShadow: 'inset 0 -1px 0 0 $error400',
                },
                borderBottomColor: '$error400',
              },
              borderBottomColor: '$error400',
            },
            ':hover': {
              borderBottomColor: '$error400',
            },
            _web: {
              boxShadow: 'inset 0 -1px 0 0 $error400',
            },
            borderColor: '$error400',
          },
        },
        _input: {
          _web: {
            outline: 'none',
            outlineWidth: 0,
          },
          px: '$0',
        },
        borderBottomWidth: '$1',
        borderRadius: 0,
        borderWidth: 0,
      },
    },
  },
})
