var index = 1;
changeImage = function()
{
  var imgs = ["/img/1.jpg","/img/2.jpg","/img/3.jpg"];
  document.getElementById('img').src = imgs[index];
  index++;
  if(index == 3)
  {
    index = 0;
  }
}
setInterval(changeImage,1000);

