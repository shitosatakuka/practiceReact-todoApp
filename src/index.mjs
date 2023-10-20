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
    // alert("完了されました");
    // 完了ボタンが押されたら<li class="incomplete-item">のタグを削除
    deleteFromIncompleteList(btnComplete.closest("li"));
    // 下は関数化したので削除。↑は関数。
    // 完了ボタンが押されたら<li class="incomplete-item">のタグを削除
    // const deleteTaret = btnComplete.closest("li");
    // // console.log(deleteTaret);
    // document.getElementById("incomplete-list").removeChild(deleteTaret);

    // 完了リストに追加する要素を取得
    const addTarget = btnComplete.parentNode;
    // TODO内容テキストを取得
    const textMemo = addTarget.firstElementChild.innerText;
    console.log(textMemo);

    // div以下を初期化
    addTarget.textContent = null;
    // console.log(addTarget);

    // liタグの生成
    const li = document.createElement("li");
    li.className = "complete-item";
    // console.log(li);

    // pタグの生成
    const p = document.createElement("p");
    p.innerText = textMemo;
    console.log(p);
    // // divタグの中にtextMemoを追加

    // button(戻る)タグ生成
    const btnBack = document.createElement("button");
    btnBack.innerText = "戻す";

    // liタグの子要素に設定する。
    li.appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(btnBack);
    // console.log(li);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button(削除)タグ生成
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "削除";
  // 削除ボタンが押されたら
  btnDelete.addEventListener("click", () => {
    // alert("削除されました");
    // 削除ボタンが押されたら<li class="incomplete-item">のタグを削除
    deleteFromIncompleteList(btnDelete.closest("li"));
    // 下は関数化したので削除。↑は関数。
    // const deleteTaret = btnDelete.closest("li");
    // // console.log(deleteTaret);
    // document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  // 入れ子にする。親にappendChildする。同じ親なら同じ子になる。
  li.appendChild(div).appendChild(p);
  div.appendChild(btnComplete);
  div.appendChild(btnDelete);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
// idを取得して、クリックのイベントが発生したらonClickAddの関数が実行される。
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
