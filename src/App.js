import React from 'react';
import './App.scss';
import FirstImage from './assets/images/first-picture.jpg';
import NavigationBar from './components/navbar';
import CardNews from './components/cardnews';
import PlayVideo from './assets/icons/play-arrow.svg';
import gsap from 'gsap';

let tl = gsap.timeline();

const style = {
  backgroundColor: '#E20800',
  border: 'none',
  color: '#FFF',
  padding: '5px 20px',
  marginBottom: '30px'
}

export const Button = ({text}) => {
  return (
    <button style={style}>{text}</button>
  )
}

const HomeAnimation = () => {
  
}

function App() {
  const headline_text = "What To Watch For in the 2019 Hungarian Grand Prix"
  const style = {
    home: {
      backgroundImage: `url(${FirstImage})` ,
      minHeight: '100vh',
      backgroundSize: 'cover',
      zIndex: '0',
    }, 
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
  }
  const NewsContent = [
    {
      id: 1,
      type: 'News',
      date: '16 August 2019',
      highlight: "New McLaren wind tunnel 'critical' to the future performance, says Tech Director Key"
    },
    {
      id: 2,
      type: 'News',
      date: '12 August 2019',
      highlight: "What to Watch For in the 2019 Hungarian Grand Prix"
    },
    {
      id: 3,
      type: 'News',
      date: '08 August 2019',
      highlight: "Hailton wants harder championship fight from Leclerc and Verstappen"
    }
  ]
  return (
    <div className="home" style={style.home}>
      <div className="container-fluid" style={style.content}>
        <NavigationBar/>
        <div className="first-container">
          <div className="first-section">
            <Button text="Video"/>
            <h1 className="headline">
              {headline_text}
            </h1>
            <button className="play-video">
              <div className="play-button">
                <img src={PlayVideo} alt="" className="play-arrow"/>
              </div>
              <span className="title">Play Video</span>
            </button>
          </div>
        </div>
        <div className="second-container">
          {NewsContent.map((text, index) => {
            return (
              <CardNews 
                type={text.type} 
                date={text.date}
                highlight={text.highlight} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;