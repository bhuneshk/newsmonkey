import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    state={
        articles: [],
        loading: false
    }

    constructor(){
    super();
    // this.State={
    //     articles: [],
    //     loading: false
    // }
  }

  async componentDidMount() {
    let url= 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7b059855142940549b04611f0728f5d6';
    let data = await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({
        articles : parsedData.articles

    })
    console.log(this.articles);
}
  render() {
    return (
        <div className='container my-3'>
              <h2>Movies</h2>
              <div className='row'>
                {this.state.articles.length && this.state.articles.map((element)=>{
                    return  <div className='col-md-4'>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                 </div>
                })}
              </div>
        </div>
    )
  }
}

export default News

