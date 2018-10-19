/*
* @Author: Marte
* @Date:   2018-05-15 10:22:55
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-24 13:26:50
*/

'use strict';
    var Map = document.getElementsByClassName('game')[0];
    var fen = document.getElementsByClassName('sums')[0].getElementsByTagName('span')[0];
    var close = document.getElementsByClassName('close')[0];
    var loser = document.getElementsByClassName('loser')[0];
    var start = document.getElementsByClassName('start')[0];
    var image = document.getElementsByClassName('image')[0];
    var loserFen = document.getElementsByClassName('sp')[0];
  /*地图*/
     var MapW = parseInt(getComputedStyle(Map).width);
     var MapH = parseInt(getComputedStyle(Map).height);
  /*食物生成*/
     var foodW = 20;
     var foodH = 20;
     var foodX =0;
     var foodY =0;

  /*蛇*/
     var snakeW = 20;
     var snakeH = 20;
     var snakeBody = [[2,0,"head"],[1,0,"body"],[0,0,"body"]];
     var snakeX = 0;
     var snakeY = 0;

     // 游戏属性
       var snakeMove;
       var direct = "right";
       var right = false;
       var up = true;
       var down = true;
       var left = false;
       var speed = 200;
       var count = 0;
       var startGamePuss = true;
       var startGameOpen = true;
  // /*执行函数*/
  // foodSet();生成食物
  // snakeSet();生成蛇
  // startGame();开始游戏
  // stopGamp();暂停游戏
  // removeAll();清除所有数据
        keyEvent();
        function startGame(){
         start.style.display = 'none';
         image.style.display = 'block';
              setFood();
              setSnake();
        }
        function setFood(){
            foodX = Math.floor(Math.random()*(MapW/20));
            foodY = Math.floor(Math.random()*(MapH/20));
               var food = document.createElement('div');
                    food.style.width = foodW + "px";
                    food.style.height = foodH + "px";
                    food.style.position = "absolute";
                    food.style.left = foodX * 20 +"px";
                    food.style.top = foodY * 20 + "px";
                    Map.appendChild(food).setAttribute('class','food');
        }
        function setSnake(){

                for(var i = 0;i<snakeBody.length;i++){
                  var snake = document.createElement('div');
                   snake.style.width = snakeW + "px";
                   snake.style.height = snakeH + "px";
                   snake.style.position = "absolute";
                   snake.style.left = snakeBody[i][0] * 20 +"px";
                   snake.style.top = snakeBody[i][1] * 20 +"px";
                   snake.classList.add(snakeBody[i][2]);
                   Map.appendChild(snake).classList.add('snake');
                   switch(direct){
                    case 'right':
                       break;
                    case 'up':
                       snake.style.transform = 'rotate(270deg)';
                       break;
                    case 'left':
                        snake.style.transform = 'rotate(180deg)';
                        break;
                    case 'down':
                        snake.style.transform = 'rotate(90deg)';
                        break;
                      default:
                      break;
                   }
                }
        }
        function move(){
                for(var i = snakeBody.length-1; i > 0;i--){
                  snakeBody[i][0] = snakeBody[i-1][0];
                  snakeBody[i][1] = snakeBody[i-1][1];
                }
                switch(direct){
                  case 'right':
                     snakeBody[0][0] += 1;
                     break;
                  case 'down':
                     snakeBody[0][1] += 1;
                     break;
                  case 'left':
                     snakeBody[0][0] -= 1;
                     break;
                  case 'up':
                     snakeBody[0][1] -= 1;
                     break;
                  default:
                  break;
                  }
              classRemove('snake');
              setSnake();

              if(snakeBody[0][0]== foodX && snakeBody[0][1] == foodY){
                   count += 1;
                   fen.innerHTML = count;
                   classRemove('food');
                   setFood();
                   var snakeEndX = snakeBody[snakeBody.length - 1][0];
                   var snakeEndY = snakeBody[snakeBody.length - 1][1];
                   switch(direct){
                    case 'right':
                        snakeBody.push([snakeEndX-1,snakeEndY,'body']);
                      break;
                    case 'up':
                        snakeBody.push([snakeEndX,snakeEndY + 1,'body' ]);
                      break;
                    case 'down':
                        snakeBody.push([snakeEndX,snakeEndY - 1,'body']);
                      break;
                    case 'left':
                        snakeBody.push([snakeEndX + 1,snakeEndY,'body']);
                      break;
                      default:
                      break;
                   }

              }
              if(snakeBody[0][0] < 0 ||snakeBody[0][0] > (MapW/20)){
                  gameOver();
              }
              if(snakeBody[0][1] < 0 || snakeBody[0][1] > (MapH/20)){
                  gameOver();
              }
              var headX = snakeBody[0][0];
              var headY = snakeBody[0][1];
              for(var i = 1;i < snakeBody.length;i++){
                if(headX == snakeBody[i][0] && headY == snakeBody[i][1]){
                  gameOver();
                }
              }
      }
        function gameOver(){
             classRemove('snake');
             classRemove('food');
             clearInterval(snakeMove);
             snakeBody = [[2,0,"head"],[1,0,"body"],[0,0,"body"]];
              direct = "right";
              right = false;
              up = true;
              down = true;
              left = false;
              speed = 200;
              startGamePuss = true;
              startGameOpen = true;
              image.style.backgroundImage = "url('img/start.png')"
             loser.style.display = 'block';
             loserFen.innerHTML = count;
             count = 0;
             fen.innerHTML = count;

        }
        function classRemove(className){
          var  ele = document.getElementsByClassName(className);
          while(ele.length > 0){
            ele[0].parentNode.removeChild(ele[0]);
          }
        }
        function keyEvent(){
              close.onclick = function(){
                loser.style.display = 'none';
              }
             start.onclick = function(){

                pussAndOpen();
             }
             image.onclick = function(){
                pussAndOpen();
             }
        }

        function pussAndOpen(){
           if(startGamePuss){
            if(startGameOpen){
                startGame();
                startGameOpen = false;
            }
            image.style.backgroundImage = "url('img/pause.png')";
            document.onkeydown = function(e){
              var code = e.keyCode;
              trueCode(code);
             }
             snakeMove = setInterval(function(){
                    move();
              },speed);
             startGamePuss = false;
           }else{
           image.style.backgroundImage = "url('img/start.png')";
            clearInterval(snakeMove);
            document.onkeydown = function(e){
              event.returnValue = false;
              return false;
            };
            startGamePuss = true;
           }
        }

        function trueCode(code){
        switch(code){
          case 37:
            if(left){
               direct = "left";
              left = false;
              right = false;
              up = true;
              down = true;
            }
            break;
            case 38:
            if(up){
            direct = "up";
              left = true;
              right =true;
              up = false;
              down =  false;
            }
            break;
            case 39:
            if(right){
            direct = "right";
              left = false;
              right = false;
              up = true;
              down = true;
            }
            break;
            case 40:
            if(down){
            direct = "down";
              left = true;
              right = true;
              up = false;
              down = false;
            }
            break;
            default:
            break;
        }
        }