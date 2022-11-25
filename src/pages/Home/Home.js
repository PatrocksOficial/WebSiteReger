import React from "react";
import '../Home/Home.css';
import projeto from '../../Images_Icons/inicioProjeto.jpg';
import rs from '../../Images_Icons/3rs.jpg';
import icons from '../../Images_Icons/icones_verde.jpg';

const Home = () => {
    return (
        <div className="container">
            <div className="titulo_sobre">
                <div className="title_img">
                    <h3 className="text-center" style={{paddingTop: "5%"}}>
                        O Início do Projeto
                    </h3>
                    <img src={projeto} className="imagem_inicio" alt=""></img>
                </div>
                <div className="descricao-inicio">
                    <p className="desc_inicio">
                        Em 2016, foi dado início ao Projeto REGER, cujo projeto tem o englobamento
                        de diversos setores da USC, focando principalmente na diminuição de resíduos,
                        onde se tem como lema os princípios dos 3 Rs, que são:
                        <ul className="lista-r">
                            <li> Redução do consumo e desperdício </li> 
                            <li> Reutilização </li>
                            <li> Reciclagem de Materiais </li> 
                        </ul>
                    </p>
                    <img src={rs} className="imagem_inicio" alt=""></img>
                    <img src={icons} className="imagem_inicio" alt=""></img>
                </div>
            </div>
        </div>
    )
}
export default Home;