import React, {useEffect, useState} from 'react';
import Card from './Card';

let apiKey = "&api_key=a3eb0c1cb7d5b75632884c545f1100ea";
let mainUrl = "https://api.themoviedb.org/3";
let url = mainUrl+"/discover/movie?sort_by=popularity.desc"+apiKey;
let arr = ["Famous","Family","Children","Thriller","Sci-fi"];

const Main = () => {

    const [movieData,setData] = useState([]);
    const [urlSet,setUrl] = useState(url);
    const [search,setSearch]=useState();

    useEffect(() => {
        fetch(urlSet).then(res=>res.json()).then(data => {
            // console.log(data.results);
            setData(data.results);
        });
    }, [urlSet])
    
    const getData=(movieType)=>{
        if(movieType==="Famous")
        {
            url = mainUrl+"/discover/movie?sort_by=popularity.desc"+apiKey;
        }
        if(movieType==="Family")
        {
            url = mainUrl+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+apiKey;
        }
        if(movieType==="Children")
        {
            url = mainUrl+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+apiKey;
        }
        if(movieType==="Thriller")
        {
            url = mainUrl+"/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"+apiKey;
        }
        if(movieType==="Sci-fi")
        {
            url = mainUrl+"/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc"+apiKey;
        }
        setUrl(url);
    }

    const searchMovie=(evt)=>{
        if(evt.key==="Enter")
        {
            // console.log("hello");
            url = mainUrl+"/search/movie?api_key=a3eb0c1cb7d5b75632884c545f1100ea&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }

  return (
    <div>
    <div className="header">
        <nav>
            {/* <div>Movie Mania!</div> */}
            <ul>
                <li><h1>Movie Mania!</h1></li>
                {
                    arr.map((value,pos)=>{
                        return(
                            <li>
                                <a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
        <form>
            <div className="search">
                <input className="textInput" type="text" placeholder="Enter movie name..." onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie}></input>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    </div>
    <div className="content">
        {
            (movieData.length===0)?<p className="notFound">No movie found as per your search!</p>: movieData.map((res,pos) => {
                return(
                    <Card info={res} key={pos}/>
                )
            })
        }
    </div>
    </div>
  )
}

export default Main;