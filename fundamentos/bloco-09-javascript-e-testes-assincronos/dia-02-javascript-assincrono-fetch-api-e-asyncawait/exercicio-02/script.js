const listContainer = document.getElementById('list');

async function createList() {
  const data = await fetchCoinApi();
  const dataFiltered = data.filter(({ rank }) => rank <= 10 );
  dataFiltered.forEach(({symbol, name, priceUsd }) => {
    const element = document.createElement('li');
    const priceFormatted = Number(priceUsd).toLocaleString('pt-br',{style: 'currency', currency: 'USD'});
    const elementContent = `${name}(${symbol}): ${priceFormatted}`;
    element.innerText = elementContent;
    listContainer.appendChild(element);
  });
}

window.onload = createList();