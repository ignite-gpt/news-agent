import { createStyle } from '@gluestack-style/react'

export const Text = createStyle({
  _dark: {
    color: '$textDark200',
  },
  color: '$textLight700',
  defaultProps: {
    size: 'md',
  },
  fontFamily: '$body',
  fontStyle: 'normal',
  fontWeight: '$normal',

  letterSpacing: '$md',

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
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      '2xs': {
        fontSize: '$2xs',
        lineHeight: '$2xs',
      },

      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },

      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },

      '5xl': {
        fontSize: '$5xl',
        lineHeight: '$6xl',
      },

      '6xl': {
        fontSize: '$6xl',
        lineHeight: '$7xl',
      },

      lg: {
        fontSize: '$lg',
        lineHeight: '$xl',
      },

      md: {
        fontSize: '$md',

        /**
         * @todo Fix the lineHeight issue
         * https://github.com/gluestack/gluestack-ui/issues/1836
         */
        // lineHeight: '$md',
      },

      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },

      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },

      xs: {
        fontSize: '$xs',
        lineHeight: '$sm',
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
