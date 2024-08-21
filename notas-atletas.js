let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [] //10, 10, 10, 9, 9.5
    }
];

//teste
removeMaiorEMenorNota(atletas)

function removeMaiorEMenorNota(atletas) {
    try {
        for (let index = 0; index < atletas.length; index++) {
            if (atletas[index].notas === null || atletas[index].notas.length === 0) {
                atletas[index].notas = "O atleta não possui nenhuma nota"
            }
            else {
                let notasOrdenadas = atletas[index].notas.sort(function (a, b) {
                    return a - b;
                })
                notasOrdenadas.shift();
                notasOrdenadas.pop();
            }
        }
    } catch (error) {
        console.log("Não foi possível fazer a ordenação das notas", error)
    }

}

//teste
calculaMediaAtleta(atletas)

function calculaMediaAtleta(atletas) {
    try {
        return atletas.map(atleta => {
            if (atleta.notas === "O atleta não possui nenhuma nota") {
                atleta.media = "O atleta não possui média por não possuir nota"
            } else {
                const somaNotas = atleta.notas.reduce((acumulador, nota) => acumulador + nota, 0);
                const media = somaNotas / atleta.notas.length;
                const mediaFormatada = media.toFixed(2)
                atleta.media = mediaFormatada
            }
            return atleta
        });

    } catch (error) {
        console.log("Não foi possível calcular a média para o atleta.", error)
    }

}

//teste
apresentaNotaEMedia(atletas);

function apresentaNotaEMedia(atletas) {
    try {
        for (let index = 0; index < atletas.length; index++) {
            console.log(`Atleta: ${atletas[index].nome}`)
            console.log(`Notas obtidas: ${atletas[index].notas}` )
            console.log(`Média obtida: ${atletas[index].media}`)
            console.log(`-`)
        }
    } catch (error) {
        console.log("Não foi possível apresentar os dados do usuário")
    }
}
