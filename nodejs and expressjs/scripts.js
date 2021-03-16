window.onload = function () {
  let num = document.getElementById("count");
  let print = document.getElementById("print");
  let list = document.getElementById("list");

  print.onclick = function () {
    let n = parseInt(num.value);
    let start = new Date().getTime();
    list.innerHTML = "";
    for (let i = 1; i <= n; i++) {
      list.innerHTML += "<li>" + i + "</li>";
    }
    console.log(new Date().getTime() - start);
  };
};
