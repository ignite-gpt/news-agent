import { createStyle } from '@gluestack-style/react'

export const AvatarFallbackText = createStyle({
  _web: {
    cursor: 'default',
  },
  color: '$textLight0',
  fontWeight: '$semibold',
  overflow: 'hidden',
  props: {
    size: 'xl',
  },
  textTransform: 'uppercase',
})
