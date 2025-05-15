function greeting(){
let i =document.querySelector('input[name="left"]');
i.getAttribute('name');
left=i.value;
let n=Number(left);

let j =document.querySelector('input[name="right"]');
j.getAttribute('name');
right=j.value;
let m=Number(right);

let goukei=n + m;


p=document.querySelector('p#answer');
     p.textContent= goukei ;
}

b=document.querySelector('button#calc'); 
b.addEventListener('click',greeting); 