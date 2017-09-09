 (function() {
                var container = document.getElementById( 'container' ),
                    trigger = container.querySelector( 'button.trigger' );

                function toggleContent() {
                    if( classie.has( container, 'container--open' ) ) {
                        classie.remove( container, 'container--open' );
                        classie.remove( trigger, 'trigger--active' );
                        window.addEventListener( 'scroll', noscroll );
                    }
                    else {
                        classie.add( container, 'container--open' );
                        classie.add( trigger, 'trigger--active' );
                        window.removeEventListener( 'scroll', noscroll );
                    }
                }

                function noscroll() {
                    window.scrollTo( 0, 0 );
                }


                document.body.scrollTop = document.documentElement.scrollTop = 0;


                window.addEventListener( 'scroll', noscroll );

                trigger.addEventListener( 'click', toggleContent );


                [].slice.call( document.querySelectorAll('.items-wrap a') ).forEach( function(el) { el.onclick = function() { return false; } } );
            })();

            
jQuery(document).ready(function($) {
 
    $(".scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800,'swing');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload', 
    animateClass: 'animated',
    offset:       0,          
    mobile:       true,       
    live:         true        
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });



