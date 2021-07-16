// Form save email
const form = document.querySelector('[name="form-email"]');
form.addEventListener("submit", saveData);

function saveData(event) {
  event.preventDefault();

  const res = localStorage.getItem("data_form");

  let objeto = [];

  if (res) objeto = JSON.parse(res);

  console.log(objeto);

  const email = event.currentTarget.email.value;

  objeto.push({ email });

  localStorage.setItem("data_form", JSON.stringify(objeto));

  window.alert("Email cadastrado!");
}

// Nav link
const menuItems = document.querySelectorAll('nav a[href^="#"]');
function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop - 60;
}
function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}
function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget);
  scrollToPosition(to);
}
menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

// Nav shadow
function scrollNav() {
  const nav = document.getElementById("nav");
  if (this.scrollY >= 80) nav.classList.add("scroll-nav");
  else nav.classList.remove("scroll-nav");
}
window.addEventListener("scroll", scrollNav);
