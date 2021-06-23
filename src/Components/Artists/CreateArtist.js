// Create = Insert Artists
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Api } from '../../Api/Api';


class CreateArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    submitHandler = async event => {
        event.preventDefault();

        const { name, imageUrl } = event.target;

        const item = {
            name: name.value,
            imageUrl: imageUrl.value
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
            this.props.history.push(`/view/${id}`)
    }


    render() {

        return (
            <>

                <h2>Insert Artist</h2>

                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Insert the name'/>
                        <Form.Text className='text-muted'>This name will be used when viewing the items in the list.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='imageUrl'>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type='text' placeholder='Insert the Image URL'/>
                        <Form.Text>The image will be displayed in the list of items. Make sure this URL represents a valid image.</Form.Text>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Submit</Button>
                </Form>
        
            </>
        );
    }
}

export default CreateArtist;