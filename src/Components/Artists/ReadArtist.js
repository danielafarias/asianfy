import { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Api } from '../../Api/Api';
import '../../Styles/Artists.scss';

class ReadArtist extends Component {

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
          <Link className="btn btn-info" to={'/update-artist/' + item._id}>Editar</Link>
          <Link className="btn btn-danger" to={'/delete-artist/' + item._id}>Excluir</Link>
        </Container>

        <Container className="info">
          <Row>
            <Col>
              <h1 className="info-title">{item.name}</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <img className="info-img" src={item.imageUrl} alt={item.name}/>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Member(s):</h3>
              <p className="info-description">{item.members}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Genre(s):</h3>
              <p className="info-description">{item.genre}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Debut:</h3>
              <p className="info-description">{item.debut}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Country:</h3>
              <p className="info-description">{item.country}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Agency:</h3>
              <p className="info-description">{item.agency}</p>
            </Col>
          </Row>

          <Row>
            <Col id='last-column'>
              <h3>Description:</h3>
              <p className="info-description">{item.description}</p>
            </Col>
          </Row>

          <Link to={`/artists`} className="back-btn">Back</Link>
        </Container>
      </>
    );
  }
}

export default ReadArtist;