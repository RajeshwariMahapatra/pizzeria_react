import { Button } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
        <strong>Honey's Pizzeria</strong>
        <p>BEST PIZZA EVER!!!</p>
        <Link to="/Menu">
          <Button>Order Now!!</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
