const listContainer = document.getElementById('list');

async function createList() {
  const data = await fetchCoinApi();
  const lastPrice = await fetchConversion();
  const dataFiltered = data.filter(({ rank }) => rank <= 10 );

  dataFiltered.forEach(({symbol, name }) => {
    const element = document.createElement('li');
    const formattedPriced = (1/lastPrice[symbol.toLowerCase()]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const elementContent = `${name}(${symbol}): ${formattedPriced}`;
    element.innerText = elementContent;
    listContainer.appendChild(element);
  });
}

window.onload = createList();