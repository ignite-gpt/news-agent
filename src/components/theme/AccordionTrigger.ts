import { createStyle } from '@gluestack-style/react'

export const AccordionTrigger = createStyle({
  ':disabled': {
    _web: {
      cursor: 'not-allowed',
    },
    opacity: 0.4,
  },
  ':focusVisible': {
    _dark: {
      bg: '$backgroundDark900',
    },
    _light: {
      bg: '$backgroundLight50',
    },
  },
  _web: {
    outlineWidth: 0,
  },
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  px: '$5',
  py: '$5',
  width: '$full',
})
