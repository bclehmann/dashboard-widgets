import * as React from "react";
export interface PropType {
    formatRule: (cell: any) => string;
    formatRuleRow: (row: any[]) => string;
    data: any[][];
}
declare class FormatTableRows extends React.Component<PropType, any> {
    props: PropType;
    constructor(props: any);
    render(): any[];
}
export default FormatTableRows;
