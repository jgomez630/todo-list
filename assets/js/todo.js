//check off specific items off todo list
$('li').click(function(){
  $(this).toggleClass("completed");
});

//click on X to delete items
$('span').click(function(e){
$(this).parent().fadeOut(700,function(){
  $(this).remove();
});
  e.stopPropagation();//prevents bubbling
});



/*
$("li").click(function(){
  //console.log(this);
  $(this).css('color','gray');
  $(this).css('text-decoration','line-through');
});
*/

/*
$("li").click(function(){
//console.log($(this).css('color'));
  
  if($(this).css('color') === 'rgb(128, 128, 128)'){
     $(this).css({
     color: "black",
     textDecoration:"none",
  });
} else{
  $(this).css({
    color: "gray",
    textDecoration:"line-through",
  });
}
});
*/

