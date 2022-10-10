import { useState } from "react";
import styled from "styled-components";

export default function Assentos(props){
const {id,name,setAssentosSelecionados,assentosSelecionados,isAvailable,setAssentoFinal,assentoFinal} = props
let [assento,setAssento] = useState(false)


function selecionaAssento(){
    if(isAvailable && !assento){
        setAssento(!assento)
        setAssentosSelecionados([...assentosSelecionados,id])
        setAssentoFinal([...assentoFinal,name])
        return
    }
    else if(isAvailable){
        setAssento(!assento)
        let novaArray = [...assentosSelecionados]
        let array = [...assentoFinal]
        array = array.filter((a) => a !==name)
        novaArray = novaArray.filter((a) => a !==id)
        setAssentosSelecionados(novaArray)
        setAssentoFinal(array)
        return
    }
}
return (<AssentosEstilizados isAvailable={isAvailable} onClick={selecionaAssento} assento={assento} assentoFinal={assentoFinal} setAssentoFinal={setAssentoFinal} >{name}</AssentosEstilizados>)
}





const AssentosEstilizados = styled.button`
width: 26px;
height: 26px;
background-color: ${props=>props.assento?"#1AAE9E":props.isAvailable?"#C3CFD9":"#FBE192"};
border: 1px solid #808F9D;
border-radius: 12px;
margin-right: 5px;
margin-top: 5px;
`