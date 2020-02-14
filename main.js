$(document).ready(() => {
  const imgUrl = [
    "../imgs/backgroundAviation/crj200.jpg",
    "../imgs/backgroundAviation/night_cockpit.jpg"
  ];
  let index = 0;

  setInterval(() => {
    $('body').css('background-image', 'url(' + imgUrl[index] +')');
    if (index < ((imgUrl.length) - 1)){
      index++;
    } else {
      index = 0;
    }
  },5000)
  
});
