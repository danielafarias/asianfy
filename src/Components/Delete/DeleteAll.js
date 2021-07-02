import { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Api } from "../../Api/Api";
import '../../Styles/DeleteAll.scss';
import React from "react";

class DeleteAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    clickHandler = async event => {
        event.preventDefault();

        this.setState({
            isLoading: true
        })

        await Api.buildApiDeleteRequest(Api.deleteAllUrl())
            .catch(e => {console.error('Error to trying delete all data: ', e)
        })

        this.setState({
            isLoading: false
        })

        this.props.history.push('/');
    }

    cancelClickHandler = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <Form onFocus={this.passwordValidation}>
            <Card className="text-center">
                <Card.Header>Delete</Card.Header>
                <Card.Body>
                    <Card.Title>This action cannot be reversed.</Card.Title>
                    <Card.Text>
                        Are you sure you want to delete?
                    </Card.Text>
                    <Button id='delete' onClick={this.clickHandler} variant="danger">Delete</Button>
                    <Button id='delete-cancel' onClick={this.cancelClickHandler} variant="primary">Cancel</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Be sure</Card.Footer>
            </Card>
            </Form>
        );
    }
}

export default DeleteAll;