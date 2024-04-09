function addPasteFunctionality () {
  var copybuttons = document.getElementsByClassName("copy-button")
  function paste(el) {
    var terminal = "terminal_01"
    classNames = el.target.parentElement.parentElement.parentElement.className.split(" ")
    for (let i = 0; i < classNames.length; i++) {
      const className = classNames[i];
      if (className.startsWith('tty') || className.startsWith('terminal')) {
        terminal = className; 
      }
    }
    window.parent.document.getElementById(terminal).contentWindow.document.getElementsByTagName("textarea")[0].focus()
    window.parent.document.getElementById(terminal).contentWindow.document.execCommand('insertText', false, el.target.nextSibling.innerText);
  }
  Array.prototype.forEach.call(copybuttons, function (b) { b.addEventListener('click', paste); });
}
window.onload = addPasteFunctionality
