// 'use strict'

// SCROLL UP


// Получаем ссылку на кнопку прокрутки вверх
const scrollButton = document.getElementById('scroll-up');

// Добавляем обработчик события при клике на кнопку
scrollButton.addEventListener('click', function (e) {
  e.preventDefault(); // Предотвращаем переход по ссылке

  // Получаем текущую позицию прокрутки
  let currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Определяем, насколько далеко нужно прокрутить страницу к верху
  let scrollStep = currentPosition / 20; // Здесь можно настроить скорость прокрутки

  // Запускаем анимацию прокрутки
  function scrollToTop() {
    currentPosition -= scrollStep;

    // Прокручиваем страницу
    window.scroll(0, currentPosition);

    // Если еще не достигли верха страницы, продолжаем анимацию
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
    }
  }

  // Запускаем анимацию прокрутки
  scrollToTop();
});



// FEEDBACK-SHOW

const openCtaGroup = document.getElementById('open-cta');

const contactUsBtnGroup = document.querySelector('.contact-us-btn-group');

openCtaGroup.addEventListener('click', () => {
  contactUsBtnGroup.classList.toggle('show-contact-us-btn-group');
});



// COUNTER

document.addEventListener('DOMContentLoaded', function () {
  // Получаем ссылки на все счетчики на странице
  let counters = document.querySelectorAll('.counter');

  // Обрабатываем каждый счетчик отдельно
  counters.forEach(function (counter) {
    let decrementBtn = counter.querySelector('.decrement');
    let incrementBtn = counter.querySelector('.increment');
    let countSpan = counter.querySelector('.count');

    // Устанавливаем начальное значение счетчика для каждого счетчика
    let count = 1;
    countSpan.textContent = count;

    // Обработчик события для уменьшения значения
    decrementBtn.addEventListener('click', function () {
      if (count > 1) {
        count--;
        countSpan.textContent = count;
      }
    });

    // Обработчик события для увеличения значения
    incrementBtn.addEventListener('click', function () {
      count++;
      countSpan.textContent = count;
    });
  });
});




// RANGE-FROM-TO-SLIDER

(function () {
  const sliders = document.querySelectorAll('#rangeSlider');

  sliders.forEach(function (parent) {
    const rangeS = parent.querySelectorAll('input[type=range]');
    const numberS = parent.querySelectorAll('input[type=number]');

    rangeS.forEach(function (el) {
      el.oninput = function () {
        let slide1 = parseFloat(rangeS[0].value);
        let slide2 = parseFloat(rangeS[1].value);

        if (slide1 > slide2) {
          [slide1, slide2] = [slide2, slide1];
        }

        numberS[0].value = slide1;
        numberS[1].value = slide2;
      };
    });

    numberS.forEach(function (el) {
      el.oninput = function () {
        let number1 = parseFloat(numberS[0].value);
        let number2 = parseFloat(numberS[1].value);

        if (number1 > number2) {
          let tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }

        rangeS[0].value = number1;
        rangeS[1].value = number2;
      };
    });
  });
})();




// INPUT-TELL

// document.addEventListener('DOMContentLoaded', function () {
//   'use strict';
//   const input = document.querySelectorAll('input[name=leyka_donor_phone]');
//   const itiTel = document.querySelector('.iti.iti--allow-dropdown.iti--separate-dial-code');
//   const submitButton = document.querySelector('.button-secondary-text');
//   let iti;

//   if (itiTel) {
//     iti.destroy();
//     // Get the current number in the given format
//   }

//   for (let i = 0; i < input.length; i++) {
//     iti = intlTelInput(input[i], {
//       autoHideDialCode: false,
//       autoPlaceholder: 'aggressive',
//       initialCountry: 'auto',
//       separateDialCode: true,
//       preferredCountries: ['ua', 'pl'],
//       customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
//         return '' + selectedCountryPlaceholder.replace(/[0-9]/g, 'X');
//       },
//       utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js'
//     });

//     input[i].addEventListener('focus', function (e) {
//       const pl = this.getAttribute('placeholder') + '';
//       const res = pl.replace(/X/g, '9');

//       if (res != 'undefined') {
//         $(this).inputmask(res, {
//           placeholder: 'X',
//           // clearMaskOnLostFocus: true
//         });
//       }
//     });

   

//     // input[i].addEventListener('focusout', function (e) {
//     //   const intlNumber = iti.getNumber();

