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
                        Aonde fica alocado o projeto REGER?
                    </h1>
                </div>

                <div className="info_aonde">
                    <p> O projeto REGER se encontra na Unisagrado, onde se tem como base
                        o princípio dos 5 Rs e nos ODS da ONU.
                        Ao decorrer da faculdade, pode-se observar que as lixeiras tem um 
                        cartaz a fim de informar o que pode e não pode ser jogado naquelas lixeiras,
                        para facilitar o manejamento dos resíduos gerados.
                    </p>
                    <div className="ajustar_img">
                        <img src={fotos} alt=""></img>
                        <p className="abaixo"> Abaixo visualize o mapa a seguir da faculdade para saber aonde se locomover: </p>
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