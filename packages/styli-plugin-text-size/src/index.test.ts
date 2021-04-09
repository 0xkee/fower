import { Atom } from '@styli/atom'
import { configure } from '@styli/core'
import { Parser } from '@styli/parser'
import { presetWeb } from '@styli/preset-web'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

beforeAll(() => {
  configure(presetWeb)
})

test('isMatch', () => {
  expect(isMatch!('text')).toEqual(true)
  expect(isMatch!('text-10')).toEqual(true)
  expect(isMatch!('text-10rem')).toEqual(true)
  expect(isMatch!('text-10rem')).toEqual(true)
  expect(isMatch!('textSM')).toEqual(true)
})

test('text={10}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'text',
      propValue: 10,
    }),
    parser,
  )
  expect(atom.style.fontSize).toEqual(10)
})

test('textSM', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'textSM',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fontSize).toEqual(14)
})
