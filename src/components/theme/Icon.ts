import { createStyle } from '@gluestack-style/react'

export const BaseIcon = createStyle({
  _dark: {
    color: '$backgroundDark400',
  },
  color: '$backgroundLight800',
  variants: {
    size: {
      '2xs': {
        h: '$3',
        props: {
          // @ts-ignore
          size: 12,
        },
        w: '$3',
      },
      lg: {
        h: '$5',
        props: {
          //@ts-ignore
          size: 20,
        },
        w: '$5',
      },
      md: {
        h: '$4.5',
        props: {
          //@ts-ignore
          size: 18,
        },
        w: '$4.5',
      },
      sm: {
        h: '$4',
        props: {
          //@ts-ignore
          size: 16,
        },
        w: '$4',
      },
      xl: {
        h: '$6',
        props: {
          //@ts-ignore
          size: 24,
        },
        w: '$6',
      },
      xs: {
        h: '$3.5',
        props: {
          //@ts-ignore
          size: 14,
        },
        w: '$3.5',
      },
    },
  },
  // defaultProps: {
  //   size: 'md',
  // },
})

export const Icon = createStyle({
  _dark: {
    //@ts-ignore
    color: '$backgroundDark400',
  },
  color: '$backgroundLight800',
  props: {
    //@ts-ignore
    fill: 'none',
    size: 'md',
  },
})
