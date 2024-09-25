const links = document.querySelectorAll("nav a");

function ativarLink(links) {
  const href = links.href;
  const url = document.location.href;
  if (href === url) {
    links.style.backgroundColor = "black";
    links.style.color = "white";
  }
}

links.forEach(ativarLink);
