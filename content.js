let prText = "Yaks being shaved";
let issueText = "Yak stack";
let skeleyak = "Skeleyak";

const serenityUAMatcher = /SerenityOS/gi;

// listen for a bunch of stuff, fml
window.addEventListener("load", rewritePage);
// hacks, hacks, hacks
// doesn't catch GitHubs ajax reload, whatever the fuck that does
window.history.pushState = new Proxy(window.history.pushState, {
  apply: (target, thisArg, argArray) => {
    rewritePage();
    return target.apply(thisArg, argArray);
  },
});
window.onhashchange = rewritePage;
window.onpopstate = rewritePage;

function rewritePage() {
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
    // SKELEYAK (U+10CD14)
    skeleyak = "\u{10CD14}";
  }
  let element;
  if ((element = document.querySelector('a[href="/pulls"]')))
    element.innerHTML = prText;
  if ((element = document.querySelector('a[href="/issues"]')))
    element.innerHTML = issueText;

  if ((element = document.querySelector('span[data-content="Pull requests"]')))
    element.innerHTML = prText;
  if ((element = document.querySelector('span[data-content="Issues"]')))
    element.innerHTML = issueText;

  const html = document.querySelector("html");
  const walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    node.nodeValue = node.nodeValue.replaceAll(/\bstale\b/gi, skeleyak);
    node.nodeValue = node.nodeValue.replaceAll(/\bissues\b/gi, issueText);
  }

  for (let div of document.querySelectorAll("div")) {
    if (div.innerHTML === "stale") {
      div.innerHTML = skeleyak;
    }
  }
}
