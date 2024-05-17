import { createStyle } from '@gluestack-style/react'

export const FormControl = createStyle({
  defaultProps: {
    size: 'md',
  },
  flexDirection: 'column',

  variants: {
    size: {
      lg: {
        _errorText: {
          props: { size: 'md' },
        },
        _helperText: {
          props: { size: 'md' },
        },
        _labelAstrick: {
          props: { size: 'lg' },
        },
        _labelText: {
          props: { size: 'lg' },
        },
      },
      md: {
        _errorText: {
          props: { size: 'sm' },
        },
        _helperText: {
          props: { size: 'sm' },
        },
        _labelAstrick: {
          props: { size: 'md' },
        },
        _labelText: {
          props: { size: 'md' },
        },
      },
      sm: {
        _errorText: {
          props: { size: 'xs' },
        },
        _helperText: {
          props: { size: 'xs' },
        },
        _labelAstrick: {
          props: { size: 'sm' },
        },
        _labelText: {
          props: { size: 'sm' },
        },
      },
    },
  },
})
