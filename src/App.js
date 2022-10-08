import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import PaginaInicial from "./Pagina.Inicial";
import { useState } from "react";
import PaginadoFilme from "./PaginadoFilme";



export default function App() {
    const [arrayFilmes, setArrayFilmes] = useState([])
    const [filme, setFilme] = useState([])
    return ( 
        <BrowserRouter> <GlobalStyles />
            <Header><p>Cineflex</p></Header>
            <Routes>
                <Route path="/" element={<PaginaInicial arrayFilmes = {arrayFilmes} setArrayFilmes = {setArrayFilmes}  />} />
                <Route path="/sessoes/:id" element={<PaginadoFilme arrayFilmes = {arrayFilmes} setArrayFilmes = {setArrayFilmes} filme = {filme} setFilme = {setFilme} />} />
               {/*  <Route path="/assentos/id" element={<PaginadaSessao />} />
                <Route path="/sucesso" element={<Sucesso />} />
 */}

            </Routes> 


        </BrowserRouter> 
    )
}

const Header = styled.header`
position: fixed;
top: 0px;
width: 100%;
height: 67px;
background-color:#C3CFD9;
display: flex;
align-items: center;
justify-content: center;
p{
font-size: 34px;
font-family: 'Roboto';
color: #E8833A;

}

`