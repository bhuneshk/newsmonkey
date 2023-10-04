import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    constructor(){
    super();
    this.state={
        articles: [],
        loading: false,
        page: 1,
        totalLenght: 0
    }
  }

  async componentDidMount() {
    let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=7b059855142940549b04611f0728f5d6&pageSize=10`;
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
        articles : parsedData.articles,
        totalLenght: parsedData.articles.length
    })
}
  handletoPrev=async ()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=7b059855142940549b04611f0728f5d6&page=${this.state.page-1}&pageSize=10`;
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
        articles : parsedData.articles,
        page: this.state.page-1,
        totalLenght: parsedData.articles.length
    })
  }

  handletoNext=async ()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=7b059855142940549b04611f0728f5d6&page=${this.state.page+1}&pageSize=10`;
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
        articles : parsedData.articles,
        page: this.state.page+1,
        totalLenght: parsedData.articles.length

    })
    
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
              <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handletoPrev} >&larr; Previous</button>
              <button disabled={this.state.totalLenght<10} type="button" className="btn btn-dark" onClick={this.handletoNext} >Next &rarr;</button>
              </div>
        </div>
    )
  }
}

export default News

