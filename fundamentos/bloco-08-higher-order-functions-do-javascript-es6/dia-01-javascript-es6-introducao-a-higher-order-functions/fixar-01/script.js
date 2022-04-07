const wakingUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const goingToSleep = () => 'Partiu dormir!!';

function doingThings(callback) {
  console.log(callback());
}

doingThings(wakingUp);
doingThings(breakfast);
doingThings(goingToSleep);
