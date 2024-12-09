const ship = document.querySelector('.ship');
export function meteorSpawn(mateorSpeed) {
    setInterval(() => {
        const mateorWrap = document.createElement('div')
        mateorWrap.classList.add('meteor')
    
        const meteor = document.createElement('img');
        meteor.src = './img/meteor.png'
    
        let randomCoords = Math.floor(Math.random() * (innerWidth - ship.offsetWidth) )
    
        
    
        mateorWrap.style.left = `${randomCoords}px`
    
        mateorWrap.appendChild(meteor)
        document.querySelector('.main-page').appendChild(mateorWrap);
    
        let meteorCodrY = 0;
        setInterval(() => {
            meteorCodrY +=35
            if(meteorCodrY > innerHeight - mateorWrap.offsetHeight) {
                mateorWrap.remove()
            }
            mateorWrap.style.top = `${meteorCodrY}px`
    
        }, 100);
    
    }, mateorSpeed);
    
}


