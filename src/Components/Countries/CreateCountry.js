import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Api } from '../../Api/Api';
import '../../Styles/Countries.scss';


class CreateCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    submitHandler = async event => {
        event.preventDefault();

        const { countryName, countryImageUrl, countryDescription } = event.target;

        const item = {
            countryName: countryName.value,
            countryImageUrl: countryImageUrl.value,
            countryDescription: countryDescription.value
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

            this.props.history.push(`/country/${id}`);
    }


    render() {

        return (
            <>

                <h2>Insert Country</h2>

                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId='countryName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Insert the name'/>
                        <Form.Text className='text-muted'>This name will be used when viewing the items in the list.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='countryImageUrl'>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type='text' placeholder='Insert the Image URL'/>
                        <Form.Text className='text-muted'>The image will be displayed in the list of items. Make sure this URL represents a valid image.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='countryDescription'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text' placeholder='We wanna know more about this country!'/>
                        <Form.Text className='text-muted'>This description will be used when viewing the item.</Form.Text>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Submit</Button>
                </Form>
        
            </>
        );
    }
}

export default CreateCountry;