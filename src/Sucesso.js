import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sucesso(props) {
    const { inputname, inputCpf, filmeFinal, dataFinal, horarioFinal, assentoFinal,setAssentoFinal} = props


    return (<ContainerPagina>
        <p>Pedido feito<br></br> com sucesso!</p>
        <h1 data-identifier="movie-session-infos-reserve-finished" >Filme e Sessão</h1>
        <h2>{filmeFinal}</h2>
        <h2>{dataFinal} - {horarioFinal}</h2>
        <h1 data-identifier="seat-infos-reserve-finished" >Ingressos</h1>
        {assentoFinal.map((a) => <h2>Assento {a}</h2>)}
        <h1>Comprador</h1>
        <h2 data-identifier="buyer-infos-reserve-finished" >Nome: {inputname}</h2>
        <h2>CPF: {inputCpf}</h2>
        <Link to="/"><BotaoHome data-identifier="back-to-home-btn" onClick={() => setAssentoFinal([])}>Voltar para a Home</BotaoHome></Link>



    </ContainerPagina>)



}



const BotaoHome = styled.button`
margin-top: 15px;
width: 225px;
height: 42px;
background-color: #E8833A;
border-radius: 3px;

`
const ContainerPagina = styled.div`
margin-top: 100px;
display: flex;
align-items: center;
flex-direction: column;
p{
    font-family: 'Roboto';
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #247A6B;
    margin-bottom: 14px;
}
h1{
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
margin-bottom: 10px;
margin-top: 10px;
}
h2{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
margin-top: 5px;
}
`