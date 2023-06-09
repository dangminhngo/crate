import { styled } from '~/stitches.config'

const Chip = styled('div', {
  backgroundColor: '$slate700',
  color: '$slate200',
  fontWeight: '$medium',
  boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  variants: {
    variant: {
      square: {
        br: '$sm',
      },
      rounded: {
        br: '9999px',
      },
    },
    size: {
      default: {
        px: '$2',
        py: '$1',
        fontSize: '$xs',
      },
      lg: {
        px: '$3',
        py: '$2',
        fontSize: '$sm',
      },
    },
  },
  defaultVariants: {
    variant: 'rounded',
    size: 'default',
  },
})

const ChipLabel = styled('span', {})

const ChipDeleteButton = styled('button', {
  h: '$4',
  w: '$4',
  br: '$full',
  display: 'grid',
  placeItems: 'center',
  '&:hover': {
    bgAlpha: ['$slate300', 0.5],
  },
})

export { Chip, ChipLabel, ChipDeleteButton }
