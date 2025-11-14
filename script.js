const gameData = {
    '0': {
        text: 'Você chega na mansão de Lady Eleanor para investigar o roubo do Manuscrito de Blackwood. A polícia já identificou três suspeitos principais e precisa da sua orientação.',
        image: '', // Lembre-se de criar esta imagem!
        alt: 'Exterior de uma mansão luxuosa e antiga.',
        options: [
            { text: 'Interrogar o Mordomo, Robert (Suspeito por acesso fácil)', nextId: '1' },
            { text: 'Investigar o sobrinho, Arthur (Suspeito por dívidas e herança)', nextId: '2' }
        ]
    },
    '1': {
        text: 'O Mordomo, Robert, está muito nervoso, mas nega o envolvimento. Ele menciona que viu uma sombra estranha perto do escritório **após a meia-noite**, mas não chamou a polícia por medo.',
        image: null,
        options: [
            { text: 'Pressionar Robert sobre a sombra (Risco de mentira)', nextId: '3' },
            { text: 'Deixar Robert quieto e ir para a cena do crime (Escritório)', nextId: '4' }
        ]
    },
    '2': {
        text: 'O Sobrinho, Arthur, está sendo arrogante e evasivo. Ele alega ter estado em um clube no momento do roubo. Você decide checar o álibi dele.',
        image: null,
        options: [
            { text: 'Ligar para o Clube para confirmar o álibi', nextId: '5' },
            { text: 'Revistar o quarto de Arthur (Sem mandado)', nextId: '6' }
        ]
    },
    '3': {
        text: 'Ao pressionar Robert, ele confessa ter visto a viúva, Lady Eleanor, na cena. Ele acredita que ela simulou o roubo. Isso muda a investigação!',
        image: null,
        options: [
            { text: 'Confrontar Lady Eleanor com a informação do Mordomo', nextId: '7' }
        ]
    },
    '4': {
        text: 'No escritório, você nota que a janela não foi forçada. O roubo foi interno. Você encontra uma pequena **chave prateada** debaixo do tapete.',
        image: 'img/cenario-escritorio.png',
        alt: 'Escritório com janela fechada e tapete levantado.',
        options: [
            { text: 'Investigar onde a chave prateada se encaixa', nextId: '8' }
        ]
    },
    '5': {
        text: 'O Clube confirma que Arthur esteve lá, mas ele saiu por 45 minutos. Ele tinha tempo suficiente para voltar à mansão. Você precisa de provas concretas.',
        image: null,
        options: [
            { text: 'Voltar e revistar o quarto de Arthur', nextId: '6' },
            { text: 'Seguir a pista do Mordomo (Se já interrogado)', nextId: '1' }
        ]
    },
    '6': {
        text: 'Você revira o quarto de Arthur e encontra um **bilhete de penhora** assinado pelo mordomo, Robert. Robert deve dinheiro a Arthur. É um complô?',
        image: null,
        options: [
            { text: 'Confrontar Arthur e Robert juntos', nextId: '9' }
        ]
    },
    '7': {
        text: 'Você confronta Lady Eleanor. Ela fica furiosa e nega. No entanto, sua mão treme e você percebe que ela está usando uma joia roubada do cofre. Ela está escondendo algo.',
        image: null,
        options: [
            { text: 'Acusá-la de simular o roubo para vender a joia (Foco na joia)', nextId: '10' },
            { text: 'Acusá-la de ter dado o manuscrito a um terceiro (Foco no manuscrito)', nextId: '11' }
        ]
    },
    '8': {
        text: 'A chave prateada abre a caixa de correio da casa de hóspedes. Dentro, há um cartão postal sem data, de uma editora, falando de um **"último pagamento"** para Arthur.',
        image: null,
        options: [
            { text: 'Confrontar Arthur sobre a editora e o pagamento', nextId: '9' }
        ]
    },
    '9': {
        text: 'Confronto final: Robert e Arthur confessam que fizeram um acordo. Robert roubaria o manuscrito, e Arthur o venderia para pagar a dívida. **Caso Resolvido.** O manuscrito é recuperado de um esconderijo.',
        image: 'img/cenario-solucao-mordomo-sobrinho.png',
        alt: 'O mordomo e o sobrinho sendo levados pela polícia.',
        options: [] // Fim de Jogo / Solução
    },
    '10': {
        text: 'Você a acusa da joia. Ela confessa ter simulado o roubo do manuscrito para encobrir o roubo da joia, mas jura que o manuscrito ainda está na mansão. Você seguiu uma pista falsa! **Fim de Jogo Incompleto.**',
        image: 'img/cenario-pista-falsa.png',
        alt: 'Viúva confessando um roubo menor.',
        options: [] // Fim de Jogo (O manuscrito ainda está perdido)
    },
    '11': {
        text: 'Você acusa Lady Eleanor de ter dado o manuscrito. Ela revela que deu o manuscrito a um jornal para que as memórias secretas de seu marido fossem publicadas e vingasse anos de abusos. **Caso Resolvido (Motivo Emocional).** O manuscrito será publicado.',
        image: 'img/cenario-solucao-viuva.png',
        alt: 'Viúva com um sorriso de satisfação.',
        options: [] // Fim de Jogo / Solução
    }
};
