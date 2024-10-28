import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import {  useEffect, useState } from "react";

export default function Promessa(){
    var compara = "";

    if("0" == 0){
        compara = "Verdadeiro";
    }else{
        compara = "False"
    }

    const [prometido, setPrometido] = useState("");
    useEffect(() => {
     setTimeout(() => {   
        setPrometido(mudaTexto("é uma dívida"));
        document.title="Promessa é dívida"
    }, 4000);

    });
    
    return <>
    <Menu />
    <Container>
        Promessa {prometido===""?<img src="load-33_256.gif"/>:prometido}
    </Container>
    <Footer />
    </>
}

function mudaTexto(Texto){
    return new Promise((resolva) => {
        setTimeout(() =>{
            resolva(texto);
       
    },3000);
   });  
} 