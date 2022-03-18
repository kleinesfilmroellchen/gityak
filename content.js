let prText = "Yaks being shaved";
let issueText = "Yak stack";

const serenityUAMatcher = /SerenityOS/gi;

window.addEventListener("load", () => {
  const taskTexts = document.querySelectorAll(
    '[data-target="tracked-issues-progress.label"]'
  );
  for (let taskText of taskTexts) {
    taskText.innerHTML = taskText.innerHTML.replaceAll(/task/g, "yak");
  }

  if (serenityUAMatcher.test(navigator.userAgent)) {
    console.log(
      "Congratulations, you're running GitYak in SerenityOS! You must have shaved a lot of yaks today. Take a break maybe, and then inform kleines Filmröllchen that the emojis don't actually work."
    );
    // https://serenityos.net/~xexxa/10CD
    // IMMINENTYAKSHAVE (U+10CD01)
    prText = "\u{10CD01}";
    // YAKSTACK (U+10CD90)
    issueText = "\u{10CD90}";
  }

  document.querySelector('a[href="/pulls"]').innerHTML = prText;
  document.querySelector('a[href="/issues"]').innerHTML = issueText;

  document.querySelector('span[data-content="Pull requests"]').innerHTML =
    prText;
  document.querySelector('span[data-content="Issues"]').innerHTML = issueText;
});
