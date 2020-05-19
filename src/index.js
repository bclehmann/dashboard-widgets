import React from 'react'
import * as badge from './badge.js'
import * as phone from './phone.js'

export default "The default export of dashboard-widgets does nothing. Import the module you want explicitly, or use import * as dw"

export class Test extends React.Component{
	render(){
		return <h1>dashboard-widgets says Hello World</h1>
	}
}

export const author = "Benjamin Lehmann"

export const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const Badge = badge.default

export const Phone = phone.default