class Catalog {
    constructor(id) {

        this.catalog = document.querySelector(id);
        this.items = this.catalog.querySelectorAll('.catalog__item');
        this.init()
    }

    initGrid() {
        
        if(window.innerWidth > 1200) {
            
            for(let i = 0; i < this.items.length; i++) {
                
                if (i % 7 < 3) {
                    this.items[i].classList.add('third');
                } else if (i % 7 >= 3 && i % 7 < 7) {
                    this.items[i].classList.add('fourth');
                }
            }

        } else if(window.innerWidth <= 1199 && window.innerWidth > 850) {

            for(let i = 0; i < this.items.length; i++) {
                if (i % 5 < 2) {
                    this.items[i].classList.add('second');
                } else if (i % 5 >= 2 && i % 5 < 5) {
                    this.items[i].classList.add('third');
                }
            }
        } else if(window.innerWidth <= 849) {

            const itemsArr = Array.from(this.items)

            const firstArr = itemsArr.slice(0, 2);
            const restArr = itemsArr.slice(2, itemsArr.length);
            for(let i = 0; i < firstArr.length; i++) {
                firstArr[i].classList.add('second');
            }
            for(let i = 0; i < restArr.length; i++) {
                if (i % 3 < 1) {
                    restArr[i].classList.add('once');
                } else if (i % 3 >= 1 && i % 3 < 3) {
                    restArr[i].classList.add('second');
                }
            }
        }
    }

    listenGrid() {
        window.addEventListener('load', () => {
            this.deleteGrid()
            this.initGrid()
        });
        window.addEventListener('resize', () => {
            this.deleteGrid()
            this.initGrid()
        });
    }

    deleteGrid() {
        this.items.forEach(element => {
            element.classList.value = 'catalog__item';
        });
    }


    init() {
        this.listenGrid()
    }
}


if(document.querySelector('.catalog')) {
    const catalog = new Catalog('.catalog');
}



class Construct {
    constructor(id) {
        this.construct = document.querySelector(id);

        this.select = this.construct.querySelector('.construct__select');
        this.selectOptions = this.construct.querySelector('.construct__select-options');
        this.selectInput = this.construct.querySelector('.construct__select-input');
        this.selectOption = this.construct.querySelectorAll('.construct__select-item');

        this.rangeSlider = this.construct.querySelector('.quant__range');
        this.rangeInput = this.construct.querySelector('.quant__input');




        this.init()
    }

    range() {
        this.rangeSlider.addEventListener('input', () =>{
            console.log( this.rangeSlider.value);
            this.rangeInput.value = this.rangeSlider.value;
        })
    }

    selectFlowers() {
        this.select.addEventListener('mouseover', (e) => {
            this.selectOptions.classList.add('options-show');
        });

        this.select.addEventListener('mouseleave', (e) => {
            this.selectOptions.classList.remove('options-show');
        });

        this.selectOption.forEach((option) => {

            option.addEventListener('click', (e) => {
                this.selectOption.forEach((option) => {
                    option.classList.remove('option-selected');
                });
                e = e.target;
                e.classList.add('option-selected');
                this.selectInput.textContent = e.textContent;
                this.selectInput.dataset.selected = e.textContent;
            });
    

        });
        
        
        
    }



    init() {
        this.selectFlowers()
        this.range()
    }
}


if(document.querySelector('.construct')) {
    const panel = new Construct('.construct');
}



