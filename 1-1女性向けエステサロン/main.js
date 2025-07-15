const toggleBtn = document.querySelector(".toggle-btn")
const gNav = document.querySelector("#g-nav")

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active")
  gNav.classList.toggle("active")
  document.querySelectorAll("#header, #container, #footer").forEach((el) => {
    el.classList.toggle("mainBlur")
  })
})




window.addEventListener('scroll' , () => {
    const headerImg = document.querySelector('#header-img')
    let scroll = window.scrollY;
    
    headerImg.style.transform = `scale(${(100 + scroll/10)/100})`
    headerImg.style.top = `-${(scroll / 50)}%`

})
