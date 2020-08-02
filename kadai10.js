const image01src = 'url("img/top1.jpg")';
const image02src = 'url("img/top2.jpg")';
const image03src = 'url("img/top3.jpg")';

function nextImage() {
  const header = document.getElementById('sec1');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
   
    header.style.backgroundImage = image02src;
  } else if (nowBg == image02src) {

    header.style.backgroundImage = image03src;
  } else {
   
    header.style.backgroundImage = image01src;
  }
}

function prevImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
  
    header.style.backgroundImage = image03src;
  } else if (nowBg == image02src) {

    header.style.backgroundImage = image01src;
  } else {
   
    header.style.backgroundImage = image02src;
  }
}


document.getElementById('sec1').style.backgroundImage = image01src;
document.getElementById('sc-to-left').addEventListener('click', prevImage);
document.getElementById('sc-to-right').addEventListener('click', nextImage);


setInterval(nextImage, 5000);