function itemSliders() {
    if(document.querySelector('.item__slider-main')) {

        $('.item__slider-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.item__slider-nav',
            // autoplay: true,
            // autoplaySpeed: 2500,
            pauseOnHover: true,
            swipe: true,
            infinite: false,
            touchMove: true,
            infinite: true,
            pauseOnHover: true
          });

          $('.item__slider-nav').slick({
            slidesToShow: 5,
            asNavFor: '.item__slider-main',
            dots: false,
            arrows: false,
            // centerMode: true,
            focusOnSelect: true,
            infinite: true,
            draggable: true,
            swipe: true,
            swipeToSlide: true,
            responsive: [
                {
                  breakpoint: 1350,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 5
                      
                    }
                  },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 5
                      
                    }
                  }
              ]
        });



        const addBtn = document.querySelector('.item__slider-add').addEventListener('click', () => {
            const addSectionTop = document.querySelector('.item__add').offsetTop;
            window.scrollTo({ top: addSectionTop, behavior: 'smooth'});
        })

        const mainSliderArrLeft = document.querySelector('.item__slider-arrow.arr-left');
            mainSliderArrLeft.addEventListener('click', () => {
                $('.item__slider-main').slick('slickPrev');
            })
        const mainSliderArrRight = document.querySelector('.item__slider-arrow.arr-right');
            mainSliderArrRight.addEventListener('click', () => {
                $('.item__slider-main').slick('slickNext');
            })


        
    }

    if(document.querySelector('.item__add')) {
        $('.item__add .item__add-items').slick({
            slidesToShow: 4,
            dots: true,
            arrows: false,
            // centerMode: true,
            infinite: false,
            draggable: true,
            swipe: true,
            swipeToSlide: true,
            responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                    dots: true
                  }
                },
                {
                    breakpoint: 670,
                    settings: {
                      slidesToShow: 1.18
                      
                    }
                  }
              ]
        });

        const addSliderArrLeft = document.querySelector('.item__add-filters .item__slider-arrow.arr-left');
            addSliderArrLeft.addEventListener('click', () => {
                $('.item__add-items').slick('slickPrev');
            });
        const addSliderArrRight = document.querySelector('.item__add-filters .item__slider-arrow.arr-right');
            addSliderArrRight.addEventListener('click', () => {
                $('.item__add-items').slick('slickNext');
            });


        
    }
}

itemSliders()

function updateAddSlider() {


    let curFilter;
    const filters = document.querySelectorAll('.item__add-filter');

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {

            filters.forEach(filter => {
                filter.classList.remove('active-filter');
            });

            const filterData = filter.dataset.filter;
            filter.classList.add('active-filter');
            curFilter = filterData;
            reinitSlider(curFilter);
        });
    });

    function reinitSlider(filter) {
        const slides = document.querySelectorAll('.item__add-item');

        if(document.querySelector('.basketAddItems')) {
            $('.basketAddItems').slick('slickGoTo', 0);
        }
        $('.item__add .item__add-items').slick('slickGoTo', 0);
        slides.forEach(slide => {
            slide.classList.remove('hidden');
            if(slide.dataset.type !== curFilter && curFilter) {
                slide.classList.add('hidden');
            } else {
                slide.classList.remove('hidden');
            }
        });
    }


}

updateAddSlider()





class Modal {
    constructor(template = "") {
        this.modal = document.querySelector('.modal');
        this.template = template;
        this.container = document.querySelector('.modal__content-inner');
        this.init();
    }


    listenOpenTriggers() {
        this.triggers = document.querySelectorAll('[data-modal]');
        this.triggers.forEach((trigger)=>{
            trigger.addEventListener('click', () => {
                this.templateName = trigger.dataset.modal;
                
                this.openModal();
            });
        });
    }

    listenOpenTriggersModal() {
        this.triggers = this.modal.querySelectorAll('[data-modal]');
        this.triggers.forEach((trigger)=>{
            trigger.addEventListener('click', () => {
                this.templateName = trigger.dataset.modal;
                
                this.openModal();
            });
        });
    }

    listenCloseTriggers() {
        this.close = document.querySelectorAll('.modal__close');
        this.close.forEach((close) => {
            close.addEventListener('click', () => {
                this.closeModal();
            });
          });

          this.modal.addEventListener("click", (e) => {
            e = e.target;
            if(e.classList.contains('modal')) {
                this.closeModal()
            }
          });
    }

    initTemplate() {
        if(document.querySelector('.'+this.templateName)) {
            this.template = document.querySelector('.'+this.templateName);
            this.container.innerHTML = this.template.innerHTML;
        }

        
    }

    initForms() {
        if(this.modal.querySelector('form')) {
            const form = this.modal.querySelector('form').id;
            const formInit = new Form(form);
        }
    }

    openModal() {
        this.modal.classList.add('opened');
        document.body.classList.add('_locked');
        this.initTemplate();
        this.initAdditionals();
        showPassword();
        this.initForms();
        this.listenCloseTriggers();
        this.listenOpenTriggersModal();
    }

    closeModal() {
        this.modal.classList.remove('opened');
        document.body.classList.remove('_locked');
    }

