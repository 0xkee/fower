import { configure } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '.'

beforeAll(() => {
  configure({ unit: 'px' })
})

const { isMatch, handleAtom } = plugin()

const parser = {} as any
test('isMatch', () => {
  expect(isMatch!('zIndex')).toEqual(true)
  expect(isMatch!('zIndex-10')).toEqual(true)
  expect(isMatch!('zIndex--1')).toEqual(true)
})

test('zIndex={10}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'zIndex',
      propValue: 10,
    }),
    parser,
  )
  expect(atom.style.zIndex).toEqual(10)
})

test('zIndex={-1}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'zIndex',
      propValue: -1,
    }),
    parser,
  )
  expect(atom.style.zIndex).toEqual(-1)
})

test('zIndex="10', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'zIndex',
      propValue: '10',
    }),
    parser,
  )
  expect(atom.style.zIndex).toEqual('10')
})
