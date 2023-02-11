$(function () {
  // 네비게이션
  $('#header .gnb_wrap .gnb .depth02').hide();

  $('#header .gnb_wrap .gnb>li>a').on('click', function () {
    $(this).parent().siblings().find('.depth02').slideUp();
    $(this).parent().find('.depth02').slideToggle();
  });

  $('#header .btn_open').on('click', function () {
    $('#header .dimmed, #header .btn_close').show();
    $('#header .gnb_area').addClass('on');
    $('body').addClass('on');
  });

  $('#header .util_wrap .btn_search').on('click', function () {
    $('.search_modal_wrap').fadeIn();
  });

  $('.search_modal_wrap .btn_search_close, .search_modal_wrap .modal_bg').on('click', function () {
    $('.search_modal_wrap').hide();
  });

  $('#header .dimmed, #header .btn_close').on('click', function () {
    $('#header .dimmed, #header .btn_close').hide();
    $('#header .gnb_area').removeClass('on');
    $('body').removeClass('on');
  });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 메인메뉴 슬라이더

  var menuSlider = new Swiper('.main_menu_wrap .menu_slider', {
    loop: true,
    slidesPerView: 1,
    slidePerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 메인메뉴 탭
  $('.main_menu_wrap .tab_menu li').on('click', function (e) {
    e.preventDefault();
    var idx = $(this).index();

    $(this).addClass('active').siblings().removeClass('active');

    $('.main_menu_wrap .menu_slider_wrap').eq(idx).addClass('on').siblings().removeClass('on');
  });

  // 이벤트 슬라이더
  var eventSlider = new Swiper('.main_event_wrap .event_slider', {
    loop: true,
    slidesPerView: 2,
    slidePerGroup: 2,
    spaceBetween: 21,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });

  // 패밀리 사이트
  $('#footer .familysite_wrap button').on('click', function () {
    $('#footer .familysite_wrap .familysite').toggleClass('on');
    $('#footer .familysite_wrap button').toggleClass('on');
  });

  // 서브 메뉴슬라이더
  var submenuSlider = new Swiper('.menu_page .best_menu_slider', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });

  // 해시태그 모달창
  $('.menu_page .all_menu .hashtag_wrap .btn_more').on('click', function () {
    $(this).closest('.icecream_product').find('.modal_more_wrap').show();
  });

  $('.menu_page .all_menu .modal_more_wrap .btn_close').on('click', function () {
    $(this).closest('.modal_more_wrap').hide();
  });

  // 이벤트페이지 탭메뉴
  $('.event_page .tab_menu li a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');

    var cate = $(this).data('cate');

    if (cate == 'all') {
      $('.event_page .event_list li').show();
    } else {
      $('.event_page .event_list li').hide();
      $('.event_page .event_list li[data-cate=' + cate + ']').show();
    }
  });
});
