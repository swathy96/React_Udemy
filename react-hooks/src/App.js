import React, { useState, useEffect } from "react";

const App = ()=>{
  const [news,setNews] = useState([])

  const fetchNews = ()=>{
    fetch('https://hn.algolia.com/api/v1/search?query=react')
    .then( result => result.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error))
  };

  useEffect(()=>{
    fetchNews();
  })

  return(
    <div>
      <h2>News</h2>
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
