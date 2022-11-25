import React from "react";
import './ComoFazemos.css';
import imagem from '../../Images_Icons/patio.jpg';
import imagem2 from '../../Images_Icons/reger_identidade_Visual.png';

const ComoFazemos = () => {
    return (
        <div className="container">
            <div className="infos_container">
                <div className="title_aonde">
                    <h1 className="text-center">
                        Como Fazemos?
                    </h1>
                </div>

                <div className="info_aonde">
                    <p> Como ponto de partida, tomamos como análise a quantidade de resíduos gerados
                        nos setores (químicos, biológicos, área da saúde, orgânicos e recicláveis)
                        da UNISAGRADO para termos uma certa dimensão do que estamos lidando.
                        Após isso, é feita a constatação do que é mais utilizado em grande porte no campus e,
                        é feita a indicação da redução de determinados itens/objetos. Além disso, também é realizado
                        adequações necessárias para o descarte correto de resíduos biológicos, químicos e da área da saúde. 
                        Como resultado, em média, foram reduzidos mais de 50% de todo resíduos gerados no campus da instituição.
                        Como por exemplo, copos plásticos reduziu-se em 70%, impressões em 50% e o envio de lixo em 50% também.
                    </p>
                    <img src={imagem} alt=""></img>
                    <img src={imagem2} alt=""></img>
                    <div className="img_card">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ComoFazemos;