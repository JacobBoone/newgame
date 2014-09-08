$(document).on('ready', function() {
 


// $(document).keydown(function(e) {
//     switch(e.which) {
//         case 37: // left
//         $('.fa-fighter-jet,').animate({left: "-=10px"}, 'fast');
//         console.log('left')
//         break;

//         case 38: // up
//         $('.fa-fighter-jet').animate({top: "-=10px"}, 'fast');
//         console.log('up')
//         break;

//         case 39: // right
//         console.log('right')
// 		$('.fa-fighter-jet').animate({left: "+=10px"}, 'fast');
//         break;

//         case 40:// down
//         $('.fa-fighter-jet').animate({top: "+=10px"}, 'fast');
//         console.log('down') 
//         break;

//         default: return; // exit this handler for other keys
//     }
//     e.preventDefault(); // prevent the default action (scroll / move caret)
// });



$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        $('.xwing').animate({left: "-=20px"}, 'fast');
        console.log('left')
        break;

        case 38: // up
        $('.xwing').animate({top: "-=20px"}, 'fast');
        console.log('up')
        break;

        case 39: // right
        console.log('right')
		$('.xwing').animate({left: "+=20px"}, 'fast');
        break;

        case 40:// down
        $('.xwing').animate({top: "+=20px"}, 'fast');
        console.log('down') 
        break;

        // ----------WASD
        case 65: // left
        $('.xwing').animate({left: "-=10px"}, 'fast');
        console.log('left')
        break;

        case 87: // up
        $('.xwing').animate({top: "-=10px"}, 'fast');
        console.log('up')
        break;

        case 68: // right
        console.log('right')
		$('.xwing').animate({left: "+=10px"}, 'fast');
        break;

        case 83:// down
        $('.xwing').animate({top: "+=10px"}, 'fast');
        console.log('down') 
        break;

        case 81:// diagonal up left
        $('.xwing').animate({top: "-=10px", left:"-=10px"}, 'fast');
        console.log('diag left up') 
        break;

        case 69:// diagonal up right
        $('.xwing').animate({top: "-=10px", left:"+=10px"}, 'fast');
        console.log('diag left up') 
        break;


        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});







// $( ".fa-fighter-jet" ).keydown(function() {
//   alert( "Handler for .keypress() called." );
// });






});