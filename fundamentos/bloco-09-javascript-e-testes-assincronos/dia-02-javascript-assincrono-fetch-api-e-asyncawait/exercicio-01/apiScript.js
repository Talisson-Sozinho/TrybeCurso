const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const data = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    }
  }).then((response) => response.json())
  .then( ({ joke }) => joke)
  .catch((error) => console.log(`Algo deu errado :( \n${error}`));
  return data;
};

async function showJoke() {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerText = await fetchJoke();
}

showJoke();

const button = document.getElementById('change-joke');

button.addEventListener('click', showJoke);
