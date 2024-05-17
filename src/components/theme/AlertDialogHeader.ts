import { createStyle } from '@gluestack-style/react'

export const AlertDialogHeader = createStyle({
  _dark: {
    borderColor: '$borderDark700',
  },
  alignItems: 'center',
  borderColor: '$borderLight300',
  flexDirection: 'row',
  justifyContent: 'space-between',
  p: '$4',
})
