import React from "react";
import './Credits.css';
import logo from '../../Images_Icons/imagem-logo.jpg';

const Credits = () => {
    return (
        <div className="Principal">
            <div className="Cursos">
                <div className="Curso">
                    <h3 className="CursoTitulo">Ciência da Computação</h3>
                    <i className="Aluno">• Gabriel Torres Polatro Ribeiro </i>
                    <i className="Aluno">• Gabrielli Coracini de Freitas </i>
                    <i className="Aluno">• Marlon Antunes Sales </i>
                    <i className="Aluno">• Patrick Nunes </i>
                    <i className="Aluno">• Ryan Gomes Villela </i>
                    <i className="Aluno">• Vinícius de Freitas Marques da Cunha </i>
                    <i className="Professor">Profº: Vinicius Santos Andrade </i>
                </div>
                <div className="Curso">
                    <h3 className="CursoTitulo">Design</h3>
                    <i className="Aluno">• Alicia Leite Pavanello </i>
                    <i className="Aluno">• João Pedro Barbosa Ponsoni </i>
                    <i className="Aluno">• Kaique Janes Martins </i>
                    <i className="Aluno">• Lucas Teixeira Dias </i>
                    <i className="Aluno">• Nathan Souza </i>
                    <i className="Professor">Profª: Sileide Aparecida de Oliveira Paccola </i>
                </div>
            </div>
            <div className="Rodape">
                <h5 className="Descricao">Linguagem de Programação II</h5>
                <h5 className="Descricao">Disciplina extensionista do curso de Ciência da Computação</h5>
                <img src={logo} className="Logo" alt="Logo_Unisagrado"></img>
            </div>
        </div>
    )
}

export default Credits;
