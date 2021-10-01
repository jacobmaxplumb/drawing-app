import { Paper } from "@mui/material";
import './Canvas.css';
import React from "react";

export class Canvas extends React.Component {
    constructor() {
        super();
        this.state = {
            dots: []
        }
    }

    addDot = (e) => {
        const styles = {
            width: '10px', 
            height: '10px', 
            backgroundColor: this.props.color, 
            position: 'absolute', 
            top: e.clientY, 
            left: e.clientX
        }
        const dot = <div style={styles}></div>
        this.setState({dots: [...this.state.dots, dot]});
    }

    render() {
        return (
            <Paper onClick={this.addDot} className="canvas" elevation={3}>
                {this.state.dots.map((dot, i) => (
                    <div key={i}>
                        {dot}
                    </div>
                ))}
            </Paper>
        );
    }
}