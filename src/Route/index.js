import React from "react";
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import HomeContainer from '../Container/Home'
import AboutContainer from '../Container/About'
import ContactContainer from '../Container/Contact'
import DetailsContainer from '../Container/Details'
import MoviesContainer from "../Container/Movies";
import SearchContainer from '../Container/Search'
import TVseriesContainer from "../Container/TV-Series";
import HeaderComponent from "../Components/Header";
import FooterComponent from '../Components/Footer'
 const RouterComponents=()=>{
     return (
        <>
       <BrowserRouter>
       <HeaderComponent/>
        <Routes>
            <Route path='/' element={<HomeContainer/>}/>
            <Route path='/about' element={<AboutContainer/>}/>
            <Route path='/contact' element={<ContactContainer/>}/>
            <Route path='/details' element={<DetailsContainer/>}/>
            <Route path='/movies' element={<MoviesContainer/>}/>
            <Route path='/search' element={<SearchContainer/>}/>
            <Route path='/series' element={<TVseriesContainer/>}/>
            
            <Route path='/details/:movieid/:mediatype'element={<DetailsContainer/>}/>
        </Routes>
        <FooterComponent/>
       </BrowserRouter>
        </>
     )
 }
 export default RouterComponents;