import React from 'react'
import './FeaturedInfos.css'


export default ({ serie }) => {
  let firstDate = new Date(serie.first_air_date)
  let genres = [];
  for (let i in serie.genres) {
    genres.push(serie.genres[i].name)
  }
  
  let created = []
  for (let i in serie.created_by) {
    created.push(serie.created_by[i].name)
  }
  return (
    <div>

      <div className="info--title">
        <h1>{serie.name}</h1>
      </div>

      <section className="info--group">

        <div className="info--left">
          <div className="info--points">
            <h3 >{serie.vote_average} pontos</h3>
          </div>

          <div className="info--seasons">
            {serie.number_of_seasons} temporada
             {serie.number_of_seasons !== 1 ? 's' : ''}
          </div>

          <div className="info--year">
            {firstDate.getFullYear()}
          </div>
          <div className="info--description">
            <p>{serie.overview}</p>
          </div>

        </div>
        <div className="info--right">
          <div className="info--genres">
            <strong>Gêneros: </strong>{genres.join(', ')}
          </div>

          <div className="info--creators">
            <strong>Criado por: </strong>{created.join(', ')}
          </div>
        </div>

      </section>


    </div >
  )
}