const ship = document.querySelector('.ship');

let shipSize = 150;
let minSizeShip = 100;
let maxSizeShip = 150;

ship.style.width = `${shipSize}px`

let coordinateX = innerWidth/2 - ship.offsetWidth;
let coordinateY = 0;


ship.style.left = `${coordinateX}px`
addEventListener('keydown', function(element){
    // движение влево
    if(element.key == "a" || element.key == "ArrowLeft" || element.key == "A") {
        coordinateX -= 35;
        if (coordinateX < 0) {
            coordinateX = 0;
        }
        ship.style.left = `${coordinateX}px`;
    }
    // движение вправо
    else if(element.key == "d" || element.key == "ArrowRight"  || element.key == "D") {
        coordinateX += 35;
        if (coordinateX > innerWidth - ship.offsetWidth) {
            coordinateX  = innerWidth - ship.offsetWidth 
        }
        ship.style.left = `${coordinateX}px`;      
    }
    // движение вверх
    else if (element.key == "w" || element.key == "ArrowUp" || element.key == "W") {
        coordinateY += 35;
        if (coordinateY > innerHeight - ship.offsetHeight ) {
            coordinateY = innerHeight - ship.offsetHeight
       }
       ship.style.bottom= `${coordinateY}px`;
        //  делаем меньше размер корабля когда он улетает вверх
        shipSize -=2;
       if (shipSize <= minSizeShip) {
        shipSize = minSizeShip;
       }
       ship.style.width = `${shipSize}px`
    }
    // движение вниз
    else if(element.key == "s" || element.key == "ArrowDown" || element.key == "S") {
        coordinateY -= 35;
        if (coordinateY < 0) {
            coordinateY = 0
        }
        ship.style.bottom= `${coordinateY}px`;
        //  делаем больше размер когда он летит вниз
        shipSize +=2;
        if (shipSize >= maxSizeShip) {
            shipSize = maxSizeShip
        }
        ship.style.width = `${shipSize}px`
    }  
})