//     //   // Подсчет количества символов во вводимом значении поля без учета пробелов
//     //   const characterCount = intlNumber.replace(/\s/g, '').length;
//     //   console.log('Количество символов без пробелов: ' + characterCount);

//     //   // Проверяем количество символов и изменяем класс кнопки
//     //   if (characterCount < 10) {
//     //     submitButton.classList.remove('button-main-text');
//     //     submitButton.classList.add('button-secondary-text');
//     //     submitButton.disabled = true; // Запрещаем нажатие кнопки
//     //   } else {
//     //     submitButton.classList.remove('button-secondary-text');
//     //     submitButton.classList.add('button-main-text');
//     //     submitButton.disabled = false; // Разрешаем нажатие кнопки
//     //   }
//     // });

//     input[i].addEventListener('blur', function (e) {
//       const intlNumber = iti.getNumber();
//       input[i].dataset.telValue = intlNumber
//       console.log(intlNumber);
//     });

//     //   input[i].addEventListener('blur', function() {
//     //   const originalPlaceholder = this.getAttribute('data-original-placeholder');
//     //   if (!this.value) {
//     //     this.value = originalPlaceholder;
//     //   }
//     // });
//   }
// });


// CALL-BACK-MODAL
$(document).ready(function() {
  const phoneInputClass = ".call-back-modal-tel";
  const callBackForm = document.querySelector('.call-back-modal-form');
  const callBackInputTel = document.querySelector(phoneInputClass);
  const callBackButton = document.querySelector('.call-back-modal-button');

    const iti = window.intlTelInput(callBackInputTel, {
      formatOnDisplay: true,
      hiddenInput: "full_number",
      preferredCountries: ['ua', 'pl'],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
    });


    $(phoneInputClass).on("countrychange", function(event) {
      // Отримання інформації про вибрану країну, щоб знати яку країну обрано
      const selectedCountryData = iti.getSelectedCountryData();

      // Отримання номера зразка для вибраної країни, щоб використати його як плейсхолдер
      const newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL);

      // Обнулення телефонного номеру
      iti.setNumber("");
      
      // Маска заповнювач, яка замінить усі чила на 0
      const mask = newPlaceholder.replace(/[1-9]/g, "0");
      
      // Накладання маски на input
      $(this).mask(mask);
    });

    // Слухач подій на полі для вводу номеру телефону 
    // потрібен для того щоб зробити кнопку активною
    callBackInputTel.addEventListener('input', checkQuickOrderInputs)


    // // Якщо введено валідний номер телефону - кнопка "Відправити" стане активною
    function checkQuickOrderInputs() {
      callBackButton.classList.toggle('disabled-button', !(iti.isValidNumber()));
      callBackButton.disabled = !(iti.isValidNumber());
    }

    // Обробник події 'submit' при натисканні кнопки "Відправити"
    callBackForm.addEventListener('submit', async (event) => {
      event.preventDefault();
    
      const telValue = iti.getNumber();
    
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts111111/1', // потрібно буде змінити коли буде готовий ендпоінт 
          { telValue }
        );
    
        console.log('Успішний POST-запит:', response.data);
      } catch (error) {
        console.error('Помилка POST-запиту:', error);
      }
    });

    // Коли плагін завантажується вперше потрібно тригернути "countrychange" подію вручну
    iti.promise.then(function() {
      $(phoneInputClass).trigger("countrychange");
    });
  }
);

// SLIDER-header

