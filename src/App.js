import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {

  //1. 데이터 담을공간
  const [movies, setMovies] = useState({})
  const [loading, setLoading] = useState(true)

  //3, 네트워킹

  const getData = async () => {
    return (
        await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=8597e491ed6e80f0de12e349eb60ea6e')
            // .then(res => console.log(res.data.results))
            .then(res =>{
              setMovies(res.data.results)
              setLoading(false)
            })
            .catch(err => console.log(err))
    )
  }



  //2, 자동실행함수
  useEffect(() => {
    getData()
  }, {})

    //4. 화면에 보여지는부분
    return (
        <>
            {loading ?
                <div>
                    <h1>
                        loading ...
                    </h1>
                </div>
            : (
                    <div>
                        {movies.map(movie =>
                            <>
                                <h1>Movie Title : {movie.name}</h1>
                                <h2>first Release Day : {movie.first_air_date || movie.release_date}</h2>
                                <h3>{movie.vote_average} : 10</h3>
                            </>
                        )}
                    </div>
                )
            }
        </>


    );
};

export default App;
