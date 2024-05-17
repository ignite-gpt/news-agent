import { createStyle } from '@gluestack-style/react'

export const InputSlot = createStyle({
  _web: {
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
  alignItems: 'center',
  justifyContent: 'center',
})
