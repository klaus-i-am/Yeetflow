/*
find element with tag s-code-block then create a c-c button on the bottom right of that element
*/
var codeBlock = document.querySelectorAll(".s-code-block");

for (var i = 0; i < codeBlock.length; i++) {
  var copyBtn = document.createElement("button");
  var tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  copyBtn.classList.add("copyButton");
  copyBtn.textContent = "Copy";
  tooltip.textContent = "Yeeted!";

  codeBlock[i].append(tooltip);
  codeBlock[i].append(copyBtn);

  copyBtn.addEventListener(
    "click",
    (CopyButton = (e) => {
      text = e.target.parentNode.firstChild;
      // Add to code block
      e.target.textContent = "Copied!";
      e.target.disabled = true;

      setTimeout(() => {
        e.target.textContent = "Copy";
        e.target.disabled = false;
      }, 1500);

      console.log("Text: " + text.textContent);

      return navigator.clipboard.writeText(text.textContent);
    })
  );
}

// Click copy button
