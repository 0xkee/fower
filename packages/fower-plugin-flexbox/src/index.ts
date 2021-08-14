import { Atom } from '@fower/core'
import { FowerPlugin } from '@fower/core'
import { kebab } from '@fower/utils'

export const flexMaps: Record<string, string> = {
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
}

const flexReg = /^flex(Auto|Initial|None)$/i
const wrapReg = /^flex(Wrap(Reverse)?|Nowrap)$/i
const directionReg = /^flexDirection$/i

const isFlexProps = (key: string) => /^order$|^flex(Grow|Shrink|Basis|Wrap)?$/i.test(key)

export function isMatch(key: string) {
  return isFlexProps(key) || flexReg.test(key) || directionReg.test(key) || wrapReg.test(key)
}

export function toStyle(atom: Atom) {
  const { direction: key, value } = atom
  const style: any = {}

  if (wrapReg.test(key) && atom.isTruePropValue) {
    const posfix = key.replace(/^flex/, '')
    style.flexWrap = kebab(posfix).toLowerCase()
    return style
  }

  if (isFlexProps(key)) {
    style[key] = value
  }

  if (directionReg.test(key)) {
    style[key] = value
  }

  if (flexReg.test(key)) {
    const posfix = key.replace(/^flex/, '').toLowerCase()
    style.flex = flexMaps[posfix]
  }

  return style
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      // specail key: flex={true} -> display: 'flex'
      if (atom.propKey === 'flex' && atom.isTruePropValue) {
        atom.style = { display: 'flex' }
      } else {
        atom.style = toStyle(atom)
      }

      return atom
    },
  }
}
