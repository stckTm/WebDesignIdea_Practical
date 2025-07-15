const headerImg = document.querySelector("#header-img")

window.addEventListener("scroll", () => {
  const scroll = window.scrollY

  headerImg.style.transform = `scale(${(100 + scroll / 10) / 100})`
  headerImg.style.top = `- ${(scroll / 50)}%`
})
