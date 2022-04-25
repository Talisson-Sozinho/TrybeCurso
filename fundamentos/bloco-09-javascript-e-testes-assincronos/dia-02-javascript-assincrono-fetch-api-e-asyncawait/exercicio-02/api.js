async function fetchCoinApi() {
  const data = await fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(({data}) => data)
    .catch(err => err);
    console.log(data);
  return data;
}
