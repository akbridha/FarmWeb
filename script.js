'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// console.log(document.body);

// console.log(document.querySelector('.header'));

// console.log('ini menggunakan query selector');
// console.log(document.querySelectorAll('button'));

// console.log(' ini menggunakan getElementsByTagName');
// console.log(document.getElementsByTagName('button'));

const tombal = document.createElement('button');
const pesan = document.createElement('div');

pesan.innerHTML=' We use cookies for improved functionality. <button class = "btn btn--close-cookie" id = "tombol-cookie">okay</button>';
pesan.classList.add('cookie-message');

pesan.style.backgroundColor = '#13c34b';
const sectionOne = document.getElementById('section--1');
sectionOne.prepend(pesan)

const ffooter = document.querySelector('footer');
ffooter.append(pesan);




document.querySelector('#tombol-cookie').addEventListener('click', function(){
  console.log('button cookie clikcked');
  pesan.remove();

}
);

// console.log(getComputedStyle(pesan));
pesan.setAttribute('class', 'list');

const navArrow = document.querySelector('.btn--scroll-to');
navArrow.addEventListener('click', function(e){
    const s1coords = bagianSatu.getBoundingClientRect();
    console.log(e);
    console.log(s1coords);
    console.log(scrollX, scrollY);

    window.scrollTo(
      {
        left :  s1coords.left + window.scrollX,
        top : s1coords.top + window.scrollY,
        behavior : 'smooth'
      }
    );
  }
)


// const bagianSatu = document.getElementById('section--1');
// bagianSatu.addEventListener('click', function(){console.log('section 1 is clicked');})



const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function(e){


});

const h1YangDihiglight = h1.querySelectorAll('.highlight');

// console.log(`Ini h1 yang dihighlight `);
// console.log(h1YangDihiglight);
// console.log(h1.childNodes);
// console.log(h1.children);

h1.firstElementChild.style.color = '#ffffff';

// console.log(h1.closest('.header'));
h1.closest('.header').style.backgroundColor = 'var(--color-primary-opacity)';
// h1.lastElementChild.style.color = 'blue';

// const arrayElement = h1.parentElement.children;
// arrayElement.forEach(function (ell){
//   console.log(ell);
// });

[...h1.parentElement.children].forEach(function(ell){
  // console.log(ell);

  if(ell !== h1 ){
//nothing
  ell.style.transform = 'scale(0.5)';
  }else{
  } 
});

const buttonX = document.querySelector('button');

buttonX.addEventListener('click',function(){
alert('Button Pressed');
});

// h1.addEventListener('mouseenter',()=>alert('balbal'));

// h1.onmouseenter = function(e){
//   console.log('Mouse Enter');
// }

const wholeBody = document.querySelector('body');
const sectionSatu = document.getElementById('section--1');
const textSectionSatu = document.querySelector('h3');
wholeBody.addEventListener('click', function(e){
  // console.log('Body Clicked');
})
sectionSatu.addEventListener('click', function(e){
  console.log('Section 1 is Clicked');
});
textSectionSatu.addEventListener('click', function(e){
  console.log('Text h3 In section-1 is Clicked');
});

const navbarItem = document.querySelector('.nav__links');

navbarItem.addEventListener('click', function(e){
  e.preventDefault();
  console.log(`Ini adalah container dari link di navBar`);
  if(e.target.classList.contains('nav__link')){
    const linkHref = e.target.getAttribute('href');
    alert(linkHref);
  }
  // console.log(e);

});
// navbarItem.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('item clicked', e);

//   if (e.target.classList.contains('nav__link')){
//     console.log('Contain Button');
//   }
// });


//container adalah parent dari btn
const tabContainer = document.querySelector('.operations__tab-container');
const tabBtn = document.querySelectorAll('.operations__tab');

const tabContent = document.querySelectorAll('.operations__content');


// console.log(`${tabContainer}${tabBtn}${tabContent}`);


// document.querySelector('.operations__tab-container').addEventListener('click',function(e){
//   console.log(e.target.closest('button').dataset.tab)
// });

