document.addEventListener('DOMContentLoaded', function () {
    // Lista de carros com detalhes
    const carros = [
        { modelo: 'Fusca', marca: 'Volkswagen', ano: 2020, preco: 25000, cambio: 'Manual', img: 'carro1.jpg', descricao: 'Fusca 2020, excelente estado.' },
        { modelo: 'Gol', marca: 'Volkswagen', ano: 2021, preco: 30000, cambio: 'Automático', img: 'carro2.jpg', descricao: 'Gol 2021, baixo km.' },
        { modelo: 'Civic', marca: 'Honda', ano: 2020, preco: 50000, cambio: 'Automático', img: 'carro3.jpg', descricao: 'Civic 2020, carro de luxo.' },
        { modelo: 'Fusca', marca: 'Volkswagen', ano: 2021, preco: 28000, cambio: 'Manual', img: 'carro4.jpg', descricao: 'Fusca 2021, novinho.' },
        { modelo: 'Astra', marca: 'Chevrolet', ano: 2019, preco: 22000, cambio: 'Manual', img: 'carro5.jpg', descricao: 'Astra 2019, completo.' },
        { modelo: 'Focus', marca: 'Ford', ano: 2020, preco: 45000, cambio: 'Automático', img: 'carro6.jpg', descricao: 'Focus 2020, muito conservado.' },
        { modelo: 'Onix', marca: 'Chevrolet', ano: 2021, preco: 35000, cambio: 'Automático', img: 'carro7.jpg', descricao: 'Onix 2021, econômico.' },
        { modelo: 'Corolla', marca: 'Toyota', ano: 2020, preco: 60000, cambio: 'Automático', img: 'carro8.jpg', descricao: 'Corolla 2020, completo e confortável.' },
        { modelo: 'Fiat Uno', marca: 'Fiat', ano: 2021, preco: 22000, cambio: 'Manual', img: 'carro9.jpg', descricao: 'Fiat Uno 2021, compacto e econômico.' },
        { modelo: 'Jeep Compass', marca: 'Jeep', ano: 2020, preco: 100000, cambio: 'Automático', img: 'carro10.jpg', descricao: 'Jeep Compass 2020, SUV de luxo.' }
    ];

    let indexCarroAtual = 0; // Índice do carro atualmente exibido (começando do primeiro)

    // Função para renderizar os carros em destaque
    function renderCarros(carroList, index) {
        const carrosDestaque = document.querySelector('.carros-destaque');
        carrosDestaque.innerHTML = '';  // Limpa a lista de carros antes de renderizar novamente

        // Exibe 8 carros por vez (ou menos caso sejam os últimos carros disponíveis)
        for (let i = index; i < index + 8 && i < carroList.length; i++) {
            const carro = carroList[i];
            const divCarro = document.createElement('div');
            divCarro.classList.add('carro');
            divCarro.innerHTML = `
                <img src="${carro.img}" alt="${carro.modelo}">
                <h4>${carro.modelo} ${carro.ano}</h4>
            `;
            divCarro.addEventListener('click', () => abrirPopup(carro));  // Ao clicar no carro, abre o pop-up de detalhes
            carrosDestaque.appendChild(divCarro);
        }

        // Atualiza a visibilidade do botão "Anterior"
        document.getElementById('botao-anterior').style.display = (index > 0) ? 'inline-block' : 'none';
    }

    // Função para abrir o pop-up de detalhes ao clicar no carro
    function abrirPopup(carro) {
        const popup = document.getElementById('popup-detalhes');
        const detalhes = document.getElementById('detalhes-carro');
        const imagemCarro = document.getElementById('imagem-carro');

        // Preenche o conteúdo do pop-up com as informações do carro
        detalhes.innerHTML = `
            <h3>${carro.modelo} ${carro.ano}</h3>
            <p><strong>Marca:</strong> ${carro.marca}</p>
            <p><strong>Preço:</strong> R$ ${carro.preco}</p>
            <p><strong>Câmbio:</strong> ${carro.cambio}</p>
            <p><strong>Descrição:</strong> ${carro.descricao}</p>
        `;
        
        imagemCarro.src = carro.img;

        popup.style.display = 'flex'; // Exibe o pop-up
    }

    // Função para fechar o pop-up
    function fecharPopup() {
        const popup = document.getElementById('popup-detalhes');
        popup.style.display = 'none'; // Esconde o pop-up
    }

    // Botão para fechar o pop-up
    document.getElementById('fechar-popup').addEventListener('click', fecharPopup);

    // Função para navegar para o próximo conjunto de carros
    document.getElementById('botao-proximo').addEventListener('click', () => {
        indexCarroAtual = Math.min(indexCarroAtual + 8, carros.length - 8); // Limita o índice máximo
        renderCarros(carros, indexCarroAtual);
    });

    // Função para navegar para o conjunto anterior de carros
    document.getElementById('botao-anterior').addEventListener('click', () => {
        indexCarroAtual = Math.max(indexCarroAtual - 8, 0);  // Limita o índice mínimo a 0
        renderCarros(carros, indexCarroAtual);
    });

    // Inicializa a página com o primeiro conjunto de carros
    renderCarros(carros, indexCarroAtual);
});
