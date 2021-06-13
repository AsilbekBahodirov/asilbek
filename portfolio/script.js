window.addEventListener('DOMContentLoaded' , function () {
    window.addEventListener('scroll', function(){
        const header = this.document.querySelector('header');
        header.classList.toggle('sticky' , window.scrollY > 0)
    })
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation')
    const navigationItem = document.querySelectorAll('.navigation a')

    menuBtn.addEventListener('click' , () => {
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
        navigationItem.forEach(navitem =>{
            navitem.addEventListener('click' , ()=>{
                menuBtn.classList.remove('active')
                navigation.classList.remove('active')
            })
        })
    })
    const scrollBtn = document.querySelector('.scrolltotop-btn');
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active' , window.scrollY > 500)
    })
    scrollBtn.addEventListener('click' , () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
       
    window.addEventListener('scroll' ,  () => {
        let revaels = document.querySelectorAll('.revel');

        for(let i = 0; i< revaels.length;i++){
            let windowHeight = window.innerHeight;
            let revelTop = revaels[i].getBoundingClientRect().top;
            let revaelPoint = 50;

            if(revelTop < windowHeight - revaelPoint){
                revaels[i].classList.add('active')
            }
        }
    })




})