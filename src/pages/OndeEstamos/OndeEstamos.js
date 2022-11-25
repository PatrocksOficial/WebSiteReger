import React from "react";
import './OndeEstamos.css';
import mapa from '../../Images_Icons/mapa_usc.jpg';
import fotos from '../../Images_Icons/lixeiras.png';

const OndeEstamos = () => {
    return (
        <div className="container">
            <div className="infos_container">
                <div className="title_aonde">
                    <h1 className="text-center">
                        Onde fica alocado o projeto REGER?
                    </h1>
                </div>

                <div className="info_aonde">
                    <p> O projeto REGER se encontra na Unisagrado, onde se tem como base
                        o princípio dos 5 Rs e nos ODS da ONU.
                        Ao caminhar pela faculdade, pode-se observar que as lixeiras têm um 
                        cartaz, a fim de informar o que pode e não pode ser jogado naquelas lixeiras,
                        com o intuito de facilitar o manejo dos resíduos gerados.
                    </p>
                    <div className="ajustar_img">
                        <img src={fotos} alt=""></img>
                        <p className="abaixo"> Confira abaixo o mapa da Unisagrado, para caso queira se localizar na faculdade: </p>
                        <img src={mapa} alt="" ></img>
                        <div className="img_card">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OndeEstamos;
