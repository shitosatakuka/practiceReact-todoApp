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

  // button(完了)タグ生成
  const btnComplete = document.createElement("button");
  btnComplete.innerText = "完了";
  // 完了ボタンが押されたら
  btnComplete.addEventListener("click", () => {
    alert("完了されました");
  });
  // button(削除)タグ生成
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "削除";
  // 削除ボタンが押されたら
  btnDelete.addEventListener("click", () => {
    // alert("削除されました");
    // 削除ボタンが押されたら<li class="incomplete-item">のタグを削除
    const deleteTaret = btnDelete.closest("li");
    // console.log(deleteTaret);
    document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  // 入れ子にする。親にappendChildする。同じ親なら同じ子になる。
  li.appendChild(div).appendChild(p);
  div.appendChild(btnComplete);
  div.appendChild(btnDelete);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
// idを取得して、クリックのイベントが発生したらonClickAddの関数が実行される。
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
