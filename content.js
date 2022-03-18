const prText = "Yaks being shaved";
const issueText = "Yak stack";

window.addEventListener("load", () => {
  const taskTexts = document.querySelectorAll(
    '[data-target="tracked-issues-progress.label"]'
  );
  for (let taskText of taskTexts) {
    taskText.innerHTML = taskText.innerHTML.replaceAll(/task/g, "yak");
  }

  document.querySelector('a[href="/pulls"]').innerHTML = prText;
  document.querySelector('a[href="/issues"]').innerHTML = issueText;

  document.querySelector('span[data-content="Pull requests"]').innerHTML =
    prText;
  document.querySelector('span[data-content="Issues"]').innerHTML = issueText;
});
