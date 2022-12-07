import axios from 'axios'
import React, { useState } from 'react'

import styled from 'styled-components'
import MovieComponent from '../src/components/MovieComponent'
import MovieInfo from './components/MovieInfo'

export const API_KEY ="45465dff"

function App() {
  const [search, setSearch] = useState('')
  const [timeoutId,setTimeoutId] = useState()
  const [movieList,setMovieList] = useState([])
  const [selectedMovie,setSelectedMovie] = useState()

  // console.log(selectedMovie)
  const fetchData = async(searchString) => {
     const response = await axios.get(`http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
        setMovieList(response.data.Search)
        // console.log(response)
    }

  const handleInputChange = (e) => {
    setSearch(e.target.value)
    const timeout = setTimeout(() => {
      fetchData(e.target.value)
    }, 500)
    setTimeoutId(timeout)

    clearTimeout(timeoutId)
  }

  return (
    <AppContainer>
      <Header>
        <AppName>
          <MovieImg src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6ak3-uwtkBmabS2mBQTbzB0mzDLQq26GBMKC_uNiPB1qDv2cLRVd8J__A0C0YQ-0TPQ&usqp=CAU`}></MovieImg>
          Movie App
        </AppName>
        <SearchBox> 
           <SearchIcon src={`https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg?w=360`} />
           <SearchInput 
                  placeholder='Searching here ...' 
                  onChange={handleInputChange}
                  value={search}
           />
        </SearchBox>
      </Header>
      {selectedMovie &&<MovieInfo selectedMovie={selectedMovie} 
                                  setSelectedMovie={setSelectedMovie}/>}

    <MovieListContainer>
    {movieList?.length
    ? movieList.map((movie, index) => (
      <MovieComponent movie={movie} key={index} setSelectedMovie={setSelectedMovie}/>
    ))
    : "No Movie Search"}
   </MovieListContainer>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 10px;
    font-size: 24px;
    box-shadow: 0 3px 6px 0 #555;
`
const AppName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: lobster;
`
const MovieImg = styled.img`
    width: 36px;
    height: 36px;
    margin: 15px;
`
const SearchBox = styled.div`
    display:flex;
    flex-direction: row;
    padding: 10px 10px;
    background-color: white;
    border-radius: 6px;
    margin-left: 20px;
    width: 50%;
    align-items: center;
`
const SearchIcon = styled.img`
    width: 32px;
    height: 32px;

    :hover {
      cursor: pointer;
    }
`
const SearchInput = styled.input`
    width: 100%;
    color: black;
    font-size: 16px;
    font-weight: bold;
    border: none;
    outline: none;
    margin-left: 8px;
`
const MovieListContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 28px;
    justify-content: space-evenly;
    gap: 24px;
    `

