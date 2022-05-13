import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMememImages] = React.useState(memeData);

  function handleText(event){
    const {name, value} = event.target
    console.log(value)
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  React.useState(() =>{
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMememImages(data.data.memes))
  })

  function getMemeImage() {
    const memesArray = allMemeImages;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }


  return (
    <>
      <div className="form">
        <div className="form--texts">
          <input 
          className="form--text" 
          type="text"
          onChange={handleText}
          value={meme.topText}
          name="topText"
          ></input>

          <input 
          className="form--text" 
          type="text"
          onChange={handleText}
          value={meme.bottomText}
          name="bottomText"
          ></input>
        </div>
        <button className="form--submit" onClick={getMemeImage}>
          Get a new meme Image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}
