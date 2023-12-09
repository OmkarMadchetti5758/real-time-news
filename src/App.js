

import './App.css';
import News from './News';
import { useEffect,useState} from 'react';

export default function App() {
  let [articles,setArticles]=useState([]);
  let [category,setCategory]=useState("india");
  let [date,setDate]=useState()
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=85801a0bf19044daa395ffba7688ef33`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
    },[category,date])

  return (
    <div className="App">
      <header className='header'>
        <div className='navbar'>
          <h1 className='title'>Kal Tak</h1>
          <input type='date' className='date' onChange={(event)=>{
            if(event.target.value!="")
            {
              setDate(event.target.value);
            }
            else{
              setDate("2023-12-08");
            }
          }}/>
          <input type='text' onChange={(event)=>{
            if(event.target.value!="")
            {
              setCategory(event.target.value);
            }
            else{
              setCategory("india");
            }
            
          }} placeholder='Search News' />
        </div>
      </header>
      <section className="article">
        {
          articles.map((article)=>{
            return(
              <News article = {article}/>
            )
          })
        }
      </section>
    </div>
  );
}

// <section className="article">
// {
//   articles.length!==0?
//   articles.map((article)=>{
//     return(
//       <News article = {article}/>
//     )
//   })
//   :
//   setCategory("india");
// }
//</section>
