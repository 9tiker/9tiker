
var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length){
    // alist[i].style.color = color;
    // i=i+1;
    // }
     $('a').css('color', color);
  }
}

var Body = {
 setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
 },
 setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
   $('body').css('backgroundColor',color);
 },

setH2Color:function(color){
    $('h2').css('color',color);
}

}

Links.setColor('gray');
