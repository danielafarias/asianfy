import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Api } from '../../Api/Api';
import '../../Styles/Genres.scss';


class CreateGenre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    submitHandler = async event => {
        event.preventDefault();

        const { genreName, genreDescription } = event.target;

        const item = {
            genreName: genreName.value,
            genreDescription: genreDescription.value
        }

        this.setState({
            isLoading: true
        })

        const request = await Api.buildApiPostRequest(
            Api.createUrl(),
            item).catch(e => {
                console.error('Error trying to add an item to the database: ', e)
            })

            this.setState({
                isLoading: false
            })

            const result = await request.json();
            const id = result._id;

            this.props.history.push(`/genre/${id}`);
    }
    


    render() {

        return (
            <>

                <h2>Insert Genre</h2>

                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId='genreName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Insert the name'/>
                        <Form.Text className='text-muted'>This name will be used when viewing the items in the list.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='genreDescription'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text' placeholder='We wanna know more about this genre!'/>
                        <Form.Text className='text-muted'>This description will be used when viewing the item.</Form.Text>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Submit</Button>
                </Form>
        
            </>
        );
    }
}

export default CreateGenre;