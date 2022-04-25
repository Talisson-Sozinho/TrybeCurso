async function fetchCoinApi() {
  const data = await fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(({data}) => data)
    .catch(err => err);
  return data;
}

async function fetchConversion() {
  const data = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/brl.json`)
    .then(response => response.json())
    .then( data => data )
    .catch(err => err);
    return data.brl;
}