tabContainer.addEventListener('click',function(e){
  const btnElementTab = e.target.closest('button');
  if(!btnElementTab){return}
  const btnData =btnElementTab.getAttribute('data-tab');
  
  // console.log(btnElementTab);

  // mematikan semua tab terlebih dahulu
  [...tabBtn].map(function(el){
   el.classList.remove('operations__tab--active');
  })
  btnElementTab.classList.add('operations__tab--active');
  
  // mematikan semua content terlebih dahulu
  
  [...tabContent].map(function(el){
   el.classList.remove('operations__content--active');
  });

  
  document.querySelector(`.operations__content--${btnElementTab.dataset.tab}`).classList.add('operations__content--active');
  
  // console.log(tabBtn);
});

 
const nav = document.querySelector('.nav');

const navBarOp = function(e){

  // console.log(` e.target passed `);
  // console.log( e.target);
  // console.log(`Opacity : ${opacity}`);


  if(e.target.classList.contains('nav__link')){
    const hovered = e.target;
    const induknya = e.target.closest('.nav');
    const arraySaudara = induknya.querySelectorAll('.nav__link');
    const logoNya = induknya.querySelector('img');
    
    arraySaudara.forEach(element => {
      if(element !== hovered){
        element.style.opacity = this;
      }
      
    });
    logoNya.style.opacity = this;
    
  }


  // console.log(op === 1 ? 'Mouse in' : 'Mouse out');
  // if(e.target.classList.contains('nav__link')/*||e.target.classList.contains('nav__logo')*/)
  // {
  //   // console.log('ini nav__link.. e target');
  //   console.log(e.target);
  //   // console.log(`e target + closest .nav :  `);
  //   // console.log(e.target.closest('.nav'));
  //   // console.log(`e CurrentTarget :  `);
  //   // console.log(e.currentTarget);
  // }
}

    nav.addEventListener('mouseover', navBarOp.bind(0.5));
    nav.addEventListener('mouseout', navBarOp.bind(1));
// nav.addEventListener('mouseout', function(e){
//   if(e.target.classList.contains('nav__link')){
//     // const hovered = e.target;
//     // const induknya = hovered.closest('.nav');
//     // const saudaranya = induknya.querySelectorAll('.nav__link');
//     // const logoIcon = induknya.querySelector('img');
//     // logoIcon.style.opacity = '1';
//     // saudaranya.forEach(element => {
//     //   element.style.opacity = '1'
//     // });
//     // console.log("Mouse Out");
//     console.log(this);
//     navBarOp(e, 1);


//   }
// }
// );
  





const objLocalPlane = {
  nama : 'layenAir',
  kode : '696',
  booking: [],
  book(nama, tanggal){
    // console.log(`${nama} mesan tiket pesawat ${this.nama} dengan kode ${this.kode} pada tanggal ${tanggal}`);
    this.booking.push({penerbangan : `Kode :${this.kode} nama pesawat ${this.nama}, penumpang ${nama}`});
  }
}
objLocalPlane.book('andin', ' 10-11-2012');
const book = objLocalPlane.book;
book.call({nama: 'citilink', kode: '444',booking: []},'andin', ' 10-11-2012');
book.bind({nama: 'Batik', kode: '333',booking: []})('adnan', '20-12-2012');


// const penyelidikCallback = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }
// const obsOption = {
//   root :null,
//   threshold : 0.1
// }
// const penyelidik = new IntersectionObserver(penyelidikCallback, obsOption);
// penyelidik.observe(sectionOne);

const header = document.querySelector('.header');

const stickyNav = function(entries, observer){
  // console.log('entries');
  // console.log(entries);

  const [entry] = entries; /*ambil entri posisi 0 */
  // console.log(entry);

  // entries.forEach(element => {
  //   console.log(element);
    
  // });
  // if(entry.isIntersecting){
  //   console.log('Entry intersecting');
  //   nav.classList.remove('sticky');
  // }else{
  //   console.log('NOt intersectin');
  //   nav.classList.add('sticky');
  // }
};

