import { Api } from '../../Api/Api';
import '../../Styles/Countries.scss';
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class UpdateCountry extends Component {
    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;

        this.state = {
            isLoading: true,
            item: {}
        }
    }

    async componentDidMount() {
        const request = await Api.buildApiGetRequest(
            Api.readSingleUrl(this.id)
        );

        const item = await request.json();

        this.setState({
            isLoading: false,
            item
        });
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

        const request = await Api.buildApiPutRequest(
            Api.updateUrl(this.id),
            item).catch(e => {
                console.error('Error trying to update the item: ', e)
            })

            this.setState({
                isLoading: false
            })

            await request.json();

            this.props.history.push(`/country/${this.id}`);
   }

   render() {

    const { item } = this.state;

    return (
        <>

            <h2>Update Country</h2>

            <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId='countryName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Insert the name' defaultValue={item.countryName}/>
                        <Form.Text className='text-muted'>This name will be used when viewing the items in the list.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='countryImageUrl'>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type='text' placeholder='Insert the Image URL' defaultValue={item.countryImageUrl}/>
                        <Form.Text className='text-muted'>The image will be displayed in the list of items. Make sure this URL represents a valid image.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='countryDescription'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text' placeholder='We wanna know more about this country!' defaultValue={item.countryDescription}/>
                        <Form.Text className='text-muted'>This description will be used when viewing the item.</Form.Text>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Update</Button>
                </Form>
    
        </>
    );
}
}

export default UpdateCountry;
