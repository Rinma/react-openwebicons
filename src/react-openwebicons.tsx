import * as React from "react";

export interface OpenWebIconProps {
    icon: string;
    size?: string;
    color?: string;
}

export default class OpenWebIcon extends React.Component<OpenWebIconProps, {}> {
    constructor(props: OpenWebIconProps) {
        super(props);
    }

    render() {
        let style = {
            fontFamily: "OpenWeb Icons",
            fontSize: this.props.size ? this.props.size : "16px",
            color: this.props.color ? this.props.color : "#000000",
        };
        return <span>
            <i style={style} className={this.props.icon} />
        </span>;
    }
}