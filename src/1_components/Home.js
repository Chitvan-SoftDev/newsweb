import React, { Component } from 'react'
import background from '../2_resource/back2.jpg'
import { Link } from 'react-router-dom'

export class Home extends Component {
  handleClick = (category) => {
    // let oldData= JSON.parse(localStorage.getItem('type')||'')
    localStorage.setItem('type', JSON.stringify(category))



  }
  render() {
    return (
      <div className='homePage'>
        <div className='buttons'>
          <ul>
            <li>
              <Link to='/news'>
                <button onClick={()=>this.handleClick('general')}>GENERAL</button>
              </Link>
            </li>
            <li>
              <Link to='/news'>
                <button onClick={()=>this.handleClick('technology')}>TECHNOLOGY</button>
              </Link>
            </li><li>
              <Link to='/news'>
                <button onClick={()=>this.handleClick('business')}>BUSINESS</button>
              </Link>
            </li><li>
              <Link to='/news'>
                <button onClick={()=>this.handleClick('sports')}>SPORTS</button>
              </Link>
            </li><li>
              <Link to='/news'>
                <button onClick={()=>this.handleClick('entertainment')}>ENTERTAINMENT</button>
              </Link>
            </li>
          </ul>


        </div >
        <div className='backgroundImgDiv'>
          <img src={background} className='backgroundImg' alt='' >
          </img></div>
      </div>
    )
  }
}

export default Home