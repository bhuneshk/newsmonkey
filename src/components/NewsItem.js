import React from 'react'

const NewsItem =(props)=>{

    return (
      <div className="card my-3">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1, left:'90%'}}>
          {props.Source.name}

        </span>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text"><small className="text-body-secondary">By {props.author ? props.author : 'Unknown'} on {new Date(props.date).toUTCString()}</small></p>
          <a href={props.newsUrl} target='_blank' className="btn btn-sm btn-dark mb-2" >Read More</a>
        </div>
      </div>
    )
}

export default NewsItem

