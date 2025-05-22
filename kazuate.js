// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log ('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;


// ボタンを押したら hantei() を呼び出すイベント処理をする
   let a=document.querySelector('button#calc');
   a.addEventListener('click',hantei);  

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
 
  kaisu++;

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="seisu"]');
  yoso.getAttribute('name');
  seisu=yoso.value;
  let n=Number(seisu);

  k=document.querySelector('span#kaisu');
  
 
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
   
  
  let p=document.querySelector('span#answer'); 
 let m=document.querySelector('p#kaisu');
   m.textContent= kaisu+'回目の予想：'+n;
  
    if(n===kotae){
        if(kaisu<=4){
      p.textContent= ('正解です、おめでとう！');
      k=k+4;
        }else {
            p.textContent= ('答えは'+k+'でした．すでにゲームは終わっています');
           
        }
      
    }else if(n<kotae && kaisu<=3){
      p.textContent= ('まちがい、答えはもっと大きいですよ');

     
    }else if(n>kotae && kaisu<=3){
      p.textContent= ('まちがい、答えはもっと小さいですよ');
      
    }else if(kaisu>3){
      p.textContent= ('答え'+kotae+'はでした.ゲームはすでに終わっています');
      
    }

  
}
