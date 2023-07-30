import React from 'react'
import BannerImage from '../assets/BannerImage.jpg'
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet. Sit sint dolor a delectus odio ut repellat sint rem velit minima aut quasi veritatis et delectus maiores. Sit laudantium eius id galisum galisum sed aliquid dignissimos ut reprehenderit facere 33 nulla mollitia. Ad tempore quaerat ab nihil adipisci est officia aliquid sit officiis quas id dolore maiores ea dicta dignissimos et maiores amet. Qui esse reiciendis in cupiditate amet ut nobis voluptas et autem rerum ad minus fugit.
            At natus dolorem aut praesentium beatae ut voluptas obcaecati qui velit perspiciatis. Hic vero omnis est quidem quisquam eum fuga assumenda ut illum recusandae est voluptatem voluptatem. Non officia iure quo mollitia omnis aut beatae enim. Qui odit autem 33 esse ipsum ut error consequatur non necessitatibus enim et eligendi commodi aut molestias voluptas ea nihil odio.</p>
        </div>
    </div>
  )
}

export default About
