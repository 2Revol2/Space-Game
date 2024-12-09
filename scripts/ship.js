const ship = document.querySelector('.ship');

let coordinateX = innerWidth/2 - ship.offsetWidth;
let coordinateY = 0;

let shipSize = `${150}`;

let minSizeShip = 100;
let maxSizeShip = 150;

ship.style.width = `${shipSize}px`
addEventListener('keydown', function(element){
    
    // движение влево
    if(element.key == "a" || element.key == "ArrowLeft") {
        coordinateX -= 35;
        if (coordinateX < 0) {
            coordinateX = 0;
        }
        ship.style.left = `${coordinateX}px`;
    }
    // движение вправо
    else if(element.key == "d" || element.key == "ArrowRight") {
        coordinateX += 35;
        if (coordinateX > innerWidth - ship.offsetWidth) {
            coordinateX  = innerWidth - ship.offsetWidth 
        }
        ship.style.left = `${coordinateX}px`;
        
    }
    // движение вверх
    else if (element.key == "w" || element.key == "ArrowUp") {
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
    else if(element.key == "s" || element.key == "ArrowDown") {
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
