if(document.querySelector('.catalog-slider__inner')) {

  const catalogSlider = new Swiper('.catalog-slider__inner', {
    // Optional parameters
        direction: 'vertical',
        slidesPerView: 9,
        spaceBetween: 20,
        updateOnWindowResize: true,
        loop: true,
        lazy: true,
        zoom: true,
        effect: 'slide',
        autoplay: {
          delay: 3000
            },
        speed: 1500
        // breakpoints: {
        //   1150: {
        //     slidesPerView: 9
        //   }
        // },
  });


  const catalogSliderNext = document.querySelector('.catalog-slider__arr-top');
  const catalogSliderPrev = document.querySelector('.catalog-slider__arr-bottom');


  catalogSliderPrev.addEventListener('click', () => {
    catalogSlider.slidePrev();
  });

  catalogSliderNext.addEventListener('click', () => {
    catalogSlider.slideNext();
  });

}

if(document.querySelector('.catalog-slider__inner--mob')) {

  const catalogSlider = new Swiper('.catalog-slider__inner--mob', {
    // Optional parameters
        slidesPerView: 3.5,
        spaceBetween: 5,
        updateOnWindowResize: true,
        freeMode: true,
        loop: true,
        lazy: true,
        zoom: true,
        effect: 'slide',
        autoplay: {
          delay: 3000
            },
        speed: 1500,
        breakpoints: {
          600: {
            slidesPerView: 5.5,
            spaceBetween: 10
          }
        },
  });



}


// const promoSlider = new Swiper('.promo-slider', {
//   // Optional parameters
//       slidesPerView: 2,
//       spaceBetween: 20,
//       updateOnWindowResize: true,
//       loop: true,
//       lazy: true,
//       zoom: true,
//       effect: 'slide',
//       autoplay: {
//         delay: 4000
//           },
//       speed: 1500,
//       breakpoints: {
//         900: {
//           direction: 'horizontal'
//         },
//         300: {
//           direction: 'vertical'
//         },
//       },
// });


if(document.querySelector('.spoiler')) {
  spoiler();
}

function spoiler() {
  const products = document.querySelectorAll('.product');
  const spoiler = document.querySelector('.spoiler');

  if(products.length > 4) {
    for(let i = 4; i < products.length; i++) {
      products[i].classList.add('hidden');
  }
}

}


if(document.querySelector('.item-images')) {

  const itemSlider = new Swiper('.item-images', {
    // Optional parameters
        slidesPerView: 1,
        spaceBetween: 20,
        updateOnWindowResize: true,
        loop: true,
        lazy: true,
        zoom: true,
        effect: 'slide',
        // autoplay: {
        //   delay: 1000
        //     },
        speed: 1500
        // breakpoints: {
        //   1150: {
        //     slidesPerView: 9
        //   }
        // },
  });


  // const catalogSliderNext = document.querySelector('.catalog-slider__arr-top');
  // const catalogSliderPrev = document.querySelector('.catalog-slider__arr-bottom');


  // catalogSliderPrev.addEventListener('click', () => {
  //   catalogSlider.slidePrev();
  // });

  // catalogSliderNext.addEventListener('click', () => {
  //   catalogSlider.slideNext();
  // });

}


function itemDropdown() {
  const itemDropdowns = document.querySelectorAll('.item-info__drop-title');

  if(itemDropdowns.length > 0) {
    itemDropdowns.forEach((el) => {
      el.addEventListener('click', (item) => {
        item.target.classList.toggle('expanded');
      });
    });
  }
}

itemDropdown()

function similarProductsSlider() {
  if(document.querySelector('.similarProductsSlider')) {
    const similarProductsSlider = new Swiper('.similarProductsSlider', {
      // Optional parameters
          slidesPerView: 2,
          spaceBetween: 20,
          updateOnWindowResize: true,
          loop: true,
          lazy: true,
          zoom: true,
          effect: 'slide',
          autoplay: {
            delay: 1000
              },
          speed: 1500,
          breakpoints: {
            750: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 4
            }
          },
    });
  }
}

similarProductsSlider()


function quantInput() {
  if(document.querySelector('.item-info__quant-input')) {

    const quantInputWrap = document.querySelector('.item-info__quant-input');

    const minusBtn = quantInputWrap.querySelector('.quant-minus');
    const plusBtn = quantInputWrap.querySelector('.quant-plus');
    const quantInput = quantInputWrap.querySelector('.quant-num');

    minusBtn.addEventListener('click', () => {
      let count = parseInt(quantInput.value) - 1;
      count = count < 1 ? 1 : count;
      quantInput.value = count;
      quantInput.setAttribute('value', count);
    });

    
    plusBtn.addEventListener('click', () => {
      let count = parseInt(quantInput.value) + 1;
      count = count > parseInt(quantInput.getAttribute('data-max-count')) ? parseInt(quantInput.getAttribute('data-max-count')) : count;
      quantInput.value = count;
      quantInput.setAttribute('value', count);
    });

    quantInput.addEventListener("change", function() {
          if (this.value.match(/[^0-9]/g)) {
              this.value = this.value.replace(/[^0-9]/g, '');
          }
          if (this.value == "") {
              this.value = 1;
              quantInput.setAttribute('value', 1);
          }
          if (this.value > parseInt(this.getAttribute('data-max-count'))) {
              this.value = parseInt(this.getAttribute('data-max-count'));
          }
      });

    quantInput.addEventListener("keyup", function() {
          if (this.value.match(/[^0-9]/g)) {
              this.value = this.value.replace(/[^0-9]/g, '');
          }
      });

    quantInput.addEventListener("input", function() {
          if (this.value.match(/[^0-9]/g)) {
              this.value = this.value.replace(/[^0-9]/g, '');
          }
      });

    quantInput.addEventListener("click", function() {
          if (this.value.match(/[^0-9]/g)) {
              this.value = this.value.replace(/[^0-9]/g, '');
          }
      });  


  }
}

quantInput();

function modalFunc() {
  const modal = document.querySelector('.modal');
  const triggers = document.querySelectorAll('.modal-trigger');
  const close = document.querySelectorAll('.modal__close');

  modal.addEventListener("click", (e) => {
    e = e.target;
    if(e.classList.contains('modal')) {
      modal.classList.remove('opened');
      document.body.classList.remove('_locked');
    }
  });

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      modal.classList.add('opened');
      document.body.classList.add('_locked');
  });
  })

  close.forEach((close) => {
    close.addEventListener('click', () => {
      modal.classList.remove('opened');
      document.body.classList.remove('_locked');
    });
  });

      

}

modalFunc();



class Form {

  constructor(id) {
    this.formBlock = document.querySelector(id);
    this.form = this.formBlock.querySelector('form');
    this.mainContent = this.formBlock.querySelector('.mainForm__content');
    this.thanksContent = this.formBlock.querySelector('.thanksWindow__content');
    this.init();
  }

  send() {
    this.form.addEventListener('submit', (e) => {
      console.log('send');
      e.preventDefault();
      this.mainContent.classList.add('hidden');
      this.thanksContent.classList.remove('hidden');

    });
  }

  init() {
    this.send();
  }
}

if(document.querySelector('.contacts-form')) {
  const contactsForm = new Form('.contacts-form');
}

if(document.querySelector('.basket-form')) {
  const contactsForm = new Form('.basket-form');
}

const floatForm = new Form('.popup-form');