    listenCardRadio() {

        this.cardRadios = this.modal.querySelectorAll('.modal__radio input');
        this.cardRadioSmall = this.modal.querySelector('[data-cardsize="small"]');
        this.cardRadioSmall.click();
        this.cardRadios.forEach((radio) => {
            this.countChars('small');
            radio.addEventListener('change', () => {
                if(radio.dataset.cardsize=='big') {
                    this.countChars('big');
                } else if(radio.dataset.cardsize=='small') {
                    this.countChars('small');
                }
            });
        });

        
    }

    countChars(type) {

        this.textareaBig = this.modal.querySelector(".modal__textarea.textAreaBig");
        this.textareaSmall = this.modal.querySelector(".modal__textarea.textAreaSmall");

        this.textareaBigImg = this.modal.querySelector(".cardBig");
        this.textareaSmallImg = this.modal.querySelector(".cardSmall");

        
        this.counterElement = this.modal.querySelector(".modal__counter");
        this.textareaBig.value = "";
        this.textareaSmall.value = "";

        if(type=='big') {
            this.textareaBig.classList.remove('hidden');
            this.textareaSmall.classList.add('hidden');

            this.textareaBigImg.classList.remove('hidden');
            this.textareaSmallImg.classList.add('hidden');

            let countMax = 300;
            this.counterElement.textContent = "0/" + countMax;
            this.textareaBig.addEventListener('input', ()=>{
                let count = this.textareaBig.value.length;
                if(count >= countMax) {
                    this.textareaBig.value = this.textareaBig.value.slice(0, countMax);
                    count = countMax;
                }
                this.counterElement.textContent = count + "/"+countMax;
            });

        } else if(type=='small') {
            this.textareaBig.classList.add('hidden');
            this.textareaSmall.classList.remove('hidden');

            this.textareaBigImg.classList.add('hidden');
            this.textareaSmallImg.classList.remove('hidden');

            let countMax = 80;
            this.counterElement.textContent = "0/" + countMax;

            this.textareaSmall.addEventListener('input', () => {
                let count = this.textareaSmall.value.length;
                if(count >= countMax) {
                    this.textareaSmall.value = this.textareaSmall.value.slice(0, countMax);
                    count = countMax;
                }
                this.counterElement.textContent = count + "/"+countMax;
            });
        }
        
        
    }

    initSlick() {
        $('.modal__content .item__add-items').slick({
            slidesToShow: 4,
            dots: true,
            arrows: false,
            // centerMode: true,
            infinite: false,
            draggable: true,
            swipe: true,
            swipeToSlide: true,
            responsive: [
                {
                  breakpoint: 1500,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 1130,
                  settings: {
                    slidesToShow: 2

                }
                },
                {
                    breakpoint: 760,
                    settings: {
                      slidesToShow: 1.1
                      
                    }
                  }
              ]
        });

        const addSliderArrLeft = this.modal.querySelector('.item__slider-arrow.arr-left');
            addSliderArrLeft.addEventListener('click', () => {
                $('.modal__content .item__add-items').slick('slickPrev');
            });
        const addSliderArrRight = this.modal.querySelector('.item__slider-arrow.arr-right');
            addSliderArrRight.addEventListener('click', () => {
                $('.modal__content .item__add-items').slick('slickNext');
            });
    }

    addedItem() {
        this.addedImg = this.modal.querySelector('.addedItemImg');
        if(document.querySelectorAll('.item__slider-main-slide img').length > 0) {
            this.mainItemImg = document.querySelectorAll('.item__slider-main-slide img')[0].src;
            this.addedImg.src = this.mainItemImg;
        }
        

        


    }


    initAdditionals() {
        
        if(this.modal.querySelector('.modal__textarea')) {
            this.listenCardRadio();
        }

        if(this.modal.querySelector('.item__add-items')) {
            this.initSlick();
        }

        if(this.modal.querySelector('.addedItemImg')) {
            this.addedItem();
        }
    }

    init() {
        this.initAdditionals();
        this.listenOpenTriggers();
        this.listenCloseTriggers()
        
    }
}


// if(document.querySelector('.item') ) {
//     const modal = new Modal();
// }

const modal = new Modal();






