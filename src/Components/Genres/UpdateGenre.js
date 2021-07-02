import { Api } from '../../Api/Api';
import '../../Styles/Genres.scss';
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class UpdateGenre extends Component {
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

       const { genreName, genreDescription } = event.target;

        const item = {
            genreName: genreName.value,
            genreDescription: genreDescription.value
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

            this.props.history.push(`/genre/${this.id}`);
   }

   render() {

    const { item } = this.state;

    return (
        <>

            <h2>Update Genre</h2>

            <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId='genreName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Insert the name' defaultValue={item.genreName}/>
                        <Form.Text className='text-muted'>This name will be used when viewing the items in the list.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='genreDescription'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text' placeholder='We wanna know more about this genre!' defaultValue={item.genreDescription}/>
                        <Form.Text className='text-muted'>This description will be used when viewing the item.</Form.Text>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Update</Button>
                </Form>
    
        </>
    );
}
}

export default UpdateGenre;
