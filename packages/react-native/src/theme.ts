import { Theme } from '@styli/types'
import { colors } from './colors'

export const theme: Partial<Theme> = {
  colors: colors,
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],
  sizes: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  headings: [48, 32, 24, , 20, 16, 14] as string[] | number[],
  iconSizes: [16, 24, 32],
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  borderColors: ['#dddddd', '#f0f0f0'],
  borderWidths: [0, 1, 2, 4],
  borderRadius: {
    none: 0,
    sm: 2,
    default: 4,
    md: 6,
    lg: 8,
    full: 9999,
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 'bold',
    extrabold: 800,
    black: 900,
  },
}
