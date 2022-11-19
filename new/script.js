function scrollCars(step)
{
  const carsSlider = document.getElementById('cars-place');
  // next
  if(step)
  {
     return carsSlider.innerHTML = `
      <img src="imgs/06.png" />
      <img src="imgs/07.png" />
      <img src="imgs/08.png" />
      <img src="imgs/09.png" />
      <img src="imgs/10.png" />
      `
  }

  // prev
  return carsSlider.innerHTML = `
      <img src="imgs/01.png" />
      <img src="imgs/02.png" />
      <img src="imgs/03.png" />
      <img src="imgs/04.png" />
      <img src="imgs/05.png" />
      `
}

function scrollDriver( src) 
{
  const driverImg = document.getElementById('driver-img');
  return driverImg.setAttribute('src',src)
}

function scrollCard(src)
{
  const cardImg = document.getElementById('card-img');
  return cardImg.setAttribute('src',src)
}

