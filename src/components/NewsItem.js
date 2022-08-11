import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card">
        <div>
          <span className=" badge rounded-pill bg-danger" style={{display:'fiex',justifyContent:'flex-end',position:'absolute',right:'0px'}}>{this.props.source}</span>
        </div>

        <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/tech/img/2022/08/01/1600x900/iPhone_14_pro_max_1655131715652_1659376082296_1659376082296.PNG"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description}</p> 
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            <p className="card-text"><small className="text-muted">By {this.props.author?this.props.author:"Unknown"} on {new Date(this.props.date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem