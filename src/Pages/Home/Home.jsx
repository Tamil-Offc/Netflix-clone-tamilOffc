import React from 'react'
import "./Home.css";
import Navbar from '../../Component/Navbar/Navbar';
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play-button-arrowhead.png"
import info_icon from "../../assets/info-button.png"
import TitleCard from '../../Component/TilteCard/TitleCard';
import Footer from '../../Component/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
          <img src={hero_banner} alt=""className='banner-img'/>
          <div className="hero-caption">
            <img src={hero_title} alt=""  height="100px"  className='caption-img'/>
            <p>Discovering his ties to a secret acient order, a young man living in modern istanbul embarks on a quest to save the city from an immortal enemy.</p>
           <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
           </div>
          <TitleCard />
          </div>
        </div>
        <div className="more-cards">
          <TitleCard title={'Blockbuster Movies'} category={"popular"}/>
          <TitleCard title={'Only on Netflix'} category={"top_rated"}/>
          <TitleCard title={'Upcoming '} category={"upcoming"}/>
          <TitleCard title={'Top Pics For You'} category={"top_rated"}/>
        </div>
        <Footer />
    </div>
  )
}
export default Home