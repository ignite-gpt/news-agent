import { createStyle } from '@gluestack-style/react'

export const AlertDialogFooter = createStyle({
  _dark: {
    borderColor: '$borderDark700',
  },
  alignItems: 'center',
  borderColor: '$borderLight300',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  p: '$4',
})
