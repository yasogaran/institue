/* TOGGLE MENU */
const toggleButton = document.getElementById("toggle-button");
const toggleMenu = document.getElementById("nav-menu");
toggleButton.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

/* ANIMATION */
const flyObj = document.querySelectorAll(".fly");
const radIn = document.querySelectorAll(".rad");
const zoomIn = document.querySelectorAll(".zoom");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.75,
  }
);
radIn.forEach((o) => {
  observer.observe(o);
});

flyObj.forEach((obj) => {
  observer.observe(obj);
});
zoomIn.forEach((ob) => {
  observer.observe(ob);
});

/* LETTER ANIMATION */
const aniText = document.querySelectorAll('.ani-char');
const aniText2 = document.querySelectorAll('.ani-char-2')
aniText.forEach((e) => {
  const paragraph = e.getAttribute('data-paragraph');
  e.innerHTML = "";
  let i = 0;
  let x;
  let f = setInterval(function () {
    x = paragraph.charAt(i);
    i++;
    e.innerHTML += x;
    if (paragraph.length == i) {
      clearInterval(f);
    }
  }, 20);
});
aniText2.forEach((e) => {
  const paragraph = e.getAttribute('data-paragraph');
  e.innerHTML = "";
  let i = 0;
  let x;
  let f = setInterval(function () {
    x = paragraph.charAt(i);
    i++;
    e.innerHTML += x;
    x = paragraph.charAt(i);
    i++;
    e.innerHTML += x;
    x = paragraph.charAt(i);
    i++;
    e.innerHTML += x;
    x = paragraph.charAt(i);
    i++;
    e.innerHTML += x;
    x = paragraph.charAt(i);
    i++;
    e.innerHTML += x;
    x = paragraph.charAt(i);
    i++;
    e.innerHTML += x;
    if (paragraph.length == i) {
      clearInterval(f);
    }
  }, 50);
});

/* MANUAL SCROLL */
const scrollButton = document.getElementById('scroll-button');
const maxHeight = document.body.offsetHeight;
const boxHeight = window.innerHeight;
const maxScroll = maxHeight - boxHeight;
let currenPosition = window.pageYOffset;
function smoothScroll() {
  let count = 0;
  function manualScroll() {
    count++;
    window.scrollBy(0, 3);
    if (count >= 200) {
      currenPosition = window.pageYOffset;
      clearInterval(a);
    }
  }
  if (maxScroll >= currenPosition) {
    var a = setInterval(manualScroll, 1);
  }
}

window.addEventListener('scroll', () => {
  if (maxScroll <= window.pageYOffset) {
    scrollButton.style = 'transform:rotate(180deg)';
  } else {
    scrollButton.style = 'transform:rotate(0)';
  }
});

function scrollTop() {
  var a = setInterval(scrol,1);
  function scrol() {
    window.scrollBy(0, -15);
    currenPosition = window.pageYOffset;
    if (currenPosition == 0) {
      currenPosition = window.pageYOffset;
      clearInterval(a);
    }
  }
}

scrollButton.addEventListener('click', () => {
  if (maxScroll <= window.pageYOffset) {
    scrollTop();
  }
  smoothScroll();
});

/* FORM TOGGLE */