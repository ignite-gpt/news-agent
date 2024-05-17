import { createStyle } from '@gluestack-style/react'

export const Modal = createStyle({
  _web: {
    pointerEvents: 'box-none',
  },
  alignItems: 'center',
  defaultProps: { size: 'md' },
  height: '$full',
  justifyContent: 'center',

  variants: {
    size: {
      full: { _content: { width: '100%' } },
      lg: { _content: { maxWidth: 640, width: '90%' } },
      md: { _content: { maxWidth: 510, width: '80%' } },
      sm: { _content: { maxWidth: 420, width: '70%' } },
      xs: { _content: { maxWidth: 360, width: '60%' } },
    },
  },

  width: '$full',
})
