import { Api } from '../../Api/Api';
import '../../Styles/Artists.scss';
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class UpdateArtist extends Component {
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

       const { name, imageUrl, description, members, genre, country, agency, debut, spotify } = event.target;

       const item = {
            name: name.value,
            imageUrl: imageUrl.value,
            description: description.value,
            members: members.value,
            genre: genre.value,
            country: country.value,
            agency: agency.value,
            debut: debut.value,
            spotify: spotify.value
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

            this.props.history.push(`/artist/${this.id}`);
   }

   render() {
    const { item } = this.state;
    return (
        <>

            <h2>Update Artist</h2>

            <Form onSubmit={this.submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Insert the name' defaultValue={item.name}/>
                    <Form.Text className='text-muted'>This name will be used when viewing the items in the list.</Form.Text>
                </Form.Group>

                <Form.Group controlId='imageUrl'>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type='text' placeholder='Insert the Image URL' defaultValue={item.imageUrl}/>
                    <Form.Text className='text-muted'>The image will be displayed in the list of items. Make sure this URL represents a valid image.</Form.Text>
                </Form.Group>

                <Form.Group controlId='members'>
                    <Form.Label>Member(s)</Form.Label>
                    <Form.Control type='text' placeholder='What are their names?' defaultValue={item.members}/>
                    <Form.Text className='text-muted'>Who are the members of this group? If Solo artist, just write your name.</Form.Text>
                </Form.Group>

                <Form.Group controlId='genre'>
                    <Form.Label>Genre(s)</Form.Label>
                    <Form.Control as='select' type='text' defaultValue={item.genre}>
                    <option>K-Pop</option>
                            <option>J-Pop</option>
                            <option>C-Pop</option>
                            <option>K-Hip-hop</option>
                            <option>K-Rock</option>
                            <option>J-Hip-hop</option>
                            <option>J-Rock</option>
                            <option>C-Hip-hop</option>
                            <option>C-Rock</option>
                            <option>R&B</option>
                            <option>Ballad</option>
                            <option>Pop</option>
                            <option>Hip-Hop</option>
                            <option>Rock</option>
                            <option>Indie</option>
                            <option>Folk</option>
                            <option>Traditional</option>
                            <option>Electronic</option>
                            <option>Other</option>
                        </Form.Control>
                    <Form.Text className='text-muted'>This music genre will be used when viewing the items in the list.</Form.Text>
                </Form.Group>

                <Form.Group controlId='debut'>
                    <Form.Label>Debut</Form.Label>
                    <Form.Control type='text' placeholder='When did they debut?' defaultValue={item.debut}/>
                    <Form.Text className='text-muted'>This date will be used when viewing the item.</Form.Text>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='text' as='select' defaultValue={item.country}>
                            <option>South Korea</option>
                            <option>Japan</option>
                            <option>China</option>
                            <option>Taiwan</option>
                            <option>Thailand</option>
                            <option>India</option>
                            <option>Indonesia</option>
                            <option>Philippines</option>
                            <option>Vietnam</option>
                            <option>Other</option>
                        </Form.Control>
                    <Form.Text className='text-muted'>This country will be used when viewing the items in the list.</Form.Text>
                </Form.Group>

                <Form.Group controlId='agency'>
                    <Form.Label>Agency</Form.Label>
                    <Form.Control type='text' placeholder='What agency do they belong to?' defaultValue={item.agency}/>
                    <Form.Text className='text-muted'>The agency will be used when viewing the item.</Form.Text>
                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' placeholder='We wanna know more about this artist!' defaultValue={item.description}/>
                    <Form.Text className='text-muted'>This description will be used when viewing the item.</Form.Text>
                </Form.Group>

                <Form.Group controlId='spotify'>
                        <Form.Label>Spotify</Form.Label>
                        <Form.Control type='text' placeholder="Put the artist's Spotify profile here" defaultValue={item.spotify}/>
                        <Form.Text className='text-muted'>The Spotify profile will be available on the view.</Form.Text>
                    </Form.Group>

                <Button variant='primary' type='submit'>Update</Button>
            </Form>
    
        </>
    );
}
}

export default UpdateArtist;
