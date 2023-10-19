import "./styles.css";

// 追加ボタンを押されたときの動作
const onClickAdd = () => {
  //   alert();
  //  インプットされた内容を取得。idを取得後入力された内容（value）を取得する
  const inputText = document.getElementById("add-text").value;
  //   追加ボタンが押されたら入力内容を初期化する
  document.getElementById("add-text").value = "";
  alert(inputText);
};
// idを取得して、クリックのイベントが発生したらonClickAddの関数が実行される。
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