document.addEventListener('DOMContentLoaded', function () {
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

  document.querySelectorAll('.slider-container-header').forEach(function (slider) {
    const group = slider.querySelector('.slide_group');
    const slides = slider.querySelectorAll('.slide-header');
    const bulletArray = [];
    let currentIndex = 0;
    let timeout;
    let touchStartX = 0;
    let touchEndX = 0;

    function move(newIndex) {
      let animateLeft, slideLeft;

      advance();

      if (group.classList.contains('animated') || currentIndex === newIndex) {
        return;
      }

      bulletArray[currentIndex].classList.remove('active');
      bulletArray[newIndex].classList.add('active');

      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }

      group.classList.add('animated');

      slides[newIndex].style.opacity = '1';
      slides[newIndex].style.zIndex = 'var(--layer-2)';
      slides[newIndex].style.left = slideLeft;
      group.style.left = animateLeft;

      setTimeout(function () {
        group.classList.remove('animated');

        slides[currentIndex].style.opacity = '0';
        slides[currentIndex].style.zIndex = '0';
        slides[newIndex].style.left = '0';
        group.style.left = '0';
        currentIndex = newIndex;
      }, 500);
    }

    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (currentIndex < (slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000); // Change the interval to 4000ms (4 seconds)
    }

    // Set initial opacity to 1 for the first slide
    slides[currentIndex].style.opacity = '1';
    slides[currentIndex].style.zIndex = 'var(--layer-2)';

    slider.querySelector('.next_btn').addEventListener('click', function () {
      if (currentIndex < (slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });

    slider.querySelector('.previous_btn').addEventListener('click', function () {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(slides.length - 1);
      }
    });

    slides.forEach(function (slide, index) {
      const button = document.createElement('a');
      button.className = 'slide_btn';
      button.innerHTML = ' ';

      if (index === currentIndex) {
        button.classList.add('active');
      }

      button.addEventListener('click', function () {
        move(index);
      });

      slider.querySelector('.slide_buttons').appendChild(button);
      bulletArray.push(button);
    });

    // Swipe Gesture Handling
    if (isTouchDevice()) {
      slider.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
      });

      slider.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
      });

      function handleSwipe() {
        const swipeThreshold = 50;

        if (touchEndX - touchStartX > swipeThreshold) {
          if (currentIndex !== 0) {
            move(currentIndex - 1);
          } else {
            move(slides.length - 1);
          }
        } else if (touchStartX - touchEndX > swipeThreshold) {
          if (currentIndex < slides.length - 1) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        }
      }
    }

    // Start the automatic slide transition
    advance();
  });
});



document.addEventListener('DOMContentLoaded', function () {

  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

  document.querySelectorAll('.slider-product-container').forEach(function (slider) {
    const group = slider.querySelector('.slide_group');
    const slides = slider.querySelectorAll('.slide-card-container');
    const bulletArray = [];
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    function move(newIndex) {
      let animateLeft, slideLeft;

      if (group.classList.contains('animated') || currentIndex === newIndex) {
        return;
      }

      bulletArray[currentIndex].classList.remove('active');
      bulletArray[newIndex].classList.add('active');

      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }

      group.classList.add('animated');

      slides[newIndex].style.opacity = '1';
      slides[newIndex].style.zIndex = 'var(--layer-2)';
      slides[newIndex].style.left = slideLeft;
      group.style.left = animateLeft;

      setTimeout(function () {
        group.classList.remove('animated');

        slides[currentIndex].style.opacity = '0';
        slides[currentIndex].style.zIndex = '0';
        slides[newIndex].style.left = '0';
        group.style.left = '0';
        currentIndex = newIndex;
      }, 500);
    }

    // Set initial opacity to 1 for the first slide
    slides[currentIndex].style.opacity = '1';
    slides[currentIndex].style.zIndex = 'var(--layer-2)';

    slides.forEach(function (slide, index) {
      const button = document.createElement('a');
      button.className = 'slide_btn';
      button.innerHTML = ' ';

      if (index === currentIndex) {
        button.classList.add('active');
      }

      button.addEventListener('click', function () {
        move(index);
      });

      slider.querySelector('.slide_buttons').appendChild(button);
      bulletArray.push(button);
    });

    // Swipe Gesture Handling
    if (isTouchDevice()) {
      slider.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
      });

      slider.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
      });

      function handleSwipe() {
        const swipeThreshold = 50;

        if (touchEndX - touchStartX > swipeThreshold) {
          if (currentIndex !== 0) {
            move(currentIndex - 1);
          } else {
            move(slides.length - 1);
          }
        } else if (touchStartX - touchEndX > swipeThreshold) {
          if (currentIndex < slides.length - 1) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        }
      }
    }
  });
});

// HEADER-desktop

// SEARCH

document.addEventListener('DOMContentLoaded', function () {
  const searchInputs = document.querySelectorAll('.search-input-trigger');
  const searchResultsContainers = document.querySelectorAll('.search-results-container');

  if (searchInputs.length !== searchResultsContainers.length) {
    console.error('Number of search inputs does not match the number of result containers.');
    return; // Stop execution if the number of inputs and containers don't match.
  }

  function toggleSearchResults(searchResultsContainer) {
    if (searchResultsContainer.classList.contains('open')) {
      searchResultsContainer.style.maxHeight = '0';
      searchResultsContainer.style.opacity = '0';
      searchResultsContainer.style.pointerEvents = 'none';
      setTimeout(() => {
        searchResultsContainer.style.display = 'none';
      }, 500); // Adjust the time to match your animation duration.
    } else {
      searchResultsContainer.style.display = 'flex';
      setTimeout(() => {
        searchResultsContainer.style.maxHeight = '380px';
        searchResultsContainer.style.opacity = '1';
        searchResultsContainer.style.pointerEvents = 'auto';
      }, 10); // Wait for the container to be displayed before animating.
    }
    searchResultsContainer.classList.toggle('open');
  }

  searchInputs.forEach((searchInput, index) => {
    const searchResultsContainer = searchResultsContainers[index];

    searchInput.addEventListener('focus', () => {
      toggleSearchResults(searchResultsContainer);
    });

    searchInput.addEventListener('blur', () => {
      toggleSearchResults(searchResultsContainer);
    });
  });
});

