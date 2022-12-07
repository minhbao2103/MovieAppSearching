import React from 'react'
import styled from 'styled-components'

function MovieComponent({movie,setSelectedMovie}) {
  return (
    <MovieContainer onClick={() => setSelectedMovie(movie.imdbID)}>
    <CoverImg src={movie.Poster}/>
    <MovieName>{movie.Title}</MovieName>
    <InfoColumn>
        <MovieInfo>Year:{movie.Year}</MovieInfo>
        <MovieInfo>Type:{movie.Type}</MovieInfo>
    </InfoColumn>
    </MovieContainer>
  )
}

export default MovieComponent

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 280px;
    box-shadow: 0 3px 6px 0 #555;
    cursor: pointer;
`
const CoverImg = styled.img`
    height: 362px;
    object-fit: cover;
`
const MovieName = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin: 8px 0px;
    text-overflow: ellipsis;
    overflow: hidden;
`
const InfoColumn = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`
const MovieInfo = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: black;
    text-transform: capitalize;
`