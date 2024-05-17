import { createStyle } from '@gluestack-style/react'

export const Pressable = createStyle({
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
})
