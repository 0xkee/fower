import { Atom } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-opacity', () => {
  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('opacity')).toEqual(true)
    expect(isMatch!('opacity-20')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'opacity', propValue: true } as Atom
    const newAtom1 = { propKey: 'opacity', propValue: true, style: { opacity: 0.5 } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'opacity', propValue: 80 } as Atom
    const newAtom2 = { propKey: 'opacity', propValue: 80, style: { opacity: 0.8 } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'opacity-20', propValue: true } as Atom
    const newAtom3 = { propKey: 'opacity-20', propValue: true, style: { opacity: 0.2 } }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)
  })
})