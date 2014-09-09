// Constructor
var Rebelship = function(name, image){
	this.name = name;
	this.image = image;

}

    // Declaring the images as objects
    var imgXwing = $('<img class="xwing">').attr('src', 'images/X-wing.png');
    var imgFalcon = $('<img class="falcon">').attr('src', 'images/falcon.png');

    //new rebel ships
    var xwing = new Rebelship('xwing', imgXwing);
    var falcon = new Rebelship('falcon', imgFalcon);


    //array of created rebel ships
    // var rebelShipsArr = [xwing, falcon];
    var rebelShipsArr = [xwing];

    var displayRebels = function(arr) {
        for (var i = 0; i < arr.length; i++) {
            $('.ship').append(arr[i].image)
        };
    }

// var Bullets = function(){
// }
// Bullets.prototype.create = function(x, y, velocityX, w, h, color){
//         this.x = x;
//         this.y = y;
//         this.velocityX = velocityX;
//         this.w = w;
//         this.h = h;
//         this.color = color;
//         return this.el;
//     }

// var topXwingBullet = new Bullets(10, 10, 100, 5, 1, "red")
// var redBullet =[];

$(document).on('ready', function() {
 
    displayRebels(rebelShipsArr);


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
        $('.ship').animate({left: "-=20px"}, 'fast');
        console.log('left')
        break;

        case 38: // up
        $('.ship').animate({top: "-=20px"}, 'fast');
        console.log('up')
        break;

        case 39: // right
        console.log('right')
		$('.ship').animate({left: "+=20px"}, 'fast');
        break;

        case 40:// down
        $('.ship').animate({top: "+=20px"}, 'fast');
        console.log('down') 
        break;

        // ----------WASD
        case 65: // left
        $('.xwing').animate({left: "-=20px"}, 'fast');
        console.log('left')
        break;

        case 87: // up
        $('.xwing').animate({top: "-=20px"}, 'fast');
        console.log('up')
        break;

        case 68: // right
        console.log('right')
		$('.xwing').animate({left: "+=20px"}, 'fast');
        break;

        case 83:// down
        $('.xwing').animate({top: "+=20px"}, 'fast');
        console.log('down') 
        break;

        case 81:// diagonal up left
        $('.xwing').animate({top: "-=20px", left:"-=20px"}, 'fast');
        console.log('diag left up') 
        break;

        case 69:// diagonal up right
        $('.xwing').animate({top: "-=20px", left:"+=20px"}, 'fast');
        console.log('diag left up') 
        break;

        case 32:// red bullets
        var topBullet = ('<div class="bullet red-bullettop"></div>');
        var bottomBullet = ('<div class="bullet red-bulletbottom"></div>')
        $('.ship').append(topBullet, bottomBullet)
        console.log('shot fired') 
        break;


        // case 32:// red bullets
        // $('.xwing').after(topXwingBullet);
        // console.log('shot fired') 
        // break;
            // var bullet=0;
            // var bulletpositions=[];
            // $("body").on('keydown',function(e) {
            //      if(e.keyCode == 32) { // left
            //     $('.xwing').append('<div class="red-bullet"></div>');
            //     console.log('shot fired') 
       
            //   }
            //  }

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


function flyingBullet(){
    console.log('flies')
      $(".bullet").each(function() {
            var oldLeft = $(this).offset().left;
            $(this).css("left", oldLeft + 10 + "px");
        });
}


setInterval(flyingBullet, 100);

// $( ".fa-fighter-jet" ).keydown(function() {
//   alert( "Handler for .keypress() called." );
// });






});