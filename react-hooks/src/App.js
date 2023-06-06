import React, { useState, useEffect } from "react";

const App = ()=>{
  const [news,setNews] = useState([])

  const [searchTerm, setSearchTerm] = useState('react')

  const fetchNews = ()=>{
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
    .then( result => result.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error))
  };

  useEffect(()=>{
    fetchNews();
  },[searchTerm])

  const handleChange = (e) =>{
    setSearchTerm(e.target.value)
  }

  return(
    <div>
      <h2>News</h2>
      <form>
        <input type="search"  value={searchTerm} onChange={handleChange}/>
        <button>Search</button>
      </form>
      {news.map((n, index) => (<p key={index}>{n.title}</p>))}
    </div>
  )

};

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count+1)
//   };

//   useEffect(()=>{
//     document.title = `Clicked ${count} times!`
//   })

//   return(
//     <div>
//       <h2>Counter app</h2>
//       <button onClick={increment}> Clicked {count} times!</button>
//     </div>
//   );
// }
export default App;
