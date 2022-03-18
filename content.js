window.addEventListener("load", () => {
  const taskTexts = document.querySelectorAll(
    '[data-target="tracked-issues-progress.label"]'
  );
  for (let taskText of taskTexts) {
    taskText.innerHTML = taskText.innerHTML.replaceAll(/task/g, "yak");
  }
});
