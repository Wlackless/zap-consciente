export type CardData = {
  id: number;
  text: string;
  type: 'cilada' | 'sustentavel';
  feedback: string;
};

export const cardsData: CardData[] = [
  {
    id: 1,
    text: "🚨 URGENTE: Seu celular está gastando muita energia! Baixe este aplicativo agora para esfriar a bateria!",
    type: "cilada",
    feedback: "Aplicativos não esfriam bateria. Geralmente são vírus. Para poupar energia, reduza o brilho e feche apps em segundo plano."
  },
  {
    id: 2,
    text: "Receita do dia: Não jogue os talos do brócolis fora! Eles rendem uma ótima sopa.",
    type: "sustentavel",
    feedback: "O reaproveitamento integral dos alimentos reduz drasticamente o desperdício mundial (Meta 12.3)."
  },
  {
    id: 3,
    text: "Promoção relâmpago! Troque seu notebook que ainda funciona por este modelo mais novo! Clique aqui e pague com PIX.",
    type: "cilada",
    feedback: "Além de possível golpe financeiro, trocar eletrônicos sem necessidade gera Lixo Eletrônico (e-waste)."
  },
  {
    id: 4,
    text: "Lembrete: Ao sair, desligue o monitor e tire os aparelhos da tomada. O modo 'stand-by' também consome energia.",
    type: "sustentavel",
    feedback: "Desligar equipamentos inativos é uma das formas mais eficientes de economizar energia (Meta 12.2)."
  },
  {
    id: 5,
    text: "Sorteio de iPhone 15 Pro Max! Marque 5 amigos nos comentários e acesse o link para garantir sua participação.",
    type: "cilada",
    feedback: "Golpe de Phishing clássico. Eles usam o desejo de consumo para roubar seus dados pessoais."
  },
  {
    id: 6,
    text: "Seu equipamento parou? Tente consertar ou buscar assistência técnica antes de jogar no lixo comum.",
    type: "sustentavel",
    feedback: "Prolongar a vida útil dos eletrônicos e descartar corretamente o e-waste protege o solo e a água."
  },
  {
    id: 7,
    text: "Compre nosso filtro mágico de tomada! Ele reduz o consumo de todos os seus eletrodomésticos instantaneamente.",
    type: "cilada",
    feedback: "Equipamentos milagrosos que reduzem consumo de energia na tomada não existem, é fraude."
  },
  {
    id: 8,
    text: "Prefira ler documentos na tela ou usar um segundo monitor em vez de imprimir tudo em papel.",
    type: "sustentavel",
    feedback: "A digitalização de processos economiza papel e reduz o desmatamento, promovendo o consumo consciente."
  }
];