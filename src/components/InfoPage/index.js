import React, { Component } from 'react';
import Header from '../Header';
import FeaturedInfos from '../FeaturedInfos';
import { API_KEY, Api } from '../GetAPI'
import './InfoPage.css'

class InfoPage extends Component {
  state = {
    serie: [],
    trailer: [],
  }

  async componentDidMount() {
    let url = window.location.pathname
    let separator = url.split('/')
    const id = separator[2]

    await Api.get(`/tv/${id}/videos?api_key=${API_KEY}`).then((response) => {
      const video = response
      console.log(video.data.results)
      this.setState({ trailer: video.data.results[0].key });
    }).catch(error => { console.log(error) })

    await Api.get(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`).then((response) => {
      const infoAboutVideos = response
      this.setState({ serie: infoAboutVideos.data });
    }).catch(error => { console.log(error) })
  }

  render() {

    const { serie } = this.state;
    const { trailer } = this.state;

    return (


      <div >
        <Header black={true} />
        <div className="info--video">
          <iframe src={`https://www.youtube.com/embed/${trailer}?showinfo=0&rel=0&modestbranding=1&autoplay=1`} frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <FeaturedInfos serie={serie} />

      </div >

    )

  }

}

export default InfoPage;



