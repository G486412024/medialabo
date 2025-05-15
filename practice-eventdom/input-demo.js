
function greeting(){
    let i = document.querySelector('input[name="shimei"]');
    shimei=i.value;
    i.getAttribute('name');
    let aisatu='こんにちわ、'+ shimei +'さん';
    p=document.querySelector('p#message');
     p.textContent= aisatu ;
  }
  b=document.querySelector('button#print');
  b.addEventListener('click',greeting); 