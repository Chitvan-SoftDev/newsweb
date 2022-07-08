import React, { Component } from 'react'
import axios from 'axios'

export class NewsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            category: ''
        }
    }
    async componentDidMount() {
        let cat= JSON.parse(localStorage.getItem('type'))

        this.setState({
            category:cat

        })
        // console.log(cat)
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c64523ec601540af80d281a657d84b39`)
        let newsData = response.data
        // let oldData=JSON.parse(localStorage.get)
        this.setState({
            news: [...newsData.articles],

        })
    
    }
    handleImage=(url)=>{
        if(url!=null){
            return url;
        }
        else{
            return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&w=1000&q=80'
        }
    }
    // handleLastUpdatedAt=(string)=>{
    //     var s= string.split('T')

    // }

    render() {

        return (
            <div className='temp'>
            <div className='newsListPage'>
                <div>
                    <h1 className='text-center'><strong>Trending News</strong></h1>
                </div>
                <div className='newsList'>
                    {
                        this.state.news.map((newsElem) => (
                            <div className="card mb-3 newsListCard">
                                <a href={newsElem.url}>
                                    
                                     <img src={this.handleImage(newsElem.urlToImage)} className="card-img-top newsListImg"  alt={''} />
                                    

                                    <div className="card-body">
                                        <h5 className="card-title newsTitle">{newsElem.title}</h5>
                                        <p className="card-text newsDescription">{newsElem.description}</p>
                                        <p className="card-text newsSource"><small className="text-muted">By {newsElem.source.name}</small></p>
                                    </div>
                                </a>

                            </div>
                        ))

                    }

                </div>
            </div>
            </div>
        )
    }
}

export default NewsList