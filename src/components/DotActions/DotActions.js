import { Button, Card, CardActions, CardContent } from "@mui/material";
import axios from "axios";
import React from "react";
import './DotActions.css';

export class DotActions extends React.Component {
    constructor() {
        super();
        this.state = {
            runs: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/runs').then(res => {
            this.setState({ runs: res.data });
        })
    }

    handleSave = () => {
        this.props.saveDots().then(() => {
            axios.get('http://localhost:8080/runs').then(res => {
                this.setState({ runs: res.data });
            })
        })
    }

    render() {
        console.log(this.state.runs);
        return (
            <Card className="action-card">
                <CardContent>
                    {this.state.runs.map((run, i) => (
                        <Button variant="contained" key={i}>{run.id}</Button>
                    ))}
                </CardContent>
                <CardActions>
                    <Button onClick={() => this.props.saveDots()} variant="contained">Save</Button>
                    <Button onClick={() => this.props.clearDots()}>Clear</Button>
                </CardActions>
            </Card>
        );
    }
}