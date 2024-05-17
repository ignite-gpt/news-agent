import { createStyle } from '@gluestack-style/react'

export const ActionsheetContent = createStyle({
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
    pointerEvents: 'auto',
    userSelect: 'none',
  },
  alignItems: 'center',
  bg: '$backgroundLight0',
  borderTopLeftRadius: '$3xl',
  borderTopRightRadius: '$3xl',
  defaultProps: {
    hardShadow: '5',
  },
  h: '$full',
  p: '$2',
})
