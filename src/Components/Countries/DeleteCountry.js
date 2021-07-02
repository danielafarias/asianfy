import { Component } from 'react';
import '../../Styles/Countries.scss';
import { Api } from '../../Api/Api';
import '../../Styles/DeleteAll.scss';
import { Card, Button } from 'react-bootstrap';

class DeleteCountry extends Component {
    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;

        this.state = {
            isLoading: false
        }
    }

    clickHandler = async event => {
        event.preventDefault();

        this.setState({
            isLoading: true
        });

        await Api.buildApiDeleteRequest(Api.deleteUrl(this.id))
        .catch(e => {
            console.error('Error to delete the country: ', e);
        });

        this.setState({
            isLoading: false
        });

        this.props.history.push(`/countries`);
    }

    cancelClickHandler = () => {
        this.props.history.push(`/countries`)
    }

    render() {
        return (
            <Card id='delete-card' className="text-center">
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
        );
    }
}

export default DeleteCountry;