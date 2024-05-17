import { createStyle } from '@gluestack-style/react'

export const SelectActionsheetContent = createStyle({
  // @ts-ignore
  _dark: {
    _sectionHeaderBackground: {
      bg: '$backgroundDark900',
    },
    bg: '$backgroundDark900',
  },
  _sectionHeaderBackground: {
    bg: '$backgroundLight0',
  },
  _web: {
    userSelect: 'none',
  },
  alignItems: 'center',
  bg: '$backgroundLight0',
  borderTopLeftRadius: '$3xl',
  borderTopRightRadius: '$3xl',
  defaultProps: {
    hardShadow: '5',
  },
  maxHeight: '70%',
  p: '$2',
  pointerEvents: 'auto',
})
