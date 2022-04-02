const skills = ['html', 'css', 'js', 'git', 'github']

const changeX = (string) => {
  const phrase = `Tryber x aqui!`;
  const newPhrase = [];
  for (let word of phrase.split(' ')){
    word === 'x' ? newPhrase.push(string) : newPhrase.push(word);
  }
  return newPhrase.join(' ');
};

const createText = (string) => {
  const text = [string, 'Minhas habilidades são:'];

  for (let skill of skills.sort()) {
    text.push(`\n - ${skill};`);
  }
  
  text.push('#goTrybe');

  return text.join(' ');
}

console.log(createText(changeX('Talisson')));