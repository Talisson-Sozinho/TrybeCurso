import React from "react";
import "./style.css";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export class Cards extends React.Component {
  render() {
    return(
      <main>{
        conteudos.map(({conteudo, status, bloco}, index) => (
          <ul key={index}>
            <li>O conteúdo é: {conteudo}</li>
            <li>Status: {status}</li>
            <li>Bloco: {bloco}</li>
          </ul>
        ))
      }</main>
    );
  }
}