function lkTabs() {
    const lkTabs = document.querySelectorAll('.lk__tab');
    const lkPages = document.querySelectorAll('.lk__page');

    lkTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            const e = event.target;
            lkTabs.forEach(tab => tab.classList.remove('tab-active'));
            e.classList.add('tab-active');

            const tabName = e.dataset.tab;

            lkPages.forEach(page =>{
                page.classList.add('hidden');
                if(page.dataset.page == tabName) {
                    page.classList.remove('hidden');
                }
            })
        })
    });
}

lkTabs()



function orderTabs() {
    const orderTabs = document.querySelectorAll('.orders__tab');
    const orderPages = document.querySelectorAll('.order__page');

    orderTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            const e = event.target;
            orderTabs.forEach(tab => tab.classList.remove('active-orders'));
            e.classList.add('active-orders');

            const tabName = e.dataset.order;

            
            orderPages.forEach(page =>{
                page.classList.add('hidden');
                if(page.dataset.order == tabName) {
                    page.classList.remove('hidden');
                }
            })
        })
    });
}

orderTabs()


function basketCardTextareas() {
    const basketAreaSmall = document.querySelector('.basket__add .textAreaSmall');
    const basketAreaBig = document.querySelector('.basket__add .textAreaBig');
    const basketCardRadiosCard = document.querySelectorAll('.basket__add .basket__add-radio[data-radio]');
    const basketCardRadioFert = document.querySelector('.basket__add .basket__add-radio [data-fert]');
    basketCardRadioFert.checked = false;
    const basketCardCounter = document.querySelector('.basket__add .basket__add-counter');
    const basketTextAreasBlock = document.querySelector('.basket__add-textAreas');
    basketAreaSmall.value = "";
    basketAreaBig.value = "";

    initSmallCounter()

    basketCardRadiosCard.forEach(radio=>{
        radio.querySelector('input[type="radio"]').checked = false;
        
        radio.addEventListener('click', () => {
            basketAreaSmall.value = "";
            basketAreaBig.value = "";
            basketTextAreasBlock.classList.remove('hidden');
            if(radio.dataset.radio == "small") {
                basketAreaBig.classList.add('hidden');
                basketAreaSmall.classList.remove('hidden');
                initSmallCounter()

            } else if(radio.dataset.radio == "big") {
                basketAreaBig.classList.remove('hidden');
                basketAreaSmall.classList.add('hidden');
                initBigCounter()
            }
        })
    });

    function initSmallCounter() {
        
            let countMax = 80;
            basketCardCounter.textContent = "0/" + countMax;

            basketAreaSmall.addEventListener('input', () => {
            let count = basketAreaSmall.value.length;
                if(count >= countMax) {
                    basketAreaSmall.value = basketAreaSmall.value.slice(0, countMax);
                    count = countMax;
                }
            basketCardCounter.textContent = count + "/"+countMax;
        })
    }

    function initBigCounter() {
        let countMax = 300;
        basketCardCounter.textContent = "0/" + countMax;

        basketAreaBig.addEventListener('input', () => {
        let count = basketAreaBig.value.length;
            if(count >= countMax) {
                basketAreaSmall.value = basketAreaBig.value.slice(0, countMax);
                count = countMax;
            }
        basketCardCounter.textContent = count + "/"+countMax;
    })
    }
}

if(document.querySelector('.basket__add')) {
    basketCardTextareas();
}


if(document.querySelector('.basketAddItems')) {


    $('.basketAddItems').slick({
        slidesToShow: 4,
        dots: false,
        arrows: false,
        // centerMode: true,
        infinite: false,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                dots: true
              }
            },
            {
                breakpoint: 670,
                settings: {
                  slidesToShow: 1
                  
                }
              }
          ]
    });

    const addSliderArrLeft = document.querySelector('.basket__addItems .item__add-filters .item__slider-arrow.arr-left');
        addSliderArrLeft.addEventListener('click', () => {
            $('.basketAddItems').slick('slickPrev');
        });
    const addSliderArrRight = document.querySelector('.basket__addItems .item__add-filters .item__slider-arrow.arr-right');
        addSliderArrRight.addEventListener('click', () => {
            $('.basketAddItems').slick('slickNext');
        });
}


function clearFields() {
    document.querySelectorAll('input[type=radio]').forEach(el => el.checked = false);
    if(document.getElementById("order-form")) {
        document.querySelectorAll('input[type=text]').forEach(el => el.value = "")
    }
    
}

clearFields()





