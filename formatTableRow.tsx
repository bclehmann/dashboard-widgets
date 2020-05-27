import * as formatTableRows from './formatTableRows.js'

class FormatTableRow extends formatTableRows.default {
	constructor(props) {
		console.warn("dashboard-widgets.FormatTableRow is deprecated. Use FormatTableRows instead.")
		super(props);
	}
}

export default FormatTableRow
