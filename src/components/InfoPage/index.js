import React, { Component } from 'react';
import Header from '../Header';
import Api from '../GetInfos'





class InfoPage extends Component {
  state = {
    filmes: [],
  }

  async componentDidMount() {
    let url = window.location.pathname
    let teste = url.split('/')
    const id = teste[2]
    const API_KEY = '4fac81442e49a0849060733bebb2ac8a';

    const video = await Api.get(`/tv/${id}/videos?api_key=${API_KEY}`);
    console.log(video.data.results)
    this.setState({ trailer: video.data.results[0].key });

    const response = await Api.get(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`);
    console.log(response.data)
    this.setState({ filmes: response.data });

  }

  render() {

    const { filmes } = this.state;
    const { trailer } = this.state;
    console.log(trailer)
    return (


      <div >
        <Header />
        <section className="featured" style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(https://image.tmdb.org/t/p/original${filmes.backdrop_path})`
        }}>
        </section>
        {/* <iframe width="80%" height="700" src={`https://www.youtube.com/embed/${trailer}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div >

    )

  }

}

// const req = await fetch(`${API_BASE} /tv/${id}?language=pt-BR&api_key=${API_KEY}`);


export default InfoPage;