function pickupSelect() {

    if(document.querySelector('.pickup__select')){

   

        select = document.querySelector('.pickup__select');
        selectOptions = document.querySelector('.pickup__select-options');
        selectInput = document.querySelector('.pickup__select-input');
        selectOption = document.querySelectorAll('.pickup__select-item');

        select.addEventListener('mouseover', (e) => {
            selectOptions.classList.add('options-show');
        });

        select.addEventListener('mouseleave', (e) => {
            selectOptions.classList.remove('options-show');
        });

        selectOption.forEach((option) => {

            option.addEventListener('click', (e) => {
                selectOption.forEach((option) => {
                    option.classList.remove('option-selected');
                });
                e = e.target;
                e.classList.add('option-selected');
                selectInput.textContent = e.textContent;
                selectInput.dataset.selected = e.textContent;
            });


        });

    }
}


pickupSelect()


function deliveryOptions () {
    const deliveryFilters = document.querySelectorAll('.order__delivery-filter');
    const orderCourier = document.querySelector('.order__courier');
    const orderPickup = document.querySelector('.order__pickup');

    deliveryFilters.forEach(el=>{
        el.addEventListener('click', ()=> {

            deliveryFilters.forEach(el=>{el.classList.remove('active-filter')})
            el.classList.add('active-filter');

            orderCourier.classList.add('hidden');
            orderPickup.classList.add('hidden');

            if(el.dataset.delivery == "Доставка курьером") {
                orderCourier.classList.remove('hidden');

            } else if(el.dataset.delivery == "Самовывоз") {
                orderPickup.classList.remove('hidden');

            }



        })
    })
}

deliveryOptions ()


function accordeonInit() {
    const accordeonItems = document.querySelectorAll('.accordeon__item');

    accordeonItems.forEach((el) => {

        el.addEventListener('click', (e) => {
            accordeonItems.forEach((el) => {
                el.classList.remove('expand');
            })

            el.classList.add('expand');
        })
    })
}

if(document.querySelector('.accordeon')) {
    accordeonInit()
}


class MobMenu {
    constructor() {
        this.burger = document.querySelector('.burger');
        this.menu = document.querySelector('.mob-menu');
        this.overlay = document.querySelector('.overlay');
        this.menuOpened = false;
        this.init();
    }

    openMenu() {
        this.menu.classList.add('mob-active');
        this.overlay.classList.add('overlay-active')
        this.burger.classList.add('active-burger');
        document.body.classList.add('_locked');
        this.menuOpened = true;

    }

    closeMenu() {
        this.menu.classList.remove('mob-active');
        this.overlay.classList.remove('overlay-active')
        this.burger.classList.remove('active-burger');
        document.body.classList.remove('_locked');
        this.menuOpened = false;
    }

    triggerOpen() {
        this.burger.addEventListener('click', () => {
            if(!this.menuOpened) {
                this.openMenu();
            } else {
                this.closeMenu();
            }
            
        })

        this.overlay.addEventListener('click', () => {
            this.closeMenu();
        })
    }


    init() {
        this.triggerOpen()
    }
}

const mobmenu = new MobMenu();



function sliderVideo() {
    const sliderVideos = document.querySelectorAll('.item__slider-main-slide.video video');

    if(sliderVideos.length>0) {
        sliderVideos.forEach(video => {
            const parent = video.closest('.video'),
                  playBtn = parent.querySelector('.play-btn');

            parent.addEventListener('click', (e)=> {

                if (video.paused || video.ended) {
                    playBtn.classList.add('unvis');
                    video.play();
                } else {
                    playBtn.classList.remove('unvis');
                    video.pause();
                }
                
            })
        })
    }

}

if(document.querySelector('.item')) {
    sliderVideo();
}


if(document.querySelector('.headerMob')) {
    const btnMobBouqetScroll = document.querySelector('.btnMobBouqetScroll').addEventListener('click', () => {
        const addSectionTop = document.querySelector('.catalog').offsetTop;
        window.scrollTo({ top: addSectionTop, behavior: 'smooth'});
    })

    const btnConstructScroll = document.querySelector('.btnConstructScroll').addEventListener('click', () => {
        const addSectionTop = document.querySelector('.construct').offsetTop;
        window.scrollTo({ top: addSectionTop, behavior: 'smooth'});
    })

    const btnBouqetScroll = document.querySelector('.btnBouqetScroll').addEventListener('click', () => {
        const addSectionTop = document.querySelector('.catalog').offsetTop;
        window.scrollTo({ top: addSectionTop, behavior: 'smooth'});
    })
}