// Categoties

document.addEventListener('DOMContentLoaded', function () {
  const productCategoriesTriggers = document.querySelectorAll('.product-categories-container-trigger');
  const productCategoriesContainers = document.querySelectorAll('.product-categories-container');

  if (productCategoriesTriggers.length !== productCategoriesContainers.length) {
    console.error('Number of product categories triggers does not match the number of product categories containers.');
    return; // Stop execution if the number of triggers and containers don't match.
  }

  function toggleProductCategoriesContainer(productCategoriesContainer) {
    if (productCategoriesContainer.classList.contains('open')) {
      productCategoriesContainer.style.maxHeight = '0';
      productCategoriesContainer.style.opacity = '0';
      productCategoriesContainer.style.padding = '0';
      productCategoriesContainer.style.pointerEvents = 'none';
      setTimeout(() => {
        productCategoriesContainer.style.display = 'none';
      }, 500); // Adjust the time to match your animation duration.
    } else {
      productCategoriesContainer.style.display = 'flex';
      setTimeout(() => {
        productCategoriesContainer.style.maxHeight = '460px';
        productCategoriesContainer.style.opacity = '1';
        productCategoriesContainer.style.padding = '30px 0';
        productCategoriesContainer.style.pointerEvents = 'auto';
      }, 10); // Wait for the container to be displayed before animating.
    }
    productCategoriesContainer.classList.toggle('open');
  }

  productCategoriesTriggers.forEach((productCategoriesTrigger, index) => {
    const productCategoriesContainer = productCategoriesContainers[index];

    productCategoriesTrigger.addEventListener('focus', () => {
      toggleProductCategoriesContainer(productCategoriesContainer);
    });

    productCategoriesTrigger.addEventListener('blur', () => {
      toggleProductCategoriesContainer(productCategoriesContainer);
    });
  });
});



// MENU-MOBILE

let startX; // Начальная координата касания
const menu = document.getElementById('menu-header');
const body = document.querySelector('body');

function toggleMenu() {
  menu.classList.toggle('menu-open');
  body.classList.toggle('menu-opened');
}

function closeMenu() {
  menu.classList.remove('menu-open');
  body.classList.remove('menu-opened');
}

document.addEventListener('DOMContentLoaded', function () {
  // Обработчик события касания (touchstart)
  document.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX; // Записываем начальную координату касания
  });

  // Обработчик события завершения касания (touchend)
  document.addEventListener('touchend', function (e) {
    const endX = e.changedTouches[0].clientX; // Получаем конечную координату касания
    const menuOpen = menu.classList.contains('menu-open');

    // Если меню открыто и пользователь свайпнул справа налево
    if (menuOpen && endX < startX) {
      closeMenu();
    }
  });

  const trigger = document.querySelector('.header-menu-trigger');
  trigger.addEventListener('click', toggleMenu);

  const overlay = document.getElementById('overlay');
  overlay.addEventListener('click', closeMenu);
});

// HEADER-AUTO-MARGIN

document.addEventListener('DOMContentLoaded', function () {
  const headerElement = document.querySelector('header');

  // Если элемент <header> найден
  if (headerElement) {
    // Находим следующий элемент с помощью nextElementSibling
    const nextElement = headerElement.nextElementSibling;

    // Если следующий элемент найден, добавляем класс "header-margin"
    if (nextElement) {
      nextElement.classList.add('header-margin');
    }
  }
});

// QUICK-SELECTION-MENU

    // CATEGORY-LIST
// змінна quickSelectionMenuCategories — це тимчасовий список значень 
// для випадаючого списку categories("Підкатегорія продукту"),
// актуальні значення згодом надасть DjangoTemplateEngine
const quickSelectionMenuCategories = [
  "Квіти на день народження",
  "На 8 березня",
  "На 9 березня",
  "На 10 березня",
  "На 11 березня",
  "На 12 березня",
  "На 13 березня"
];

