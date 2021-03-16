$(function () {
  let box = $("#box");
  let add = $("#add");
  let todolist = $("#todolist");

  add.click(function () {
    console.log("Button clicked");
    let newtodo = box.val();

    $.post("/todos/", { task: newtodo }, function (data) {
      todolist.empty();
      for (todo of data) {
        todolist.append("<li>" + todo.task + "</li>");
      }
    });
  });
});