function cropText() {
    const elementsToCrop = document.querySelectorAll('[data-crop]');
    
    elementsToCrop.forEach(element => {
      const text = element.textContent;
      if (text.length > 30) {
        const croppedText = text.substring(0, 30).trim() + '...';
        element.textContent = croppedText;
      }
    });
  }

  cropText()


  function showPassword() {
    const passwords = document.querySelectorAll('.eyes');

    if(passwords.length > 0) {
        passwords.forEach(el=> {
            el.addEventListener('click', () => {
                const input = el.parentNode.querySelector('.modal__input');
                if(el.classList.contains('active')) {
                    input.setAttribute('type', 'password');
                    el.classList.remove('active');
                } else {
                    input.setAttribute('type', 'text');
                    el.classList.add('active');
                }
                
            })
        })
    }


  }

  showPassword()


function formStartInit() {
    if(document.querySelector('.construct')) {

        const panel = document.querySelector('.construct__panel');
        const color = panel.querySelectorAll('.color__input-wrap')[0].click();
        const length = panel.querySelectorAll('.lenght__radio')[0].click();
        const quant = panel.querySelectorAll('.quant__input')[0].value = 5;
        const quantRange = panel.querySelectorAll('.quant__range')[0].value = 5;
        const package = panel.querySelectorAll('.package__radio')[0].click();
        const green = panel.querySelectorAll('.green__radio')[0].click();

    }

    if(document.querySelector('.item-page .construct__panel')) {
        const panel = document.querySelector('.construct__panel');
        const color = panel.querySelectorAll('.color__input-wrap')[0].click();
        const length = panel.querySelectorAll('.lenght__radio')[0].click();
        const quant = panel.querySelectorAll('.quant__radio')[0].click();
        const package = panel.querySelectorAll('.package__radio')[0].click();
        const green = panel.querySelectorAll('.green__radio')[0].click();
    }
}

formStartInit()


//   document.querySelector('[data-modal="callbackThanks"]').click();
//   document.querySelector('[data-modal="regThanks"]').click();


class Form {
    constructor(form) {

        this.form = document.getElementById(form);
        this.init()

    }

    deleteErrors() {
        const errors = this.form.querySelectorAll('._error-txt');
        errors.forEach((el) => {
          const parent = el.parentNode;
          parent.removeChild(el);
        });
    
    
        const inputs = this.form.querySelectorAll('input[type=text], input[type=tel], input[type=password]');
        inputs.forEach((input) => {
          input.classList.remove('_error-input');
        });

        if(this.form.querySelector('.error-wrap')) {
            this.form.querySelectorAll('.error-wrap').forEach(el=>el.textContent="");
        }

        if(this.form.id=='lk-form') {
            const oldPassWrongWrap = this.form.querySelector('.oldpass-error-wrap');
            oldPassWrongWrap.textContent = "";
        }
    }

    createErrAuth() {

            if(this.form.id == "auth-form") {

            const inputs = this.form.querySelectorAll('.modal__input').forEach(el=>{
                el.classList.add('_error-input');
            })

            let errorName = "Не правильный логин или пароль";
            let errorEl = document.createElement('span');
            errorEl.textContent = errorName;
            errorEl.classList.add('_error-txt');
            const errWrap = this.form.querySelector('.error-wrap');

            errWrap.appendChild(errorEl);
        }

    }

    createError(err) {

        if(this.form.id == "callback-form" || 1) {
       
            let errorName = "Обязательное поле";
        
            err.forEach((el) => {
                const inputWrap = el.closest('.input-wrap');
                let errorEl = document.createElement('span');
                errorEl.textContent = errorName;
                errorEl.classList.add('_error-txt');
                el.classList.add('_error-input');
                inputWrap.appendChild(errorEl);
        
            });

      } 

    }

    validateForm() {
        const requiredInputs = this.form.querySelectorAll('[data-required]');
        

        let errorArr = [];

        this.deleteErrors();

        requiredInputs.forEach(el => {
            const value = el.value.trim();
            if(value === "") {
                errorArr.push(el);
            }
        })


        if(errorArr.length > 0) {
        this.createError(errorArr);
        
        return false;
        } else {
        return true;
        }

    }

