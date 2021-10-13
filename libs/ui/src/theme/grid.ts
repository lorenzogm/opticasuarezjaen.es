import { GridSpacing } from '@material-ui/core'

export type ThemeGrid = {
  gutter: {
    xs: GridSpacing
    sm: GridSpacing
    md: GridSpacing
    lg: GridSpacing
    xl: GridSpacing
  }
  margin: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
}