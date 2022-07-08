import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
        <div style={{ height:'2.5rem',display: 'flex',justifyContent: 'flex-end' , padding: '0.5' }}>
        {/* in react in line css is passed as an object  */}
        <Link to="/" style={{textDecoration:'none' ,color:'black'}}>

        <h2 style={{ marginRight: '2rem',  }}>Home</h2>

        </Link>
        

      </div>
    )
  }
}

export default NavBar