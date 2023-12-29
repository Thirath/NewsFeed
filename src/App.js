import React, {useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'
import './index.css';

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=india&category=${category}&apiKey=ebd9804615b04e0587e8ee9a48f9f78f')
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])

  return ( 
    <div className="App">
      <h1 className='title'>See The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    </div>
  )
}
export default App