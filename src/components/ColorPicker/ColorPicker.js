import { Button, ButtonGroup, Container } from "@mui/material";
import axios from "axios";
import React from "react";

export class ColorPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            colors: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/colors').then(res => {
            this.setState({ colors: res.data });
        })
    }

    render() {
        return (
            <Container maxWidth="sm">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    {this.state.colors.map((color, i) => (
                        <Button variant="contained">{color}</Button>
                    ))}
                </ButtonGroup>
            </Container>
        );
    }
}