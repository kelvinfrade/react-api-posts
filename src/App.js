import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

export default class App extends Component {
  state = {
    autores: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        const autores = res.data;
        this.setState({ autores })
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container className="p-3">
            <h1>Lista de Posts</h1>
            <br />
            <ListGroup as="ul">
              {this.state.autores.map(autor =>
                <div style={{ textAlign: "left" }} key={autor.id}>
                  <ListGroup.Item as="li" active>
                    {autor.title}
                  </ListGroup.Item>

                  <ListGroup.Item as="li">
                    {autor.body}
                  </ListGroup.Item>
                  <br />
                </div>
              )}
            </ListGroup>
          </Container>
        </header>
      </div>
    )
  }
}

