import { createStyle, css, styli } from '@styli/core'
import { Parser } from '@styli/parser'
import { Args } from './types'

// handle inline style
export function getInLineParsedProps(props: any, value: any, args: Args) {
  const parser = new Parser(props, value, styli)
  const parsedProps = parser.getParsedProps()

  if (Array.isArray(props.style)) {
    parsedProps.style = [createStyle(...args), parser.toStyles(), props.style]
  } else {
    parsedProps.style = {
      ...createStyle(...args),
      ...parser.toStyles(),
      ...props.style,
    }
  }

  return parsedProps
}

// handle css style
export function getCssParsedProps(props: any, value: any, args: Args) {
  const parser = new Parser(props, value, styli)
  const parsedProps = parser.getParsedProps()

  const { className = '' } = props || {}

  const finalClassName = [css(...args), ...parser.getClassNames(), className].join(' ').trim()

  if (finalClassName) {
    parsedProps.className = finalClassName
    parser.insertRule()
  }

  return parsedProps
}
