var listaFilmes = [
    "https://leiturafilmica.com.br/wp-content/uploads/2020/10/meu-tio-da-america-poster.jpg",
    'https://www.circuitospcine.com.br/site/wp-content/uploads/2019/06/stalker.jpg',
    'https://assets.mubicdn.net/images/notebook/post_images/34295/images-w1400.jpeg?1635384771',
   
  ];
  
  var nomesFilmes = [
    "Meu Tio da América",
    "Stalker",
    "Playtime",
    
  ];
  
  var filmesAdicionados = {};
  
  for (var i = 0; i < listaFilmes.length; i++) {
    if (!filmesAdicionados[nomesFilmes[i]]) {
      document.write('<div><img src=' + listaFilmes[i] + '><p>' + nomesFilmes[i] + '</p></div>');
  
      filmesAdicionados[nomesFilmes[i]] = true;
    }
  }
  