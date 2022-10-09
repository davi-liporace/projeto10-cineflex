import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sucesso(props){
const {inputname, inputCpf, filmeFinal, dataFinal, horarioFinal} = props


return(<ContainerPagina>
    <p>Pedido feito com sucesso!</p>
    <h1>Filme e Sessão</h1>
    <h2>{filmeFinal}</h2>
    <h2>{dataFinal}{horarioFinal}</h2>
    <h1>Ingressos</h1>
    <h2>assento 15</h2>
    <h1>Comprador</h1>
    <h2>Nome: {inputname}</h2>
    <h2>CPF: {inputCpf}</h2>
<Link to = "/"><BotaoHome>Voltar para a Home</BotaoHome></Link>
    


</ContainerPagina>)



}



const BotaoHome = styled.button`
margin-top: 15px;


`
const ContainerPagina = styled.div`
margin-top: 100px;
display: flex;
align-items: center;
flex-direction: column;
p{
    font-family: 'Roboto';
    font-size: 24px;
    color: #247A6B;
    margin-bottom: 14px;
}
`