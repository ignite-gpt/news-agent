import { createStyle } from '@gluestack-style/react'

export const FormControlErrorIcon = createStyle({
  _dark: {
    //@ts-ignore
    color: '$error400',
  },
  color: '$error700',
  props: {
    size: 'sm',
  },
})