const categoryList = document.querySelector('.category-list');

// Вставка списку значень для "Підкатегорія продукту" в вигляді HTML-рядка
// за допомогою `insertAdjacentHTML` до вказаного місця в структурі DOM
categoryList.insertAdjacentHTML('afterbegin', `
  <ul class="accordion-list-group">
    ${quickSelectionMenuCategories.map((category, i) => `
      <li class="radio-input-group">
        <input
          class="form-check-input quick-selection-menu-category"
          type="radio"
          name="сategoryName"
          id="сategoryName-${i}"
        />
        <label class="quick-selection-menu-label" for="сategoryName-${i}">${category}</label>
      </li>
    `).join('')}
  </ul>
`);

    // PRODUCT-LIST
// змінна quickSelectionMenuProducts — це тимчасовий список значень для випадаючого списку products("Квіти"),
// актуальні значення згодом будуть доступні коли буде реалізовано відповідний ендПоінт
let quickSelectionMenuProducts = [
  "Рози",
  "Тюльпати",
  "Хризантеми",
  "Еустоми",
  "Лілії",
  "Гвоздики",
  "Гербери",
  "Гортензії",
  "Піони",
  "Ромашки",
];

const productList = document.querySelector('.product-list');

// Вставка списку значень для "Квіти" в вигляді HTML-рядка
// за допомогою `insertAdjacentHTML` до вказаного місця в структурі DOM
productList.insertAdjacentHTML('afterbegin', `
  <ul class="accordion-list-group">
    ${quickSelectionMenuProducts.map((product, i) => `
      <li class="radio-input-group">
        <input
          class="form-check-input quick-selection-menu-product"
          type="radio"
          name="productName"
          id="productName-${i}"
        />
        <label class="quick-selection-menu-label" for="productName-${i}">${product}</label>
      </li>
    `).join('')}
  </ul>
`);

const accordionCategory = document.querySelector('.accordion-category');
const quickSelectionMenuAccordions = document.querySelectorAll('.disabled-text');
const quickSelectionMenuBtn = document.querySelector('.disabled-button');

// При виборі радіобатону зі списку categories("Підкатегорія продукту")
// Відправиться запит на сервер і в разі успішного запиту 
// відповідь встановиться в змінну quickSelectionMenuProducts
// і відкриється доступ до взаємодії з наступними випадаючими списками і кнопки
accordionCategory.addEventListener('change', event => {
  const item = event.target.closest('.quick-selection-menu-category:checked');

  if (!item || !accordionCategory.contains(item)) {
    return;
  }

  event.preventDefault();

  const selectedCategory = item.nextElementSibling.textContent;

  try {
    async function fetchData() {
      // Вміст GET-запиту потрібно буде змінити коли буде готовий ендпоінт 
      // і відповідно до нього правильно передати параметри
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts111111/1', selectedCategory);
      quickSelectionMenuProducts = response.data;
    }
  
    fetchData();
  } catch (error) {
    console.error('Помилка GET-запиту:', error);
  } finally {

    // вміст finally потрібно буде перемістити в try і він має виконуватися після отримання відповіді
    [...quickSelectionMenuAccordions].forEach(accordion => {
      accordion.disabled = false
      accordion.classList.remove('disabled-text');
    });
    quickSelectionMenuBtn.disabled = false;
    quickSelectionMenuBtn.classList.remove('disabled-button');
  }
});

    // QUICK-SELECTION-MENU SUBMIT
