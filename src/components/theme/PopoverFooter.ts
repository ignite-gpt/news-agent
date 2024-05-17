import { createStyle } from '@gluestack-style/react'

export const PopoverFooter = createStyle({
  _dark: {
    borderColor: '$borderDark700',
  },
  alignItems: 'center',
  borderColor: '$borderLight300',
  borderTopWidth: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',

  p: '$4',
})
