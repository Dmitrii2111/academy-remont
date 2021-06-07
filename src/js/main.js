

// Меню выплывает справа
$(document).ready(function() {
  var $toggleButton = $('.toggle-button'),
      $menuWrap = $('.menu-wrap');
  $toggleButton.on('click', function() {
      $(this).toggleClass('button-open');
      $menuWrap.toggleClass('menu-show');
  });
});
$(document).ready(function() {
  var $toggleButton = $('.toggle-button'),
      $menuWrap = $('.menu-wrap');
  $toggleButton.on('click', function() {
      $(this).toggleClass('button-open');
      $menuWrap.toggleClass('menu-show');
  });
});
// Калькулятор стоимости ремонта
$(document).ready(function() {
  // Входные Данные забитые клиентом в CMS
  var calculation = {
    areaType: {
      forLiving: 1,
      notForLiving: 1.5
    },
    typeOfRepair: {
      repair: 10000,
      designRepair: 15000,
      allInclude: 20000
    },
    square: 70
  }

// Стартовые значения при загрузке
  var calculate = (calculation.areaType.forLiving * calculation.typeOfRepair.repair * calculation.square) 

  $('.price').val(toString(calculate)) 


  function toString( number) { // Преобразование результата к строке вида 000 000 Руб 
    number = String(number)
    var str = number.split('').reverse()
    for(var i=3; i<= str.length; i+=4) {
      str.splice(i, 0, ' ')
    }
    number = str.reverse().join('') + ' Руб'
    return number
  }

  function priceCalculate() { //Рассчет стоимости
    var area = $('.active-state.areaType').attr('id')  
    var repair = $('.active-state.typeOfRepair').attr('id')
    var square = $('.square').val()
    calculate = (calculation.areaType[area] * calculation.typeOfRepair[repair] * square)
    $('.price').val(toString(calculate)) 
  }

  

  $('.check').on('click', function() { // Изменение состояения кнопок и инпута
    $(this).addClass('active-state').siblings().removeClass('active-state')
    priceCalculate()
  })
  $('.square').change(function(){
    priceCalculate()
  })
})

$(document).ready(function(){
  $('.menu_link').on('click', function() {
    if($(this).attr('href') != undefined && $(this).attr('href') != '') {
      var el = $(this)
      var dest = el.attr('href')
      $('.menu-wrap').removeClass('menu-show')
      $('html').animate({
        scrollTop:
        $(dest).offset().top
      }, 1500);

    }
    return false
  })
  $('.page-link').on('click', function() {
    if($(this).attr('href') != undefined && $(this).attr('href') != '') {
      var el = $(this)
      var dest = el.attr('href')
      $('html').animate({
        scrollTop:
        $(dest).offset().top
      }, 1500);

    }
    return false
  })
})

// Slider
var swiperPhoto = new Swiper(".slider-photos-container", {})
var swiperText = new Swiper(".slider-texts-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  }
})
swiperPhoto.on('slideChange', ()=>{
  swiperText.slideTo(swiperPhoto.activeIndex)
})
swiperText.on('slideChange', ()=>{
  swiperPhoto.slideTo(swiperText.activeIndex)
  document.querySelector('.active-slide').innerHTML=swiperText.activeIndex+1
})
$(document).ready(function() {
  $('.next').on('click', function(){
    swiperPhoto.slideNext()
  })
  $('.prev').on('click',function(){
    swiperPhoto.slidePrev()
  })
})

$(document).ready(function(){
  $('#firstForm').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        tel: true
      },
      userAgreement: {
        required: true
      }
    },
    messages: {
      userName: "Пожалуйста введите Ваше имя ",
      userPhone: "Пожалуйста введите Ваш телефон ",
      userAgreement: "!"
    }
  })
  $('#mainForm').validate({
    rules: {
      mainName:{
        required: true,
        minlength: 2
      },
      mainEmail:{
        required: true,
        email: true
      },
      mainPhone: {
        required: true,
        tel: true
      },
      mainAgreement: {
        required: true
      }
    },
    messages: {
      mainName: "Пожалуйста введите Ваше имя ",
      mainEmail: 'Пожалуйста введите Вашу почту',
      mainPhone: "Пожалуйста введите Ваш телефон ",
      mainAgreement: "!"
    }
  })
})