    validatePasswords() {
        const passFields = this.form.querySelectorAll('[data-newpass]');
        const passErrWrap = this.form.querySelector('.pass-error-wrap');

        let legitPass = passFields[0].value == passFields[1].value;

        const minLength = 8;
        const MaxLength = 25;

        const pass = passFields[0].value;
        const hasLetterAndNumber = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(pass);
        const isValidFormat = /^[a-zA-Z0-9]+$/.test(pass);

        const passwordLength = pass.length;
        const isLengthValid = passwordLength >= minLength && passwordLength <= MaxLength;


        passFields.forEach(el=>el.classList.remove('_error-input'));

        if(!legitPass) {
            
                let errorName = "Пароли не совпадают";
                let errorEl = document.createElement('span');
                errorEl.textContent = errorName;
                errorEl.classList.add('_error-txt');

                passFields.forEach(el=>el.classList.add('_error-input'));

                passErrWrap.appendChild(errorEl);

                return false;
            } else if(!isValidFormat || !isLengthValid || !hasLetterAndNumber ) {
                let errorName = "Пароль должен быть 8-25 символов";
                let errorEl = document.createElement('span');
                errorEl.textContent = errorName;
                errorEl.classList.add('_error-txt');
                passErrWrap.appendChild(errorEl);

                errorName = "содержать латинские буквы и цифры";
                errorEl = document.createElement('span');
                errorEl.textContent = errorName;
                errorEl.classList.add('_error-txt');
                passErrWrap.appendChild(errorEl);
    
                passFields.forEach(el=>el.classList.add('_error-input'));
    
                
                return false;
            } else {
                return true;
            }
    }

    oldPassWrong() {
        if(this.form.id == 'lk-form') {
            
            const oldPassWrongWrap = this.form.querySelector('.oldpass-error-wrap');
            const oldPassInput = oldPassWrongWrap.parentNode.querySelector('.profile__input');

            let errorName = "Пароль не верный";
            let errorEl = document.createElement('span');
            errorEl.textContent = errorName;
            errorEl.classList.add('_error-txt');
            oldPassWrongWrap.appendChild(errorEl);
            oldPassInput.classList.add('_error-input');
        }
    }



    policyChecked() {
        const check = this.form.querySelector('.profile__checkbox-input');
        const chechErr = this.form.querySelector('.policy-err');
        if(!check.checked) {
            let errorName = "Ознакомьтесь с политикой конфиденциальности";
            let errorEl = document.createElement('span');
            errorEl.textContent = errorName;
            errorEl.classList.add('_error-txt');
            chechErr.appendChild(errorEl);

            return false
        } else {
            return true
        }
    }

    validateEmail() {
        const emailInput = this.form.querySelector('input[name=email]');
        const email = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let validEmail = emailPattern.test(email);
        if(!validEmail) {
            console.log('email not val');
            const errorName = "Введите верный Email";
            const inputWrap = emailInput.closest('.input-wrap');
            let errorEl = document.createElement('span');
            errorEl.textContent = errorName;
            errorEl.classList.add('_error-txt');
            emailInput.classList.add('_error-input');
            inputWrap.appendChild(errorEl);
            return false;
        } else {
            return true;
        }
    }

    createSuccsessMsg() {
        if(this.form.id == 'lk-form') {
            console.log(this.form.id);
        
        const succsessWrap = this.form.querySelector('.profile-succsess-msg');
        succsessWrap.textContent = "Изменения успешно внесены";

        } else if(this.form.id == 'reg-form') {
            document.querySelector('.regThanksLink').click();
        } if(this.form.id == 'callback-form') {
            document.querySelector('.callbackThanksLink').click();
        }
    }


