import { Sheet } from './Sheet'
import { styleManager } from './styleManager'
import { styli } from './styli'
import { CSSObject } from '@styli/types'
import { modifierToProps } from './utils'

interface Props {
  [key: string]: any
}

export function css(...args: (string | CSSObject)[]) {
  const props = args.reduce((result: Props, cur: any) => {
    if (typeof cur === 'string') {
      return { ...result, ...modifierToProps(cur) }
    } else {
      return { ...result, css: cur }
    }
  }, {} as Props)

  // TODO: handle theme
  const sheet = new Sheet(props, styli.getTheme())
  styleManager.insertStyles(sheet.toCss())

  return sheet.getClassNames()
}
