import React from "react";

export class ColorPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            colors: []
        }
    }

    render() {
        return(<h1>Color Picker</h1>);
    }
}