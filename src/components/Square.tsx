import React from "react";
import { type } from "os";

export type Prop = { onClick: () => void | null, value: string }

class Square extends React.Component<Prop, any> {

    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

export default Square