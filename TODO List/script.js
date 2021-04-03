let listTasks = $("#listTasks");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnSort = $("#btnSort");
let btnCleanup = $("#btnCleanup");
let inpNewTask = $("#inpNewTask");

function toggleResetbtn() {
  btnReset.prop("disabled", inpNewTask.val() == "");
  btnAdd.prop("disabled", inpNewTask.val() == "");
  btnSort.prop("disabled", $("#listTasks .done").length == 0);
  btnCleanup.prop("disabled", $("#listTasks .done").length == 0);
}

function addItem() {
  let listItem = $("<li>", {
    class: "list-group-item",
    text: inpNewTask.val(),
  });
  listItem.click(() => {
    $(listItem).toggleClass("done");
    toggleResetbtn();
  });
  listTasks.append(listItem);
  inpNewTask.val("");
  toggleResetbtn();
}

function clearDone() {
  $("#listTasks .done").remove();
  toggleResetbtn();
}

function sort() {
  $("#listTasks .done").appendTo(listTasks);
}

inpNewTask.keypress((e) => {
  if (e.which == 13) {
    addItem();
  }
});

inpNewTask.on("input", toggleResetbtn);

btnAdd.click(addItem);

btnCleanup.click(clearDone);

btnSort.click(sort);

btnReset.click(() => {
  inpNewTask.val("");
  toggleResetbtn();
});
