// element
var board = document.getElementById("board");

var arr = [];
var count = 0;

board.style.width = '200px';
board.style.height = '200px';

(function start() {
     for (var i = 0; i < 4; i++) {


         for (var j = 0; j < 4; j++) {
             var box = document.createElement('span');


             if ((i % 2 != 0) && (j % 2 != 0)) {
                 box.className = 'black';
                 box.style.backgroundColor = 'black';
             }
             else if ((i % 2 != 0) && (j % 2 == 0)) {
                 box.className = 'white';
                 box.style.backgroundColor = 'white';
             }
             else if ((i % 2 == 0) && (j % 2 == 0)) {
                 box.className = 'black';
                 box.style.backgroundColor = 'black';
             }
             else {
                 box.className = 'white';
                 box.style.backgroundColor = 'white';
             }


             /* set specific design */
             box.style.border = '1px solid black';
             box.style.display = 'block';
             box.style.cssFloat = 'left';
             box.style.boxSizing = 'border-box';
             box.style.padding = '0';
             box.style.margin = '0';
             box.style.width = '50px';
             box.style.height = '50px';

             /* event */
             box.addEventListener('click', function () {
                 // 1. restore original color using class name.
                 for (var i = 0; i < rctCount; i++)
                     arr[i].style.backgroundColor = arr[i].className;


                 // 2. set color 'red' 
                 this.style.backgroundColor = 'red';
             });


             /* push information of box in array */
             arr[count] = box;
             count += 1;


             board.appendChild(box);
             console.log("added");
         }
     }
 })();
