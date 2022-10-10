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
        <LegendaAssentos>
            <AssentoVerde></AssentoVerde><h1>Selecionado</h1><br/>
            <AssentoCinza></AssentoCinza><h1>Disponível</h1><br></br>
            <AssentoAmarelo></AssentoAmarelo><h1>Indisponível</h1><br></br>
        </LegendaAssentos>
    </ContainerAssentos>
    <ListaComprador>
        <h1>Nome do comprador</h1>
        <input placeholder="Digite seu nome"
        onChange={(e) => setInputName(e.target.value)} />
        <h1>CPF do Comprador</h1>
        <input placeholder="Digite seu CPF" onChange={(e) => setInputCpf(e.target.value)} />
    </ListaComprador>
    <Link to ="/sucesso"> <BotaoReserva><h1>Reservar Assento</h1></BotaoReserva></Link>
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
background-color: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;
margin-right: 5px;
margin-top: 5px;
`

const AssentoVerde = styled.div`
width: 15px;
height: 15px;
background-color: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 12px;
margin-right: 5px;
margin-top: 5px;
`

const AssentoCinza = styled.div`
width: 15px;
height: 15px;
background-color: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 12px;
margin-right: 5px;
margin-top: 5px;`

const AssentoAmarelo = styled.div`
width: 15px;
height: 15px;
background-color: #FBE192;
border: 1px solid #F7C52B;
border-radius: 12px;
margin-right: 5px;
margin-top: 5px;`

const ContainerAssentos = styled.div`
box-sizing: border-box;
padding-left: 20px;
padding-right: 20px;
margin-bottom: 40px;

`
const ListaAssentos = styled.div`
flex-wrap: wrap;
display: flex;

`
const LegendaAssentos = styled.div`
display: flex;
margin-top: 20px;
align-items: center;
justify-content: flex-start;
h1{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
margin-right: 15px;
color: #4E5A65;
}
`

const ListaComprador = styled.div`
h1{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
}
input{
    width: 327px;
height: 51px;
border: 1px solid #D5D5D5;
border-radius: 3px;
}
`

const BotaoReserva = styled.button`
width: 225px;
height: 42px;
background-color: #E8833A;
border-radius: 3px;
margin-top: 30px;
h1{
    font-family: 'Roboto';
    font-size: 18px;
    color: #FFFFFF;
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
}`