import React from "react";
import './Crescemos.css'
import lixeiras from '../../Images_Icons/lixeiras.png';
import reger from '../../Images_Icons/reger_identidade_Visual.png';
import terra from '../../Images_Icons/terra.jpeg';

const Crescemos = () => {
    return (
        <div className="container">
            <div className="crescemos_container">
                <h3 className="text-center" style={{paddingTop: "5%"}}> Crescemos </h3>
                <hr className="linha_divisoria"/>
            </div>

            <div className="descricao_crescemos">
                <p> Ao decorrer do tempo, desde 2016 o projeto REGER
                    vem ganhando espaço, moldando sua história, com diversos artigos,
                    pesquisas e atividades práticas colocando à tona tudo que foi 
                    transcorrido acerca de conhecimento.
                </p>
                <p> O ano de destaque ocorreu em 2018, quando foi inaugurado
                    o Pátio de Compostagem, conseguindo fazer outro feito memorável
                    retirando os Canudos, os quais são os principais responsáveis por afetar
                    a fauna marinha.
                    
                </p>
                    <p>
                        Você pensa que parou por ai? 
                    
                    </p>
                    <p>
                        A resposta é não, acabaram ganhando uma identidade visual presente na Universidade do Sagrado coração
                    </p>
                    <p>
                        Confira algumas imagens:
                    </p>              
            </div>
            <div className="img"></div>
            <img src={reger} alt="" className="imagem_reger"></img>
            <img src={lixeiras} alt=""></img>
            <img src={terra} alt=""></img>
        </div>
    )
}
export default Crescemos;