import { createStyle } from '@gluestack-style/react'

export const TextareaInput = createStyle({
  _dark: {
    color: '$textDark50',
    props: {
      placeholderTextColor: '$textDark400',
    },
  },
  _web: {
    ':disabled': {
      cursor: 'not-allowed',
    },
    cursor: 'text',
  },
  color: '$textLight900',
  flex: 1,
  p: '$2',
  props: {
    // @ts-ignore
    multiline: true,
    placeholderTextColor: '$textLight500',
  },
  textAlignVertical: 'top',
})
