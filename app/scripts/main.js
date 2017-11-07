const img = '<img src="/images/face.jpg" alt="face">';

function getFace() {
  for (let i = 0; i < 19; i++) { 
    $('.faces').append(img);
  }
}

setTimeout(function(){ 
  $('.background img').addClass('fadeInRight animated');
}, 2000);

getFace();


