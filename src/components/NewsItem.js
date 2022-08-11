import React from 'react'

const NewsItem=(props)=>{
    return (
      <div>
        <div className="card">
        <div>
          <span className=" badge rounded-pill bg-danger" style={{display:'fiex',justifyContent:'flex-end',position:'absolute',right:'0px'}}>{props.source}</span>
        </div>

        <img src={props.imageUrl?props.imageUrl:"https://images.hindustantimes.com/tech/img/2022/08/01/1600x900/iPhone_14_pro_max_1655131715652_1659376082296_1659376082296.PNG"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title} ...</h5>
            <p className="card-text">{props.description}</p> 
            <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            <p className="card-text"><small className="text-muted">By {props.author?props.author:"Unknown"} on {new Date(props.date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    )
}

export default NewsItem