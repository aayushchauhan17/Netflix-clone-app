import React from 'react';
import request from './request';
import './App.css';
import Otherrow from './Otherrow';
import Banner from './Banner';

import Row from './Row'

function App() {

  return (
    <>
    <Banner fetchURL={request.fetchTrending} />
    <div className="rows">
    <Row  key="{1++}" title="NETFLIX ORIGINALS"  fetchURL={request.fetchNetflixOriginals}/>
    <Otherrow key="{1++}" title="Top Rated" fetchURL={request.fetchTopRated}/>
    <Otherrow key="{1++}" title="Romance" fetchURL={request.fetchRomanceMovies}/>
    <Otherrow key="{1++}" title="Trending" fetchURL={request.fetchTrending}/>
    <Otherrow key="{1++}" title="Horror" fetchURL={request.fetchHorrorMovies}/>
    <Otherrow key="{1++}" title="Comedy" fetchURL={request.fetchComedyMovies}/>
    <Otherrow key="{1++}" title="Action" fetchURL={request.fetchActionMovies}/>
    <Otherrow key="{1++}" title="Documentaries" fetchURL={request.fetchDocumentaries}/>
    </div>
    </>
  );
}

export default App;