// змінна filteredProductsList — це тимчасовий масив об'єктів для карточок, 
// які відрендеряться після після того як користувач відправить запит у quick selection menu,
// актуальні значення згодом будуть доступні коли буде реалізовано відповідний ендПоінт
const filteredProductsList = [
  {
    img_url: './img/flower-img.png',
    title: 'Назва квітки 1',
    price: '199',
    discount_price: '179,00',
    discount: '10',
    product_url: 'https://jsonplaceholder.typicode.com/posts111111/1',
    article: '1111',
  },
  {
    img_url: './img/flower-img.png',
    title: 'Назва квітки 2',
    price: '299',
    discount_price: '279,00',
    discount: '20',
    product_url: 'https://jsonplaceholder.typicode.com/posts111111/1',
    article: '2222',
  },
  {
    img_url: './img/flower-img.png',
    title: 'Назва квітки 3',
    price: '399',
    discount_price: '379,00',
    discount: '30',
    product_url: 'https://jsonplaceholder.typicode.com/posts111111/1',
    article: '3333',
  },
  {
    img_url: './img/flower-img.png',
    title: 'Назва квітки 4',
    price: '499',
    discount_price: '479,00',
    discount: '40',
    product_url: 'https://jsonplaceholder.typicode.com/posts111111/1',
    article: '4444',
  },
  {
    img_url: './img/flower-img.png',
    title: 'Назва квітки 5',
    price: '599',
    discount_price: '579,00',
    discount: '50',
    product_url: 'https://jsonplaceholder.typicode.com/posts111111/1',
    article: '5555',
  },
  {
    img_url: './img/flower-img.png',
    title: 'Назва квітки 6',
    price: '699',
    discount_price: '679,00',
    discount: '60',
    product_url: 'https://jsonplaceholder.typicode.com/posts111111/1',
    article: '6666',
  },
  {
    img_url: './img/flower-img.png',
    title: 'Назва квітки 7',
    price: '799',
    discount_price: '779,00',
    discount: '70',
    product_url: 'https://jsonplaceholder.typicode.com/posts111111/1',
    article: '7777',
  },
  {
    img_url: './img/flower-img.png',
    title: 'Назва квітки 8',
    price: '899',
    discount_price: '879,00',
    discount: '80',
    product_url: 'https://jsonplaceholder.typicode.com/posts111111/1',
    article: '8888',
  },
];

// Слухач подій для quick selection menu при події submit
const quickSelectionMenuForm = document.querySelector('.quick-selection-menu-form');

quickSelectionMenuForm.addEventListener('submit', event => {
  event.preventDefault();

  const selectedProduct = document.querySelector('.quick-selection-menu-product:checked')
    .nextElementSibling.textContent;
  const minBudget = document.querySelector('.quick-selection-menu-min-budget').value;
  const maxBudget = document.querySelector('.quick-selection-menu-product-max-budget').value;

  console.log({selectedProduct, minBudget, maxBudget});
  if (!selectedProduct.length) {
    return;
  }

  try {
    async function fetchData() {
      // Вміст GET-запиту потрібно буде змінити коли буде готовий ендпоінт 
      // і відповідно до нього правильно передати параметри.
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts111111/1', 
        {selectedProduct, minBudget, maxBudget}
      );

      // В разі успіху присвоюємо відповідь в змінну
      filteredProductsList = response.data;
    }
  
    fetchData();
  } catch (error) {
    console.error('Помилка GET-запиту:', error);
  }
});

// Рендеремо відфільтрований список карточок які отримали з сервера, 
// якщо карточок немає то наступний код не відрендериться 

const quickSelectionMenuSlider = document.querySelector('.quick-selection-menu-slider');

if (filteredProductsList.length) {
  quickSelectionMenuSlider.insertAdjacentHTML('afterbegin', `
    <section class="results-fast-search m-b-60">
      <div class="results-fast-search-container">
        <div class="title-box m-b-70">
          <h4 class="h1-42-auto-bold">Результати</h4>
          <div class="fast-search-results-info">
            <p class="p-16-auto-medium">Знайдено</p>
            <p class="p-16-auto-medium red">
              <span class="fast-search-results-count"> ${filteredProductsList.length} </span>
              товарів
            </p>
          </div>
        </div>
        <div class="slider-product-container">
          <div class="slide_viewer">
            <div class="slide_group">
              <div class="slide-card-container">
                ${filteredProductsList.map((product, i) => `
                  <div class="card-xl">
                    <div class="discount">
                      <p class="p-16-auto-medium white">
                        ${product.discount}%
                      </p>
                    </div>
                    <div class="img-box">
                      <img
                        src="${product.img_url}"
                        alt="name-of-this-flower"
                      />
                    </div>
                    <div class="prod-desc">
                      <div class="prod-title">
                        <h3 class="h2-24-auto-bold">
                          ${product.title}
                        </h3>
                      </div>
                      <div class="prod-price">
                        <div class="current-price">
                          <p class="h2-24-auto-medium red">
                            ${product.discount_price} ₴
                          </p>
                        </div>
                        <div class="old-price">
                          <p class="p-16-auto-medium grey">
                            ${product.price} ₴
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-btn">
                      <a
                        class="button-main-text-icon p-16-auto-bold"
                        href="#"
                      >
                        <span class="icon"></span>
                        До кошика
                      </a>
                      <a
                        class="p-16-auto-regular red quick-order-link"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#quickOrderModal"
                        data-product-id="${i}"
                      >
                        Швидке замовлення
                      </a>
                    </div>
                  </div>
                  ${
                    (i + 1) % 6 === 0 
                      ? `</div>
                          <div class="slide-card-container">
                        `
                      : ''
                  }
                `).join('')}
              </div>
            </div>
          </div>
          <div class="slide_buttons"></div>
        </div>
      </div>
    </section>
  `)
}

