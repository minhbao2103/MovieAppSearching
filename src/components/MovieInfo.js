import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { API_KEY } from '../../src/App'


function MovieInfo({selectedMovie,setSelectedMovie}) {
    const [movieInfo, setMovieInfo] = useState()
        useEffect(() => {
            axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
                 .then((response) => setMovieInfo(response.data))
        },[selectedMovie])
  return (
    <Container>
        <CoverImg src={movieInfo?.Poster}/>
        <InfoColumn>
            <MovieName>Movie: {movieInfo?.Title}</MovieName>
            <MovieInfomation>Year:<span> {movieInfo?.Year}</span></MovieInfomation>
            <MovieInfomation>Rated:<span> {movieInfo?.Rated}</span></MovieInfomation>
            <MovieInfomation>Released:<span> {movieInfo?.Released}</span></MovieInfomation>
            <MovieInfomation>Runtime:<span> {movieInfo?.Runtime}</span></MovieInfomation>
            <MovieInfomation>Genre:<span> {movieInfo?.Genre}</span></MovieInfomation>
            <MovieInfomation>Director:<span> {movieInfo?.Director}</span></MovieInfomation>
            <MovieInfomation>Writer:<span> {movieInfo?.Writer}</span></MovieInfomation>
            <MovieInfomation>Actors:<span> {movieInfo?.Actors}</span></MovieInfomation>
            <MovieInfomation>country:<span> {movieInfo?.Country}</span></MovieInfomation>
        </InfoColumn>
        <CloseButton onClick={()=>setSelectedMovie()}><span>X</span></CloseButton>
    </Container>
  )
}

export default MovieInfo

const Container = styled.div`
    display:flex;
    flex-direction: row;
    padding: 20px 30px;
    justify-content: center;
    border-bottom: 1px solid lightgray;

    @media screen and (max-width:600px) {
    display:flex;
    flex-direction: column;
    }
`
const CoverImg = styled.img`
    object-fit: cover;
    height: 352px;

    @media screen and (max-width:600px) {
        height: 482px;
    }
`
const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`
const MovieName = styled.span`
    font-size: 24px;
    font-weight: 600;
    color: black;
    margin: px 0px;
    white-space: nowrap;
    overflow: hidden;
    text-transform: capitalize
`
const MovieInfomation = styled.span`
    font-size: 16px;
    color: black;
    font-weight: 600;
    margin: 4px 0px;
    white-space: nowrap;
    overflow: hidden;
    text-transform: capitalize;
  & span {
    opacity:0.6;
  }
`
const CloseButton = styled.span`
    color: black;
    background: gray;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.7;
    height: 24px;
    width: 24px;

    span {
       margin:8px;
    }
`