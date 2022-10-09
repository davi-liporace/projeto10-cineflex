import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"


export default function PaginadaSessao(props){
    const {setInputName, setInputCpf, setFilmeFinal, setDataFinal, setHorarioFinal} = props
const [arrayAssentos, setArrayAssentos] = useState({seats:[], day:[{weekday:[],date:[]}],movie:[{title:[], posterURL:[]}],name:[] })
const [informacoesSessao, setInformacoesSessao] = useState([])
const {id} = useParams()

useEffect(() =>{
const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)
promise.then(res => setArrayAssentos(res.data))
promise.catch(erro => console.log(erro.status))
}
)




function setInformacoesFilme(){
    const {setInputName, setInputCpf, setFilmeFinal, setDataFinal, setHorarioFinal,filmeFinal} = props
setFilmeFinal(arrayAssentos.movie.title)
setDataFinal(arrayAssentos.day.date)
setHorarioFinal(arrayAssentos.name)
}

setInformacoesFilme()


return (
<ContainerPagina>
    <p>Selecione o(s) assento(s)</p>
    <ContainerAssentos>
        <ListaAssentos>{arrayAssentos.seats.map((a) =><Assentos>{a.name}</Assentos>  )} </ListaAssentos>
        <LegendaAssentos></LegendaAssentos>
    </ContainerAssentos>
    <ListaComprador>
        <h1>Nome do comprador</h1>
        <input placeholder="Digite seu nome"
        onChange={(e) => setInputName(e.target.value)} />
        <h1>CPF do Comprador</h1>
        <input placeholder="Digite seu CPF" onChange={(e) => setInputCpf(e.target.value)} />
    </ListaComprador>
    <Link to ="/sucesso"> <BotaoReserva>Reservar Assento</BotaoReserva></Link>
    <Footer>
           <ContainerImg> <ImgFooter src={arrayAssentos.movie.posterURL} ></ImgFooter></ContainerImg>
            <TituloFooter>{arrayAssentos.movie.title}</TituloFooter>
            <TituloFooter>{arrayAssentos.day.weekday} - {arrayAssentos.day.date}</TituloFooter>
        </Footer>
    
    
    </ContainerPagina>
)
}



const Assentos = styled.button`
width: 26px;
height: 26px;
background-color: grey;
border: 1px solid black;
border-radius: 12px;
margin-right: 5px;
margin-top: 5px;

`
const ContainerAssentos = styled.div``
const ListaAssentos = styled.div`
flex-wrap: wrap;
display: flex;

`
const LegendaAssentos = styled.div``
const ListaComprador = styled.div``
const BotaoReserva = styled.div``
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
}`