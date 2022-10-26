import axios from "axios";
import React, { Component } from "react";
import "./App.css";


class App extends Component {
  state = {
    user: "",
    repos: [],
    error: "",
    loading: false
  };

  // 1- consumindo de uma API as 32 seleções do mundial de futebol
  componentDidMount() {
    axios //axios é uma biblioteca que faz requisições http
      .get("https://estagio.geopostenergy.com/WorldCup/GetAllTeams")
      .then(response => {
        console.log(response.data);
        this.setState({ repos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // 2- separar as seleções de forma randômica em 8 grupos (do grupo A ao H) de 4 seleões cada, exibindo o nome das seleções e o nome do grupo
  randomTeams = () => {
    const { repos } = this.state;
    const teams = repos;
    const groupA = [];
    const groupB = [];
    const groupC = [];

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupA.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupB.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupC.push(teams[random]);
      teams.splice(random, 1);
    }

    console.log(groupA);
    console.log(groupB);
    console.log(groupC);
    console.log(teams);

    this.setState({ repos: groupA });
    this.setState({ repos: groupB });
    this.setState({ repos: groupC });
    this.setState({ repos: teams });

    return {
      groupA,
      groupB,
      groupC,
      teams
    };

  };

  // 3- Cada grupo terá 3 rodadas de partidas. Em cada rodada, dois jogos são realizados, fazendo com que ao final das 3 rodadas, todas as equipes dp grupo tenham se enfrentado.
  rodadas = () => {
    const { repos } = this.state;
    const teams = repos;
    const groupA = [];
    const groupB = [];
    const groupC = [];

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupA.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupB.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupA.push(teams[random]);
      teams.splice(random, 1);

    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupB.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupA.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupB.push(teams[random]);
      teams.splice(random, 1);
    }

    console.log(groupA);
    console.log(groupB);
    console.log(groupC);
    console.log(teams);

    this.setState({ repos: groupA });
    this.setState({ repos: groupB });
    this.setState({ repos: groupC });
    this.setState({ repos: teams });

    // Exiba toas as partidas e os resultados no front-end

    return {
      groupA,
      groupB,
      groupC,
      teams
    };

  };

  grupos = () => {
    const { repos } = this.state;
    const teams = repos;
    const groupA = [];
    const groupB = [];
    const groupC = [];

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupA.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupB.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupC.push(teams[random]);
      teams.splice(random, 1);
    }

    console.log(groupA);
    console.log(groupB);
    console.log(groupC);
    console.log(teams);

    this.setState({ repos: groupA });
    this.setState({ repos: groupB });
    this.setState({ repos: groupC });
    this.setState({ repos: teams });

  };

  // 4- Contabilizar a pontuação de cada equipe: Vitória - 3 pontos, Empate - 1 ponto, Derrota - 0 pontos
  pontos = () => {
    const { repos } = this.state;
    const teams = repos;
    const groupA = [];
    const groupB = [];
    const groupC = [];

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupA.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupB.push(teams[random]);
      teams.splice(random, 1);
    }

    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * teams.length);
      groupC.push(teams[random]);
      teams.splice(random, 1);

    }

    console.log(groupA);
    console.log(groupB);
    console.log(groupC);
    console.log(teams);

    this.setState({ repos: groupA });
    this.setState({ repos: groupB });
    this.setState({ repos: groupC });
    this.setState({ repos: teams });

    if (groupA[0].Score > groupA[1].Score) {
      groupA[0].Score = 3;
      groupA[1].Score = 0;
    }

    if (groupA[0].Score < groupA[1].Score) {
      groupA[0].Score = 0;
      groupA[1].Score = 3;
    }

    if (groupA[0].Score === groupA[1].Score) {
      groupA[0].Score = 1;
      groupA[1].Score = 1;
    }

    if (groupA[2].Score > groupA[3].Score) {
      groupA[2].Score = 3;
      groupA[3].Score = 0;
    }

    if (groupA[2].Score < groupA[3].Score) {
      groupA[2].Score = 0;
      groupA[3].Score = 3;
    }

    if (groupA[2].Score === groupA[3].Score) {
      groupA[2].Score = 1;
      groupA[3].Score = 1;
    }

    if (groupB[0].Score > groupB[1].Score) {
      groupB[0].Score = 3;
      groupB[1].Score = 0;

    }

    if (groupB[0].Score < groupB[1].Score) {
      groupB[0].Score = 0;
      groupB[1].Score = 3;
    }

    if (groupB[0].Score === groupB[1].Score) {
      groupB[0].Score = 1;
      groupB[1].Score = 1;
    }

    if (groupB[2].Score > groupB[3].Score) {
      groupB[2].Score = 3;
      groupB[3].Score = 0;
    }

    if (groupB[2].Score < groupB[3].Score) {
      groupB[2].Score = 0;
      groupB[3].Score = 3;
    }

    if (groupB[2].Score === groupB[3].Score) {
      groupB[2].Score = 1;
      groupB[3].Score = 1;
    }

    if (groupC[0].Score > groupC[1].Score) {
      groupC[0].Score = 3;
      groupC[1].Score = 0;
    }

    if (groupC[0].Score < groupC[1].Score) {
      groupC[0].Score = 0;
      groupC[1].Score = 3;
    }

    if (groupC[0].Score === groupC[1].Score) {
      groupC[0].Score = 1;
      groupC[1].Score = 1;
    }

