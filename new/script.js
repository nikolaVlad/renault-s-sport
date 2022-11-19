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


function scrollItem(el , src)
{
  document.getElementById(el).setAttribute('src' , src)
}



function openFaq(index)
{
  const elements = document.getElementsByClassName('faq-questions')
  for(let i = 0; i< elements.length;i++)
  {
    elements[i].style.display = 'none'
  }
  elements.item(index).style.display = 'flex'
  
}