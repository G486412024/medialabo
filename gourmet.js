
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {



  console.log(data.results.shop[0].access);
  console.log(data.results.shop[0].address);
  console.log(data.results.shop[0].band);
  console.log(data.results.shop[0].barrier_free);
  console.log(data.results.shop[0].budget);

  console.log(data.results.shop[0].budget.average);
  console.log(data.results.shop[0].budget.code);
  console.log(data.results.shop[0].budget.name);

  console.log(data.results.shop[1].access);
  console.log(data.results.shop[1].address);
  console.log(data.results.shop[1].band);
  console.log(data.results.shop[1].barrier_free);
  console.log(data.results.shop[1].budget);

  console.log(data.results.shop[1].budget.average);
  console.log(data.results.shop[1].budget.code);
  console.log(data.results.shop[1].budget.name);

}

b = document.querySelector('button#genre');
b.addEventListener('click', greeting);
function greeting() {
  let i = document.querySelector('input[name="ran"]');
  ran = i.value;
  i.getAttribute('name');
  console.log('検索キー:' + ran);
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let shops = data.results.shop;

  // ヒット件数の表示
  let kaitou = shops.length + '件がヒットしました';
  let p = document.querySelector('p#hit');
  p.textContent = kaitou;



  let v = document.createElement('span');
  let y = document.querySelector('p#hit');;
  y.insertAdjacentElement('beforeend', v);


  if (v != null) {
    v.remove();
  }



  let span = document.createElement('span');
  y.appendChild(span);

  let t = document.createElement('div');
  span.appendChild(t);

  let u = document.createElement('ul');
  t.appendChild(u);


  for (let i = 0; i < shops.length; i++) {
    let shop = shops[i];

    let l = document.createElement('p');
    l.textContent = '<検索結果' + (i + 1) + '件目>';
    u.appendChild(l);

    l = document.createElement('li');
    l.textContent = shop.access;
    u.appendChild(l);

    l = document.createElement('li');
    l.textContent = shop.address;
    u.appendChild(l);

    l = document.createElement('li');
    l.textContent = shop.band;
    u.appendChild(l);

    l = document.createElement('li');
    l.textContent = shop.barrier_free;
    u.appendChild(l);

    l = document.createElement('li');
    l.textContent = shop.budget.average;
    u.appendChild(l);

    l = document.createElement('li');
    l.textContent = shop.budget.code;
    u.appendChild(l);

    l = document.createElement('li');
    l.textContent = shop.budget.name;
    u.appendChild(l);
  }
}




// 課題6-1 のイベントハンドラ登録処理は以下に記述

let d = document.querySelector('button#genre');
d.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {


  let i = document.querySelector('input[name="ran"]');
  let kensaku = i.value;  // 入力値を取得
  let code;

  // 入力されたジャンル名をGコードに変換
  if (kensaku === '居酒屋') {
    code = 'G001';
  } else if (kensaku === 'ダイニングバー・バル') {
    code = 'G002';
  } else if (kensaku === '創作料理') {
    code = 'G003';
  } else if (kensaku === '和食') {
    code = 'G004';
  } else if (kensaku === '洋食') {
    code = 'G005';
  } else if (kensaku === 'イタリアン・フレンチ') {
    code = 'G006';
  } else if (kensaku === '中華') {
    code = 'G007';
  } else if (kensaku === '焼肉・ホルモン') {
    code = 'G008';
  } else if (kensaku === 'アジア・エスニック料理') {
    code = 'G009';
  } else if (kensaku === '各国料理') {
    code = 'G010';
  } else if (kensaku === 'カラオケ・パーティ') {
    code = 'G011';
  } else if (kensaku === 'バー・カクテル') {
    code = 'G012';
  } else if (kensaku === 'ラーメン') {
    code = 'G013';
  } else if (kensaku === 'カフェ・スイーツ') {
    code = 'G014';
  } else if (kensaku === 'その他グルメ') {
    code = 'G015';
  } else if (kensaku === 'お好み焼き・もんじゃ') {
    code = 'G016';
  } else if (kensaku === '韓国料理') {
    code = 'G017';
  } else {
    let p = document.querySelector('p#hit');
  p.textContent = '対応する結果が見つかりませんでした。';
  return;
  }


  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + code + '.json';

  // 通信開始
  axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