    if (groupC[2].Score > groupC[3].Score) {
      groupC[2].Score = 3;
      groupC[3].Score = 0;

    }

    if (groupC[2].Score < groupC[3].Score) {
      groupC[2].Score = 0;
      groupC[3].Score = 3;
    }

    if (groupC[2].Score === groupC[3].Score) {
      groupC[2].Score = 1;
      groupC[3].Score = 1;
    }

    console.log(groupA);
    console.log(groupB);
    console.log(groupC);
    console.log(teams);

    this.setState({ repos: groupA });
    this.setState({ repos: groupB });
    this.setState({ repos: groupC });
    this.setState({ repos: teams });

    return {
      groupA,
      groupB,
      groupC,
      teams
    }

  };

  // 4- Cada jogo terá um vencedor e um perdedor. O vencedor de cada jogo ganha 3 pontos e o perdedor 0 pontos. Em caso de empate, os dois times ganham 1 ponto cada
  pontos = () => {
    const { rodadas } = this.state;

    const pontos = [];

    for (let i = 0; i < 8; i++) {
      pontos.push([]);
    }

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 3; j++) {
        const time1 = rodadas[j][i][0];
        const time2 = rodadas[j][i][1];
        const gols1 = Math.floor(Math.random() * 5);
        const gols2 = Math.floor(Math.random() * 5);

        if (gols1 > gols2) {
          pontos[i].push([time1, 3]);
          pontos[i].push([time2, 0]);
        } else if (gols1 < gols2) {
          pontos[i].push([time1, 0]);
          pontos[i].push([time2, 3]);
        } else {
          pontos[i].push([time1, 1]);
          pontos[i].push([time2, 1]);
        }
      }
    }

    console.log(pontos);

    this.setState({ pontos });

    return pontos;

  }

  // 5- Os dois primeiros de cada grupo se classificam para as oitavas de final
  oitavas = () => {
    const { pontuacao } = this.state;
    const oitavas = [];

    if (pontuacao[0][0] > pontuacao[0][1]) {
      oitavas.push(pontuacao[0][0]);
    }

    if (pontuacao[0][0] < pontuacao[0][1]) {
      oitavas.push(pontuacao[0][1]);
    }

    if (pontuacao[1][0] > pontuacao[1][1]) {
      oitavas.push(pontuacao[1][0]);
    }

    if (pontuacao[1][0] < pontuacao[1][1]) {
      oitavas.push(pontuacao[1][1]);
    }

    if (pontuacao[2][0] > pontuacao[2][1]) {
      oitavas.push(pontuacao[2][0]);
    }

    if (pontuacao[2][0] < pontuacao[2][1]) {
      oitavas.push(pontuacao[2][1]);
    }

    if (pontuacao[3][0] > pontuacao[3][1]) {
      oitavas.push(pontuacao[3][0]);
    }

    if (pontuacao[3][0] < pontuacao[3][1]) {
      oitavas.push(pontuacao[3][1]);
    }

    if (pontuacao[4][0] > pontuacao[4][1]) {
      oitavas.push(pontuacao[4][0]);
    }

    if (pontuacao[4][0] < pontuacao[4][1]) {
      oitavas.push(pontuacao[4][1]);
    }

    if (pontuacao[5][0] > pontuacao[5][1]) {
      oitavas.push(pontuacao[5][0]);
    }

    if (pontuacao[5][0] < pontuacao[5][1]) {
      oitavas.push(pontuacao[5][1]);
    }

    if (pontuacao[6][0] > pontuacao[6][1]) {
      oitavas.push(pontuacao[6][0]);
    }

    if (pontuacao[6][0] < pontuacao[6][1]) {
      oitavas.push(pontuacao[6][1]);
    }

    if (pontuacao[7][0] > pontuacao[7][1]) {
      oitavas.push(pontuacao[7][0]);
    }

    if (pontuacao[7][0] < pontuacao[7][1]) {
      oitavas.push(pontuacao[7][1]);
    }

    console.log(oitavas);

    this.setState({ oitavas });

    return oitavas;

  }

  // 6- A partir das oitavas de final, você deverá defenir as pasrtidas e simular os resultados das partidas até a final
  final = () => {
    const { oitavas } = this.state;
    const final = [];

    for (let i = 0; i < 4; i++) {
      final.push([]);
      for (let j = 0; j < 2; j++) {
        if (oitavas[i][0] > oitavas[i][1]) {
          final[i].push(oitavas[i][0]);
        }
        if (oitavas[i][0] < oitavas[i][1]) {
          final[i].push(oitavas[i][1]);
        }
      }
    }

    console.log(final);

    this.setState({ final });

    return final;

  }


  // como ficaria o postFinal com async await
  postFinal = async () => {
    const { final } = this.state;
    const url = "https://estagio.geopostenergy.com/WorldCup/InsertFinalResult";
    const data = {
      final: final,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }

    return data;
  };
  
  // 7- Enviar o resultado da final para nossa API para registrar o grande Campeão
  render() {
    // const { randomTeams, rodadas, pontuacao, oitavas, final } = this.state;

    return (
      <div className="App">
        <h1>Campeonato de Futebol</h1>
        <button onClick={this.randomTeams}>Grupos</button>
        <button onClick={this.rodadas}>Rodadas</button>
        <button onClick={this.pontuacao}>Pontuação</button>
        <button onClick={this.oitavas}>Oitavas</button>
        <button onClick={this.final}>Final</button>
      </div>
    );
  }
}

export default App;
