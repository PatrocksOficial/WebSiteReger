import React from "react";
import imagem1 from '../../Images_Icons/lixeira2.jpg';
import imagem2 from '../../Images_Icons/imagem_lixos.jpg';

const OqueFazemos = () => {
    return (
        <div className="container">
            <div className="titulo_about">
                <h3 className="text-center" style={{paddingTop: "5%"}}>
                    O que fazemos?
                </h3>
                <div className="descricao-inicio">
                    <p className="desc_inicio">
                    O projeto REGER tem como objetivo promover e conscientizar seus usuários
                    sobre a sustentabilidade dentro do campus da UNISAGRADO.
                    Por meio do projeto, que ocorre durante todos os semestres,
                    busca-se adotar medidas, que foram previamente estudadas,
                    e que possibilitam a redução do consumo ou a mudança de hábitos
                    que afetam diretamente a quantidade de resíduos produzidos no campus.
                    </p>
                    <p> Com isso, é possível separar os lixos afim de se evitar o desperdício, veja a seguir: </p>
                    <img src={imagem1} alt=""></img>
                    <img src={imagem2} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default OqueFazemos;