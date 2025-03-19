// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

    setTimeout(() => {
        // 非同期処理
        text.textContent    = "ボタンをクリックしました。";
      }, 2000);

});