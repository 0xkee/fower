import background from 'fower-plugin-background'
import border from 'fower-plugin-border'
import flexItem from 'fower-plugin-box-alignment'
import color from 'fower-plugin-color'
import display from 'fower-plugin-display'
import flexBox from 'fower-plugin-flexbox'
import grid from 'fower-plugin-grid'
import layoutEngine from 'fower-plugin-layout-engine'
import lineHeight from 'fower-plugin-line-height'
import margin from 'fower-plugin-margin'
import opacity from 'fower-plugin-opacity'
import overflow from 'fower-plugin-overflow'
import padding from 'fower-plugin-padding'
import position from 'fower-plugin-position'
import rounded from 'fower-plugin-rounded'
import shadow from 'fower-plugin-shadow'
import size from 'fower-plugin-size'
import textAlign from 'fower-plugin-text-align'
import textSize from 'fower-plugin-text-size'
import textTransform from 'fower-plugin-text-transform'
import fontWeight from 'fower-plugin-font-weight'
import zIndex from 'fower-plugin-z-index'
import outline from 'fower-plugin-outline'
import cursor from 'fower-plugin-cursor'
import ellipsis from 'fower-plugin-ellipsis'
import debug from 'fower-plugin-debug'
import space from 'fower-plugin-space'
import visibility from 'fower-plugin-visibility'
import boxSizing from 'fower-plugin-box-sizing'

export const plugins = [
  debug(),
  background(),
  border(),
  color(),
  display(),
  flexBox(),
  grid(),
  flexItem(),
  layoutEngine(),
  lineHeight(),
  margin(),
  opacity(),
  overflow(),
  padding(),
  position(),
  rounded(),
  shadow(),
  size(),
  textAlign(),
  textSize(),
  textTransform(),
  fontWeight(),
  zIndex(),
  cursor(),
  outline(),
  ellipsis(),
  space(),
  visibility(),
  boxSizing(),
]