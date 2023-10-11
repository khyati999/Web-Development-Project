// // $("button").on("click",function(){
// //     $("h1").hide();
// // });
// // $("button").on("click",function(){
// //     $("h1").fadeOut();  //will reduce the opacity the hides
// // });
// $("button").on("click",function(){
//     $("h1").fadeToggle();
// });
// $("button").on("click",function(){
//     $("h1").slideUp(); //slideDown()
// });
// $("button").on("click",function(){
//     $("h1").animate({opacity: 0.5});    //in between {} you can add css rules numeric value css
// });
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});


