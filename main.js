// to do
//1. bullets to fly on their own, perhaps independant div that = same loaction as the flying plane
// 2. bullet need to be removed when end of page is reached
// 3. make ship only fly within certain range

var WW = $(window).width()
var WH = $(window).height()

var MAX_SHIP_TOP = WH -20;
var MAX_SHIP_FORWARD = WW -500;


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
    var rebelShipsArr = [xwing, falcon];

    var displayRebels = function(arr) {
        for (var i = 0; i < arr.length; i++) {
            $('.ship').append(arr[0].image)
            // $('.coordinates').append(arr[0].positon)
            // console.log(event.pageX, event.pageY)
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


var pos = $('.ship').offset();
console.log("Coordinates: pageX: " + pos.top + ", pageY: " + pos.left);

var getCoor = $('.coordinates').text("  top: " + pos.top + ", left: " + pos.left)




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

var bullPos = $('.ship').offset();
 // console.log("Bullet Coordinates: pageX: " + bullPos.top + ", pageY: " + bullPos.left)
// var endLeft = bullPos.left;
// var endTop = bullPos.top;
// var removeBullet = function(){
//     if (endPage === 1360){
//      $('.bullet').remove();
//     };
    
// }

var flyingBullet = function(){
    // var xAxisLimit = 1350;
    var self = this;
      $(".bullet").each(function() {
            var oldLeft = $(this).offset().left;
            $(this).css("left", oldLeft + 10 + "px");
            // if (endLeft >= 1300)
            // console.log('laser flies')



            // if (left === 1300){
            //  $('.bullet').remove();
            // };

         // Boundary Logic
            // if( x<20 || x>279) removeBullet=-removeBullet; 
            // if( y<20 || y>279) dy=-dy;

            // if (xAxisLimit){
            //     console.log(xAxisLimit)
            //     $(".bullet").remove
            // }
        });
}


setInterval(flyingBullet, 200);

// var getInt = setInterval()

// var rightEnd = function(){
//     $(window).width
// }

// var end = $(window).width
// console.log(end)

// var result = setInterval

// var removeBullet = function(){
//     if (left >= $(window).width){
//        clearInterval() 
//     }
    
// }

// removeBullet()
// $( ".fa-fighter-jet" ).keydown(function() {
//   alert( "Handler for .keypress() called." );
// });






});


