import { Container } from "react-bootstrap"
import style from "@/styles/Footer.module.css"
export default function Footer(){

    return(
    <Container> 
        <footer className={`${style.footerGradiente}  my-4 border-4 border border-secondary-subtle roudend rounded-3`}>
            <ur className="nav justify-content-center border-bottom border-bottom border-2 border-sucess ">
                <li className=""> Disciplina de Framework 2 </li>
            </ur>
            <p className="text-center"> &copy; 2024 - IFMS </p>
        </footer>
    </Container>   
    );
}