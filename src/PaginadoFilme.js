import styled from 'styled-components'
import { useEffect } from 'react';
import axios from 'axios';
import { useParams, Link} from "react-router-dom"




export default function PaginadoFilme(props){
const {arrayFilmes, setArrayFilmes, filme, setFilme} = props
const { id } = useParams();
const idFilme = id - 1;


useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)
    promise.then(resposta => setFilme(resposta.data.days))
    promise.catch(erro => {console.log(erro.status);        }
    )
}, []);

console.log(filme)
console.log(idFilme)




    return(
        <ContainerPagina>
            <p>Selecione o horário</p>
        {filme.map((f)=> <Sessao>
                <Dia>{f.date} - {f.weekday}</Dia>
                {f.showtimes.map((i)=><Horario><Link to= "/">{i.name}</Link> </Horario>)}
            </Sessao>)}    

        <Footer>
            <ImgFooter src={arrayFilmes[idFilme].posterURL} ></ImgFooter>
            <TituloFooter>{arrayFilmes[idFilme].title}</TituloFooter>
        </Footer>


        </ContainerPagina>
    )
}







const Sessao = styled.div``
const Dia = styled.div``
const Horario = styled.button``


const Footer = styled.div`
display: flex;
position: fixed;
bottom: 0%;
height: 117px;
width:100%;
background-color:grey`

const ImgFooter = styled.img`
width: 48px;
height: 72px;`

const TituloFooter = styled.div``

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