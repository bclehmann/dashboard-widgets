import * as React from "react"

export interface PropType {
	formatRule: (cell: any) => string;
	formatRuleRow: (row: any[]) => string;
	data: any[][];
}

class FormatTableRow extends React.Component<PropType, any> {
	props: PropType;
	constructor(props) {
		super(props);
	}

	render() {
		return this.props.data.map((row: any[], i: number) => (
			<tr key={i} className={this.props.formatRuleRow(row)}>{
				row.map((cell: any, j: number) => (
					<td className={this.props.formatRule(cell)} key={j}>{cell}</td>
				))
			}</tr>
		))
	}
}

export default FormatTableRow
