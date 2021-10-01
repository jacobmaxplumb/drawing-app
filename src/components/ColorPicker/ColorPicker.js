import axios from "axios";
import React from "react";

export class ColorPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Color Picker',
            colors: []
        }
        window.addEventListener('click', (event) => {
            console.log('clicked stuff');
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/colors').then(res => {
            this.setState({colors: res.data});
        })
    }

    componentDidUpdate() {
    }

    

    render() {
        return(<h1>{this.state.title}</h1>);
    }
}