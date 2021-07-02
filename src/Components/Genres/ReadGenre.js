import { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Api } from '../../Api/Api';
import '../../Styles/Genres.scss';

class ReadGenre extends Component {

  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;

    this.state = {
      isLoading: true,
      item: {},
    };
  }

  async componentDidMount() {

    const request = await Api.buildApiGetRequest(
      Api.readSingleUrl(this.id),
    );
    
    const item = await request.json();

    this.setState({
      isLoading: false,
      item,
    });
  }

  render() {

    const {item} = this.state;

    return (
      <>
        <Container className="actions">
          <Link className="btn btn-info" to={'/update-genre/' + item._id}>Editar</Link>
          <Link className="btn btn-danger" to={'/delete-genre/' + item._id}>Excluir</Link>
        </Container>

        <Container className="info">
          <Card id='card-genre-info'>
            <Card.Body>
              <Card.Title id='genre-info-name'>{item.genreName}</Card.Title>
              <Card.Text id='genre-info-description'>
                {item.genreDescription}
              </Card.Text>
            </Card.Body>
          </Card>

          <Link id='genre-info-btn' to={`/genres`} className="back-btn">Back</Link>
        </Container>
      </>
    );
  }
}

export default ReadGenre;