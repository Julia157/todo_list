window.addEventListener("load", () => {
  //когда страница загрузит все, код внутри {} начнет работать и будет происходить взаимодействие с пользователем
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");
  //записываем элементы в новые переменные, которые будут содержать ссылки на эти элементы.
  //метод querySelector ищет эти элементы

  form.addEventListener("submit", (e) => {
    //код срабатывает после submit
    e.preventDefault();
    //убираем стандратное поведение браузера, так как сами пишем, что будет происходить

    const task = input.value;
    //то, что ввел пользователь сохраняется в новую переменную. Если ее не создать, придется каждый раз писать input.value
    //value содержит текущее значение, введенное пользователем в это поле. Он его возвращает
    if (!task) {
      alert("Please fill out the task");
      return;
    }
    //после отображения сообщения, выполнение текущей функции прекращается с помощью слова return.
    //это предотвращает добавление пустой задачи в список и дальнейшее выполнение кода.

    //код ниже создает новый элемент задачи task и добавляет внутренний элемент содержимого к этой задаче
    const task_el = document.createElement("div");
    //Создали элемент div, но еще не добавили на страницу
    task_el.classList.add("task");
    //добавляем элементу класс task. Теперь элемент будет иметь стиль.

    const task_content_el = document.createElement("div");
    //создаем снова с помощью этого метода новый элемент, который будет представлять содерживамое задачи
    task_content_el.classList.add("content");
    //добавляем элементу содержимого класс content.

    task_el.appendChild(task_content_el);
    //здесь мы добавляем элемент содержимого task_contant_el как дочерний к элементу задачи task_el

    const task_input_el = document.createElement("input");
    //создаем еще элемент
    task_input_el.classList.add("text");
    //добавлением элементу класс

    task_input_el.type = "text";
    //устанавливаем элементу тип. То есть пользователь может вводить текст здесь
    task_input_el.value = task;
    //устанавливаем значение(содержимое) элемента ввода равным значению переменной task.
    //Это сделано для отображения текста задачи внутри элемента ввода
    task_input_el.setAttribute("readonly", "readonly");
    //Добавляем атрибут readonly для того, чтобы пользователь не мог изменять содержимое поля

    task_content_el.appendChild(task_input_el);

    //Код ниже создает и добавляет элементы для действий (кнопки "Edit" и "Delete")
    //к элементу задачи, а затем добавляет эту задачу с её содержимым и действиями в список задач.
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit"; //устанавливаем текст внутри кнопки Edit равным Edit

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);
    //кнопки "Edit" и "Delete" становятся частью элемента задачи.

    list_el.appendChild(task_el);
    //Теперь задача с её содержимым и действиями добавлена в список задач.

    input.value = "";

    task_edit_el.addEventListener("click", () => {
      //код будет работать, когда пользователь нажмет на кнопку
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        //эта проверка нужна, так как эта кнопка при некоторых действиях меняется на save
        //innerText используется для получения текстового содержимого элемента
        //toLowerCase() нужен для преобразования текста в нижний регистр, чтобы сравнение было регистронезависимым.
        task_edit_el.innerText = "Save";
        //менят текст кнопки на save
        task_input_el.removeAttribute("readonly");
        //убираем атрибут чтения, чтобы можно было изменять содержимое
        task_input_el.focus();
        // Эта строка устанавливает фокус на элемент ввода, чтобы пользователь мог начать редактирование сразу.
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