const opsiObs = {
  root : null,
  threshold : 0.1,
  // rootMargin : `-${nav.getBoundingClientRect().height}px`
};

const headerObserver = new IntersectionObserver( 
  stickyNav, opsiObs);

headerObserver.observe(sectionSatu);






const revealSection = function( entries, observer){


  entries.forEach(entry => {
    // const [entry] = entries;
    // console.log(entry);
    if(!entry.isIntersecting)return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
    
  });
  // console.log(entries);
}

const allSection = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold : 0.15
});


allSection.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});


const gambarLazy = document.querySelectorAll('img[data-src]');
// console.log(gambarLazy);


const loadGambar = function(entries, observer){
  const [entry] = entries;
  // console.log('observer gambar');
  // console.log(entry);
  if(!entry.isIntersecting) return;
  
  /*mengganti value element img src menjadi value yg ada di data-src*/
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);

};
const observerImg = new IntersectionObserver( loadGambar,{
  root:null,
  threshold:0.3
} );

gambarLazy.forEach(gambar => {
  observerImg.observe(gambar)
  
});


// SLIDERR

const sliders = function(){

  const slider_btn_left = document.querySelector('.slider__btn--left')
  const slider_btn_right = document.querySelector('.slider__btn--right')
  const slides = document.querySelectorAll('.slide');
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.35) translateX(-900px)';
  // slider.style.overflow = 'visible';
  let currentSlide = 0;
  const maxSlide = slides.length;

  const containerTitik  = document.querySelector('.dots');



  function membuatEffectTitikAktif(){

    document.querySelectorAll('.dots__dot').forEach(function(e){
      e.classList.remove('dots__dot--active');
      
    });


      
    document.querySelector(`button[data-slide="${currentSlide}"]`).classList.add('dots__dot--active');



    
  }

  function membuatTitik(){
    
    slides.forEach(function(_, i){
      
      containerTitik.insertAdjacentHTML('beforeend', 
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
      
    });
    
  }
  function spreadSlide(param){
    // console.log(`passed param ${param}`);
    return slides.forEach((slide, i) => {
      // console.log(`100 * (${i} - ${param})`);
      // console.log(100 * (i-param));
      slide.style.transform =`translateX(${100 * (i-param)}%)`
    }
  );
  }

  function geserSlideKanan(){
    currentSlide === (slides.length-1)? currentSlide = 0 :  currentSlide++;
    spreadSlide(currentSlide);
    membuatEffectTitikAktif();
  }
  
  function geserSlideKiri(){
    currentSlide ===  0 ? (currentSlide = slides.length-1) : currentSlide--;
    spreadSlide(currentSlide);
    membuatEffectTitikAktif();
  }
  
  function init(){
    
    spreadSlide(0);
    
    membuatTitik();
    membuatEffectTitikAktif();

  }
  
  init();
  // Trigger
  slider_btn_right.addEventListener('click', geserSlideKanan);
  slider_btn_left.addEventListener('click', geserSlideKiri)
  
  document.addEventListener('keydown', function(e){
    if(e.key==='ArrowRight'){
      geserSlideKanan()
    }else if(e.key==='ArrowLeft'){
      geserSlideKiri()
    }

  });

  containerTitik.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot'))  {
      const titikDiklik = e.target;
      console.log(titikDiklik.dataset.slide);
      currentSlide = titikDiklik.dataset.slide;
      membuatEffectTitikAktif();
      spreadSlide(currentSlide);

    }
    // if(!titikDiklik) return;
    // console.log(titikDiklik.dataset.slide);
  })
  
}

sliders();
// menyebarkan gambar di awal agar tidak tumpang tindih

 const induk = {
  worde : "i Failed",
  sayIt(){
    console.log(this.worde);
    
  }
 }


 const dengan = induk.sayIt;
 
 //  degan.sayIt.bind({worde : " i will"});
 induk.sayIt();
 // induk.sayIt.bind({worde : "i will"});
 
 dengan.call({worde : " i will"});

 
 const degan = Object.create(induk);
 degan.sayIt();