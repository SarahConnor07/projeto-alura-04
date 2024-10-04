const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais-marinha.json'; // URL alterada para refletir dados de biologia marinha

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    const especiesMarinhas = dados.total_especies_marinha;
    const especiesAmeaçadas = dados.total_especies_ameacadas;
    const porcentagemAmeaçada = ((especiesAmeaçadas / especiesMarinhas) * 100).toFixed(2);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que existem aproximadamente <span>${especiesMarinhas}</span> espécies marinhas, e que cerca de <span>${especiesAmeaçadas}</span> estão ameaçadas de extinção?<br>Isso significa que aproximadamente <span>${porcentagemAmeaçada}%</span> das espécies marinhas estão em risco.`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();
