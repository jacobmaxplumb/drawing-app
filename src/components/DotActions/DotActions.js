import { Button, Card, CardActions, CardContent } from "@mui/material";
import React from "react";

export class DotActions extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Card>
                <CardContent>
                    content
                </CardContent>
                <CardActions>
                    <Button variant="contained">Save</Button>
                    <Button>Clear</Button>
                </CardActions>
            </Card>
        );
    }
}