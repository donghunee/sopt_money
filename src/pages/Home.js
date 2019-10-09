import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Header from './Header'
import Content from './Content'

const Home = () => {
    return (
      <div className="main">
          <Header />
          <div className="body">
            <Link to="/detail" style={{ textDecoration: 'none',color:'black' }}>
              <Content />
            </Link>
            <Link to="/detail" style={{ textDecoration: 'none' }}>
              <Content />
            </Link>
            <Link to="/detail" style={{ textDecoration: 'none' }}>
              <Content />
            </Link>
        </div>
    </div>
    )
}

export default Home