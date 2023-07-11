class Catalog {
    constructor(id) {

        this.catalog = document.querySelector(id);
        this.items = this.catalog.querySelectorAll('.catalog__item');
        this.init()
    }

    initGrid() {
        
        if(window.innerWidth > 1000) {
            
            for(let i = 0; i < this.items.length; i++) {
                
                if (i % 7 < 3) {
                    this.items[i].classList.add('third');
                } else if (i % 7 >= 3 && i % 7 < 7) {
                    this.items[i].classList.add('fourth');
                }
            }

        } else if(window.innerWidth <= 999 && window.innerWidth > 700) {

            for(let i = 0; i < this.items.length; i++) {
                if (i % 5 < 2) {
                    this.items[i].classList.add('second');
                } else if (i % 5 >= 2 && i % 5 < 5) {
                    this.items[i].classList.add('third');
                }
            }
        } else if(window.innerWidth <= 699) {

            for(let i = 0; i < this.items.length; i++) {
                if (i % 3 < 1) {
                    this.items[i].classList.add('once');
                } else if (i % 3 >= 1 && i % 3 < 3) {
                    this.items[i].classList.add('second');
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
            autoplay: true,
            autoplaySpeed: 2500,
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
                    dots: true
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
                      slidesToShow: 4
                      
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
        $('.item__add-items').slick('slickGoTo', 0);
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
    constructor() {
        this.modal = document.querySelector('.modal');
        this.triggers = document.querySelectorAll('[data-modal]');
        this.container = document.querySelector('.modal__content-inner');
        this.init();
    }


    listenOpenTriggers() {
        this.triggers.forEach((trigger)=>{
            trigger.addEventListener('click', () => {
                this.templateName = trigger.dataset.modal;
                this.initTemplate();
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
        this.template = document.querySelector('.'+this.templateName);
        this.container.innerHTML = this.template.innerHTML;
    }

    openModal() {
        this.modal.classList.add('opened');
        document.body.classList.add('_locked');
        this.initAdditionals();
        this.listenCloseTriggers();
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
                      slidesToShow: 1
                      
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
        this.mainItemImg = document.querySelectorAll('.item__slider-main-slide')[0].querySelector('img').src;

        this.addedImg.src = this.mainItemImg;


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
        
    }
}


if(document.querySelector('.item')) {
    const modal = new Modal();
}





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