// MODAL-INDIVIDUAL-ORDER
$(document).ready(function() {
  const phoneInputClass = ".individual-order-modal-tel";
  const individualOrderForm = document.querySelector('.individual-order-modal-form');
  const individualOrderName = document.querySelector('.individual-order-modal-name');
  const individualOrderTel = document.querySelector(phoneInputClass);
  const individualOrderMinBudget = document.querySelector('.individual-order-modal-min-budget');
  const individualOrderMaxBudget = document.querySelector('.individual-order-modal-max-budget');
  const individualOrderButton = document.querySelector('.individual-order-modal-button');
  const individualOrderFileInput = document.querySelector('.individual-order-modal-file-input');
  const individualOrderFilePlaceholder = document.querySelector('.individual-order-modal-placeholder');
  const individualOrderFileCloseIcon = document.querySelector('.individual-order-modal-icon-close');
  const individualOrderFileLoadIcon = document.querySelector('.individual-order-modal-icon-load');

    const iti = window.intlTelInput(individualOrderTel, {
      formatOnDisplay: true,
      hiddenInput: "full_number",
      preferredCountries: ['ua', 'pl'],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
    });


    $(phoneInputClass).on("countrychange", function(event) {

      // Отримання інформації про вибрану країну, щоб знати яку країну обрано
      const selectedCountryData = iti.getSelectedCountryData();

      // Отримання номера зразка для вибраної країни, щоб використати його як плейсхолдер
      const newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL);

      // Обнулення телефонного номеру
      iti.setNumber("");
      
      // Маска заповнювач, яка замінить усі чила на 0
      const mask = newPlaceholder.replace(/[1-9]/g, "0");
      
      // Накладання маски на input
      $(this).mask(mask);
    });

    // Слухачі подій на полях для вводу номеру телефону і ім'я
    // потрібні для того щоб зробити кнопку активною
    individualOrderName.addEventListener('input', checkIndividualOrderInputs)
    individualOrderTel.addEventListener('input', checkIndividualOrderInputs)


    // // Якщо введено ім'я і валідний номер телефону - кнопка "Залишити заявку" стане активною
    function checkIndividualOrderInputs() {
      const nameValue = individualOrderName.value.trim();

      individualOrderButton.classList.toggle('disabled-button', !(nameValue && iti.isValidNumber()));
      individualOrderButton.disabled = !(nameValue && iti.isValidNumber());
    }

    // Коли користувач завантажить зображення в полі де завантажується файл 
    // з'явиться напис з назвою завантаженого файла і іконка "Х" при кліку 
    // на яку файл видалиться з завантажених і повернуться дефолтний вміст поля
    individualOrderFileInput.addEventListener('change', () => {
      if (individualOrderFileInput.files.length > 0) {
        individualOrderFileLoadIcon.style.display = 'none'; 
        individualOrderFileCloseIcon.style.display = 'block'; 
        individualOrderFilePlaceholder.classList.add('individual-order-modal-placeholder-loaded');
        individualOrderFilePlaceholder.innerText = individualOrderFileInput.files[0].name;
        individualOrderFileCloseIcon.addEventListener('click', deleteFile);
      }
    });

    // Функція для видалення завантаженого фото
    function deleteFile() {
      individualOrderFileInput.value = ''; 
      individualOrderFileLoadIcon.style.display = 'block';
      individualOrderFileCloseIcon.style.display = 'none';
      individualOrderFilePlaceholder.classList.remove('individual-order-modal-placeholder-loaded');
      individualOrderFilePlaceholder.innerText = 'Фото прикладу';
    }

    // Обробник події 'submit' при натисканні кнопки "Залишити заявку"
    individualOrderForm.addEventListener('submit', async (event) => {
      event.preventDefault();
    
      const nameValue = individualOrderName.value.trim();
      const telValue = iti.getNumber();
      const minBudget = individualOrderMinBudget.value;
      const maxBudget = individualOrderMaxBudget.value;
      const file = individualOrderFileInput.files[0];
    
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts111111/1', // потрібно буде змінити коли буде готовий ендпоінт 
          { nameValue, telValue, minBudget, maxBudget, file }
        );
    
        console.log('Успішний POST-запит:', response.data);
      } catch (error) {
        console.error('Помилка POST-запиту:', error);
      }
    });

    // Коли плагін завантажується вперше потрібно тригернути "countrychange" подію вручну
    iti.promise.then(function() {
      $(phoneInputClass).trigger("countrychange");
    });
  }
);

