$(function(){
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });


$('.box').hide();
//アコーディオンをクリックした時の動作
$('.question, .question2').on('click', function () {//タイトル要素をクリックしたら
   var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
   $(findElm).slideToggle();//アコーディオンの上下動作

   var findAngle = $(this).children(".ac-angle")

   if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
       $(this).removeClass('close');//クラス名を除去し
       $(this).removeClass('active');
       $(findAngle).addClass('fa-angle-down');
       $(findAngle).removeClass('fa-angle-up');
   } else {//それ以外は
       $(this).addClass('close');//クラス名closeを付与
       $(this).addClass('active');
       $(findAngle).removeClass('fa-angle-down');
       $(findAngle).addClass('fa-angle-up');
   }
});