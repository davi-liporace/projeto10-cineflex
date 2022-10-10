import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"



export default function PaginaInicial(props) {
    const{ arrayFilmes, setArrayFilmes,} = props


  useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        promise.then(resposta => setArrayFilmes(resposta.data))
        promise.catch(erro => {console.log(erro.status);        }
        )
    }, []);





    return (
        <ContainerPagina>
            <p>Selecione o filme</p>
            <ContainerFilme>
                {arrayFilmes.map((i) => <ImagemFilme data-identifier="movie-outdoor">
                    <Link to={`/sessoes/${i.id}`}>
                    <img src={i.posterURL} id={i.id} />
                    </Link>
                    </ImagemFilme>)}                
            </ContainerFilme>
        </ContainerPagina>
    )
}


const ContainerPagina = styled.div`
margin-top: 100px;
display: flex;
align-items: center;
flex-direction: column;
p{
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
}
`

const ImagemFilme = styled.div`

width: 145px;
height: 209px;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
img{
    width: 129px;
    height: 193px;
}
`
const ContainerFilme = styled.div`
width: 60%;
display: flex;
flex-wrap:wrap;
margin: 20px auto;
justify-content: space-between;
`