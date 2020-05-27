import * as React from 'react'
import * as badge from './badge.js'
import * as phone from './phone.js'
import * as formatTableRow from './formatTableRow.js'

const defaultMessage: string = "The default export of dashboard-widgets does nothing. Import the module you want explicitly, or use import * as dw"

export default defaultMessage;

export class Test extends React.Component<any,any>{
	render(){
		return <h1>dashboard-widgets says Hello World</h1>
	}
}

export const author : string = "Benjamin Lehmann"

export const isDarkMode : boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const Badge = badge.default as typeof badge.default

export const Phone = phone.default as typeof phone.default

export const FormatTableRow = formatTableRow.default as typeof formatTableRow.default