// MODAL-QUICK-ORDER
$(document).ready(function() {
  const phoneInputClass = ".quick-order-modal-tel";
  const quickOrderForm = document.querySelector('.quick-order-modal-form');
  const quickOrderName = document.querySelector('.quick-order-modal-name');
  const quickOrderTel = document.querySelector(phoneInputClass);
  const quickOrderButton = document.querySelector('.quick-order-modal-button');

    const iti = window.intlTelInput(quickOrderTel, {
      formatOnDisplay: true,
      hiddenInput: "full_number",
      preferredCountries: ['ua', 'pl'],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
    });


    $(phoneInputClass).on("countrychange", function(event) {

      // Отримання інформації про вибрану країну, щоб знати яку країну обрано
      const selectedCountryData = iti.getSelectedCountryData();

      // Отримання номера зразка для вибраної країни, щоб використати його як плейсхолдер
      const newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL);

      // Обнулення телефонного номеру
      iti.setNumber("");
      
      // Маска заповнювач, яка замінить усі чила на 0
      const mask = newPlaceholder.replace(/[1-9]/g, "0");
      
      // Накладання маски на input
      $(this).mask(mask);
    });

    // Слухачі подій на полях для вводу номеру телефону і ім'я
    // потрібні для того щоб зробити кнопку активною
    quickOrderName.addEventListener('input', checkQuickOrderInputs)
    quickOrderTel.addEventListener('input', checkQuickOrderInputs)


    // // Якщо введено ім'я і валідний номер телефону - кнопка "Залишити заявку" стане активною
    function checkQuickOrderInputs() {
      const nameValue = quickOrderName.value.trim();

      quickOrderButton.classList.toggle('disabled-button', !(nameValue && iti.isValidNumber()));
      quickOrderButton.disabled = !(nameValue && iti.isValidNumber());
    }

    // Обробник події 'submit' при натисканні кнопки "Залишити заявку"
    quickOrderForm.addEventListener('submit', async (event) => {
      event.preventDefault();
    
      const nameValue = quickOrderName.value.trim();
      const telValue = iti.getNumber();
    
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts111111/1', // потрібно буде змінити коли буде готовий ендпоінт 
          { nameValue, telValue }
        );
    
        console.log('Успішний POST-запит:', response.data);
      } catch (error) {
        console.error('Помилка POST-запиту:', error);
      }
    });

    // Коли плагін завантажується вперше потрібно тригернути "countrychange" подію вручну
    iti.promise.then(function() {
      $(phoneInputClass).trigger("countrychange");
    });
  }
);

// Додаємо інформацію з вибраної карточки в modal quick order
document.addEventListener('DOMContentLoaded', function () {
  const quickOrderButton = document.querySelector('.results-fast-search');

  // Знаходимо 
  quickOrderButton.addEventListener('click', (event) => {
    const card = event.target.closest('.quick-order-link');

    if (!card || !quickOrderButton.contains(card)) {
      return;
    }

    // Отримуємо з дата-атрибута id карточки по якій було зроблено клік
    const productId = card.dataset.productId;
    // Знаходимо потрібний об'єкт з даними зі списку продуктів
    const selectedProduct = filteredProductsList[productId];
    
    const prodTitle = document.querySelector('.quick-order-modal-card-title');
    const prodArticle = document.querySelector('.quick-order-modal-card-article');
    const currentPrice = document.querySelector('.quick-order-modal-card-price');
    const oldPrice = document.querySelector('.quick-order-modal-card-old-price');
    const prodImg = document.querySelector('.quick-order-modal-card-img');

    // Призначаємо дані продукта в картку в modal quick order
    prodTitle.textContent = selectedProduct.title;
    prodArticle.textContent = `Артикул: ${selectedProduct.article}`;
    currentPrice.textContent = `${selectedProduct.discount_price} ₴`;
    oldPrice.textContent = `${selectedProduct.price} ₴`;
    prodImg.src = selectedProduct.img_url;
    prodImg.alt = selectedProduct.title;
  });
});
