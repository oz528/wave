$(".menu")
  .unbind("click")
  .bind("click", function () {
    $(".menu__click").attr("style", "right:0%;");
  });

// //클릭이벤트 unbind
// $("#test-button2").unbind("click");

// //클릭이벤트 bind
// $("#test-button2").bind("click",function(){
//     alert("click event");
// });

// // or

// //클릭이벤트 unbind & bind
// $("#test-button2").unbind("click").bind("click",function(){
//     alert("click event");
// });

// //https://6developer.com/3

//https://coding-restaurant.tistory.com/323 에서 참고함

$(document).ready(function () {
  $(document).on("click", ".close", function () {
    $(".menu__click").attr("style", "right:-100%;");
  });
});

$(".menu").click(function () {
  var el = $(this),
    newone = el.clone(true);

  el.before(newone);

  $("." + el.attr("class") + ":last").remove();
});

// https://css-tricks.com/restart-css-animation/ 에서 참고함
