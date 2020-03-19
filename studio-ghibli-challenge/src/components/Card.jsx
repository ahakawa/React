import React, {Component} from 'react';


class Card extends Component {
    state = {
      filmes: []
    }
  
  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then((data) => {
      this.setState({ filmes: data })
      console.log(this.state.filmes)
    })
    .catch(console.log)
  
  }

  render() {

    return (

      
        <div className="Card-container">
        {this.state.filmes.map((filmes) => (
          <div key={ filmes.id } className="filmes">
              <h1 className="title" >{filmes.title}</h1>
              <p className="description">{filmes.description}</p>
        </div>
        ))}
            
        </div>
    );
}
}

export default Card;