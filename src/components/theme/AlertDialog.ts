import { createStyle } from '@gluestack-style/react'

export const AlertDialog = createStyle({
  _web: {
    pointerEvents: 'box-none',
  },
  alignItems: 'center',
  defaultProps: { size: 'md' },
  h: '$full',

  justifyContent: 'center',
  variants: {
    size: {
      full: { _content: { w: '$full' } },
      lg: { _content: { maxWidth: 640, w: '90%' } },
      md: { _content: { maxWidth: 510, w: '80%' } },
      sm: { _content: { maxWidth: 420, w: '70%' } },
      xs: { _content: { maxWidth: 360, w: '60%' } },
    },
  },

  w: '$full',
})
