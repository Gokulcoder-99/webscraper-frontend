import './App.css';
import React, { useState } from 'react';
function App() {
  const [url, setUrl] = useState('');
  const [img,setImg]=useState('');
  const [name,setName]=useState('');
  const [rating,setRating]=useState('');
  const [price,setPrice]=useState('');
  const [link,setLink]=useState('');


  const handleUrlChange = (event) => {
    setUrl(event.target.value);

  };
 const handleClick=(e)=>{
  e.preventDefault()

fetch('http://localhost:5000/api/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ url })  // Sending the URL in the request body
})
  .then(response => response.json())
  .then(data => {
    // Process the fetched data returned from the backend
    const{Image,Name,Rating,Price,Link} = data;
    setImg(Image)
    setName(Name)
    setRating(Rating)
    setPrice(Price)
    setLink(Link)
  })
  .catch(error => {
    console.error('Error:', error);
  });
 }

  
  return (
<div className='App'>
      <div className='main'>
        <header><h1>Amazon Web Scarpe</h1></header>
        <div className='search'>
        <label htmlFor='url' className='url'>Product url: </label>
        <input type='url' id='url' value={url} onChange={handleUrlChange}/> 
        <button className='btn' onClick={handleClick}>Search</button>
        </div>

        <div className='response'>
          <div className='image'>
            <img src={img} alt='ProductImage' />
          </div>
          <div className='info'>
                  <h3>Name={name}</h3>
                  <h3>Rating:{rating}</h3>
                  <h3>Price:{price}</h3>
                  <h3>Link:<a href={link}>{link}</a></h3>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
