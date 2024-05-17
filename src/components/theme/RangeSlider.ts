import { createStyle } from '@gluestack-style/react'

export const RangeSlider = createStyle({
  _web: {
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.4,
      // @ts-ignore
      pointerEvents: 'all !important',
    },
  },
  alignItems: 'center',
  compoundVariants: [
    {
      orientation: 'horizontal',
      size: 'sm',
      value: {
        _track: {
          flexDirection: 'row',
          height: '$1',
        },
      },
    },
    {
      isReversed: true,
      orientation: 'horizontal',
      size: 'sm',
      value: {
        _track: {
          flexDirection: 'row-reverse',
          height: '$1',
        },
      },
    },
    {
      orientation: 'horizontal',
      size: 'md',
      value: {
        _track: {
          flexDirection: 'row',
          height: 5,
        },
      },
    },
    {
      isReversed: true,
      orientation: 'horizontal',
      size: 'md',
      value: {
        _track: {
          flexDirection: 'row-reverse',
          height: 5,
        },
      },
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      value: {
        _track: {
          flexDirection: 'row',
          height: '$1.5',
        },
      },
    },
    {
      isReversed: true,
      orientation: 'horizontal',
      size: 'lg',
      value: {
        _track: {
          flexDirection: 'row-reverse',
          height: '$1.5',
        },
      },
    },
    {
      orientation: 'vertical',
      size: 'sm',
      value: {
        _track: {
          flexDirection: 'column-reverse',
          w: '$1',
        },
      },
    },
    {
      isReversed: true,
      orientation: 'vertical',
      size: 'sm',
      value: {
        _track: {
          flexDirection: 'column',
          width: '$1',
        },
      },
    },
    {
      orientation: 'vertical',
      size: 'md',
      value: {
        _track: {
          flexDirection: 'column-reverse',
          width: 5,
        },
      },
    },
    {
      isReversed: true,
      orientation: 'vertical',
      size: 'md',
      value: {
        _track: {
          flexDirection: 'column',
          width: 5,
        },
      },
    },
    {
      orientation: 'vertical',
      size: 'lg',
      value: {
        _track: {
          flexDirection: 'column-reverse',
          width: '$1.5',
        },
      },
    },
    {
      isReversed: true,
      orientation: 'vertical',
      size: 'lg',
      value: {
        _track: {
          flexDirection: 'column',
          width: '$1.5',
        },
      },
    },
  ],
  defaultProps: {
    orientation: 'horizontal',
    size: 'md',
  },
  justifyContent: 'center',
  variants: {
    isReversed: {
      false: {},
      true: {},
    },
    orientation: {
      horizontal: {
        _filledTrack: {
          height: '$full',
        },
        _track: {
          width: '$full',
        },
        w: '$full',
      },
      vertical: {
        _filledTrack: {
          width: '$full',
        },
        _track: {
          height: '$full',
        },
        h: '$full',
      },
    },
    size: {
      lg: {
        _thumb: {
          h: '$6',
          w: '$6',
        },
      },
      md: {
        _thumb: {
          h: '$5',
          w: '$5',
        },
      },
      sm: {
        _thumb: {
          h: '$4',
          w: '$4',
        },
      },
    },
  },
})
