// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log ('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = document.querySelector('span#kaisu');
let k=document.querySelector('span#kaisu');

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="seisu"]');
  yoso.getAttribute('name');
  seisu=yoso.value;
  let n=Number(seisu);

  

  
 
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
   let m=document.querySelector('span#answer');
   p.textContent= k+'回目の予想：'+n;
  
 for(let i=0;i<1;i++){
   
    if(n===kotae){
        if(k<=4){
      p.textContent= '正解です、おめでとう！';
      k=k+4;
        }else {
            p.textContent= '答えは'+k+'でした．すでにゲームは終わっています';
            k++;
        }
      
    }else if(n<kotae && k<=3){
      p.textContent= 'まちがい、答えはもっと大きいですよ';

      k++;
    }else if(n>kotae && k<=3){
      p.textContent= 'まちがい、答えはもっと小さいですよ';
      k++;
    }else if(k>3){
      p.textContent= '答え'+kotae+'はでした.ゲームはすでに終わっています';
      k++;
    }
  }
   b=document.querySelector('button#answer');
    b.addEventListener('click',hantei()); 
}