    listenSubmit() {

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            if(!this.validateForm()) {
                return;
              }

              if(this.form.querySelector('input[name=email]') && this.form.querySelector('input[name=email]').value != "") {
                if(!this.validateEmail()) {
                    return;
                  }
              }

            if(this.form.id == "reg-form" || this.form.id == "lk-form") {
                if(!this.validatePasswords()) {
                    return;
                  }
    
            }

            if(this.form.id == "reg-form") {
                var captcha = grecaptcha.getResponse();

                if (!captcha.length) {
                    console.log(1);
                    $('#recaptchaError').text('* Вы не прошли проверку капчей');
                } else {
                    console.log(2);
                    $('#recaptchaError').text('');
                }
            }

            if(this.form.id == "lk-form") {
                if(!this.policyChecked()) {
                    return;
                  }
            }

            const xhr = new XMLHttpRequest();
            let formData = new FormData(this.form);
            console.log(formData);
            console.log('send form data');
    
            if(this.form.id == 'order-form') {
                xhr.open('POST', 'local/ajax/order.php');
            
            } else if(this.form.id =='auth-form') {

                xhr.open('POST', '/local/ajax/auth.php');

            } else if(this.form.id =='reg-form') {

                xhr.open('POST', '/local/ajax/reg.php');

            } else if(this.form.id =='callback-form') {

                xhr.open('POST', '/local/ajax/callback.php');

            } else if(this.form.id =='lk-form') {

                xhr.open('POST', '/local/ajax/lk.php');

            } else if(this.form.id =='restore-form') {

                xhr.open('POST', '/local/ajax/restore.php');
            } else {
                xhr.open('POST', '/local/ajax/test.php');
            }
              
            xhr.onload = () => {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                } else if(xhr.responseText=="noauth"){
                    console.error('Ошибка: ', xhr.status);
                    this.createErrAuth();
                } else if(xhr.responseText=="oldpasswrong") {
                    this.oldPassWrong();
                } else {
                    this.createSuccsessMsg();
                    console.log(xhr.responseText);
                }
            };

            xhr.send(formData);
            this.form.classList.add('sent');
            this.form.reset();

        });
    }

    maskInit() {
        if(this.form.querySelector('input[name=phone]')) {
        
        const phoneInput = this.form.querySelector('input[name=phone]');
        const maskOptions = {
          mask: '+{7}(000) 000-00-00'
        };
    
        const mask = IMask(phoneInput, maskOptions);
        }

        if(this.form.querySelector('input[name=date]')) {
        
            const dateInput = this.form.querySelector('input[name=date]');
            const maskOptions = {
                mask: Date,
                min: new Date(1990, 0, 1),
                max: new Date(2020, 0, 1),
                lazy: false
            };
        
            const mask = IMask(dateInput, maskOptions);
        }
    
        if(this.form.querySelector('input[name=time]')) {
        
            const timeInput = this.form.querySelector('input[name=time]');
            const maskOptions = {
                overwrite: true,
                autofix: true,
                mask: 'HH:MM',
                blocks: {
                    HH: {
                    mask: IMask.MaskedRange,
                    placeholderChar: 'HH',
                    from: 0,
                    to: 23,
                    maxLength: 2
                    },
                    MM: {
                    mask: IMask.MaskedRange,
                    placeholderChar: 'MM',
                    from: 0,
                    to: 59,
                    maxLength: 2
                    }
                }
            };
        
            const mask = IMask(timeInput, maskOptions);
        }




    }

    init() {
        this.listenSubmit();
        this.maskInit();
    }
}

if(document.querySelector('.item')) {
   
    formItem = new Form('item-form');
}


document.querySelectorAll('form').forEach(el => {
    if(el.id) {
        const form = new Form(el.id);
    }
    
})


function constructImages() {
    const colors = document.querySelectorAll('.color__input-wrap'),
          img    = document.querySelector('.construct__img img');


    colors.forEach(el => {
        el.addEventListener('click', () => {
            img.src = el.dataset.img;
        })
    })


}

if(document.querySelector('.construct')) {
    constructImages();
}


function sizesSelect() {

    if(document.querySelector('.construct__sizes')) {


        const selectors = document.querySelectorAll('[data-sizeselect]');
        const sizes = document.querySelectorAll('[data-size]');

        
        selectors.forEach(el => {
            el.addEventListener('click', () => {
                selectors.forEach(el=>el.classList.remove('active-size'));
                const size = el.dataset.sizeselect;
                el.classList.add('active-size');

                const allSizes = document.querySelectorAll('[data-size]');
                const activeSizes = document.querySelectorAll('[data-size="'+size+'"]');
                allSizes.forEach(el => el.classList.add('hidden'));
                activeSizes.forEach(el => el.classList.remove('hidden'));


            })
            
        })
        selectors[0].click();

    }
}

sizesSelect()