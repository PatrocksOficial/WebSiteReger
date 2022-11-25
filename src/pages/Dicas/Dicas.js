import React from "react";
import './Dicas.css';
import planet from '../../Images_Icons/planetImportant.gif';
import corra from '../../Images_Icons/correndoPlanet.gif';

const Dicas = () => {
    return (
        <div className="container">
            <div className="infos_container">
                <div className="title_aonde">
                    <h1 className="text-center">
                        Dicas sobre Sustentabilidade
                    </h1>
                </div>

                <div className="info_aonde">
                    <div className="imagem_planet">
                        <img src={planet} alt=""></img>
                    </div>
                    <p> A principal dica para colaborar com a sustentabilidade
                        é separar o lixo, essa medida faz com que a degradação ambiental
                        seja diminuída, pois o lixo será reclicado da forma correta, ainda mais se for lixo
                        orgânico (resto de comida) que podem ser aproveitados no processo de compostagem, virando
                        adubo para as plantações.
                    </p>

                    <p>
                        Economizando água, pois esse recurso assim como os demais, é finito, ou seja,
                        pode vir a acabar em qualquer momento, por isso o cuidado redobrado, evitando o desperdício
                        de água à toa. 
                    </p>

                    <p>
                        Buscar maneiras sustentáveis para se locomover, utilizando meios de transportes como bicicleta,
                        transporte público, a pé e demais meios de locomoção como patins, skate e afins.
                        Fazendo isso, além de poupar combustível, também tem um ganho significativo praticando exercício,
                        se livrando de engarrafamentos e não emitindo gás carbônico.
                    </p>

                    <p> Quando estiver com duvida acerca de qual lixeira jogar um determinado objeto, procure pesquisar antes, é uma prática simples,
                        rápida e fácil, basta abrir o google e se informar, lembrando também que o Projeto REGER deixou em todas lixeiras, um cartaz informando
                        o que pode ser jogado.
                    </p>

                    <p> Por fim, tens um assunto um tanto quanto delicado, o famoso consumismo desenfreado, comprar compulsivamente, uma ótima forma de economizar 
                        o dinheiro é adquirindo somente o necessário, logo, antes de sair comprando compulsivamente, faça uma lista do que realmente precisa.
                        Uma outra forma é se questionar "Eu preciso comprar esse produto agora? vou ter condições de pagar?".<br/>
                        Muitas vezes, acabamos sendo seduzidos por algo chamativo, seja uma promoção ou oferta, e, sem cotar preço e colocar em prática os itens acima,
                        acabamos caindo nessa jogada. O correto a se fazer é trabalhar com a racionalidade, comprando com sabedoria!
                    </p>

                    <div className="corra">
                        E agora, mais do que nunca, o Mundo percebeu a importância da Sustentabilidade, todos estão correndo atrás para não deixar uma pegada ecológica imensa 
                        e destruir o futuro das próximas gerações, para não acabar sofrendo...
                    </div>
                    <div className="runAfter">
                        <img src={corra} alt=""></img>
                    </div>
                    </div>
                </div>
            </div>
    )
}
export default Dicas;