import { createStyle } from '@gluestack-style/react'

export const Switch = createStyle({
  ':checked': {
    props: {
      //@ts-ignore
      thumbColor: '$backgroundLight0',
    },
  },
  ':disabled': {
    ':hover': {
      props: {
        //@ts-ignore
        trackColor: { false: '$backgroundLight300', true: '$primary600' },
      },
    },
    _web: {
      ':disabled': {
        cursor: 'not-allowed',
      },
      cursor: 'pointer',
    },
    // for ios specifically in unchecked state
    ios_backgroundColor: '$backgroundLight300',
    opacity: 0.4,
    //@ts-ignore
    trackColor: { false: '$backgroundLight300', true: '$primary600' },
  },
  ':hover': {
    ':invalid': {
      props: {
        // todo: add support for this in style.gluestack.io
        // trackColor: { false: '$backgroundLight400', true: '$primary700' },

        // hacky fix for the above
        //@ts-ignore

        trackColor: { false: '$backgroundLight300', true: '$primary700' },
      },
    },
    props: {
      // todo: add support for this in style.gluestack.io
      // trackColor: { false: '$backgroundLight400', true: '$primary700' },

      // hacky fix for the above
      //@ts-ignore

      ios_backgroundColor: '$backgroundLight400',
      trackColor: { false: '$backgroundLight400', true: '$primary700' },
    },
  },
  ':invalid': {
    borderColor: '$error700',
    borderRadius: 12,
    borderWidth: 2,
  },

  _dark: {
    ':disabled': {
      ':hover': {
        props: {
          //@ts-ignore
          trackColor: { false: '$backgroundDark700', true: '$primary500' },
        },
      },
      _web: {
        ':disabled': {
          cursor: 'not-allowed',
        },
        cursor: 'pointer',
      },
      // for ios specifically in unchecked state
      ios_backgroundColor: '$backgroundLight300',
      opacity: 0.4,
      //@ts-ignore
      trackColor: { false: '$backgroundLight300', true: '$primary500' },
    },
    ':hover': {
      ':invalid': {
        props: {
          // todo: add support for this in style.gluestack.io
          // trackColor: { false: '$backgroundLight400', true: '$primary700' },

          // hacky fix for the above
          //@ts-ignore

          trackColor: { false: '$backgroundDark700', true: '$primary600' },
        },
      },
      props: {
        ios_backgroundColor: '$backgroundLight400',
        //@ts-ignore
        trackColor: { false: '$backgroundDark600', true: '$primary600' },
      },
    },
    ':invalid': {
      borderColor: '$error400',
      borderRadius: 12,
      borderWidth: 2,
    },
    props: {
      //@ts-ignore
      activeThumbColor: '$backgroundDark0',
      thumbColor: '$backgroundDark0',
      //@ts-ignore
      trackColor: { false: '$backgroundDark700', true: '$primary500' },
    },
  },
  _web: {
    ':focus': {
      _dark: {
        // @ts-ignore
        outlineColor: '$primary600',
        outlineStyle: 'solid',
        outlineWidth: 0,
      },
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      outlineWidth: 0,
    },
  },
  borderRadius: '$full',
  defaultProps: {
    size: 'md',
  },
  props: {
    // todo: add support for this in style.gluestack.io
    // trackColor: { false: '$backgroundLight300', true: '$primary600' },

    // hacky fix for the above
    //@ts-ignore
    activeThumbColor: '$backgroundLight0',
    // for ios specifically in unchecked state
    ios_backgroundColor: '$backgroundLight300',
    thumbColor: '$backgroundLight0',

    //@ts-ignore
    trackColor: { false: '$backgroundLight300', true: '$primary600' },
  },
  variants: {
    //@ts-ignore

    size: {
      lg: {
        transform: [
          {
            scale: 1.25,
          },
        ],
      },
      md: {},
      sm: {
        transform: [
          {
            scale: 0.75,
          },
        ],
      },
    },
  },
})
