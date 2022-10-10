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
                <Dia data-identifier="session-date">{f.date} - {f.weekday}</Dia>
               <ContainerHorarios> {f.showtimes.map((i)=><Horario data-identifier="hour-minute-btn"><Link to= {`/assentos/${i.id}`}><h1>{i.name}</h1></Link> </Horario>)}</ContainerHorarios>
            </Sessao>)}    

        <Footer>
           <ContainerImg> <ImgFooter src={arrayFilmes[idFilme].posterURL} data-identifier="movie-img-preview" ></ImgFooter></ContainerImg>
            <TituloFooter>{arrayFilmes[idFilme].title}</TituloFooter>
        </Footer>


        </ContainerPagina>
    )
}







const Sessao = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
flex-direction: column;
`
const ContainerHorarios = styled.div`
display: flex;
margin-top: 20px;
justify-content: center;
`

const Dia = styled.div`
font-family: 'Roboto';
font-style: normal;
font-size: 20px;
`


const Horario = styled.button`
width: 83px;
height: 43px;
background-color: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-size: 18px;
color: white;
margin-right: 10px;
overflow-y: scroll;
h1{
color: white;
}
`


const Footer = styled.div`
display: flex;
position: fixed;
align-items: center;
bottom: 0%;
height: 117px;
width:100%;
justify-content: flex-start;
background-color:#DFE6ED;
box-sizing: border-box;
padding: 10px 14px;
`

const ContainerImg = styled.div`
width: 64px;
height: 89px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin-right: 15px;
`

const ImgFooter = styled.img`
width: 48px;
height: 72px;`

const TituloFooter = styled.div`
color: #293845;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
`

const ContainerPagina = styled.div`
margin-top: 100px;
display: flex;
align-items: center;
flex-direction: column;
p{
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin-bottom: 14px;
}
`