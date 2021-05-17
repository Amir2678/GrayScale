$(document).ready(function(){

     var checkScrollBar = function(){
        if($(this).scrollTop() > 1){
            $('.navbar').css({
                'backgroundColor': 'white'
            })
            $('.nav-anchor').css({
                'color': '#555'
            })
        }else{
            $('.navbar').css({
                'backgroundColor': 'transparent'
            })
            $('.nav-anchor').css({
                'color': 'white'
            })
        }
     }
     $(window).on('load resize scroll', checkScrollBar)
     });