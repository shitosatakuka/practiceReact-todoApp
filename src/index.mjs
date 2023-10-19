import "./styles.css";

// 追加ボタンを押されたときの動作
const onClickAdd = () => {
  //   alert();
  //  インプットされた内容を取得。idを取得後入力された内容（value）を取得する
  const inputText = document.getElementById("add-text").value;
  //   追加ボタンが押されたら入力内容を初期化する
  document.getElementById("add-text").value = "";
  // alert(inputText);

  // liタグの生成
  const li = document.createElement("li");
  li.className = "incomplete-item";
  // console.log(li);

  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // pタグの生成
  const p = document.createElement("p");
  p.innerText = inputText;
  // console.log(p);

  // 入れ子にする
  li.appendChild(div).appendChild(p);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
// idを取得して、クリックのイベントが発生したらonClickAddの関数が実行される。
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
