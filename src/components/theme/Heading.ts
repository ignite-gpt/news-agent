import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements'
import { createStyle } from '@gluestack-style/react'

export const Heading = createStyle({
  _dark: {
    color: '$textDark50',
  },
  color: '$textLight900',
  defaultProps: {
    size: 'lg',
  },
  fontFamily: '$heading',

  fontWeight: '$bold',
  letterSpacing: '$sm',
  // Overrides expo-html default styling
  marginVertical: 0,

  variants: {
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
    highlight: {
      true: {
        bg: '$yellow500',
      },
    },
    isTruncated: {
      true: {
        props: {
          ellipsizeMode: 'tail',
          // @ts-ignore
          numberOfLines: 1,
        },
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    size: {
      '2xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
        //@ts-ignore
        props: { as: H2 },
      },
      '3xl': {
        fontSize: '$4xl',
        lineHeight: '$5xl',
        //@ts-ignore
        props: { as: H1 },
      },

      '4xl': {
        fontSize: '$5xl',
        lineHeight: '$6xl',
        //@ts-ignore
        props: { as: H1 },
      },

      '5xl': {
        fontSize: '$6xl',
        lineHeight: '$7xl',
        //@ts-ignore
        props: { as: H1 },
      },

      lg: {
        fontSize: '$xl',
        lineHeight: '$2xl',
        //@ts-ignore
        props: { as: H4 },
      },

      md: {
        fontSize: '$lg',
        lineHeight: '$lg',
        //@ts-ignore
        props: { as: H5 },
      },

      sm: {
        fontSize: '$md',
        lineHeight: '$lg',
        //@ts-ignore
        props: { as: H6 },
      },

      xl: {
        fontSize: '$2xl',
        lineHeight: '$3xl',
        //@ts-ignore
        props: { as: H3 },
      },

      xs: {
        fontSize: '$sm',
        lineHeight: '$xs',
        //@ts-ignore
        props: { as: H6 },
      },
    },
    strikeThrough: {
      true: {
        textDecorationLine: 'line-through',
      },
    },
    sub: {
      true: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
    },
    underline: {
      true: {
        textDecorationLine: 'underline',
      },
    },
  },
})
