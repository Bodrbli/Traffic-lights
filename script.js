'use strict'
const butt = document.querySelector('button');
const frameClass = document.querySelector('body :first-child');

butt.addEventListener('click', function switchClass() {
    let result = frameClass.className === 'red' ? 
                    frameClass.className = 'yellow-green': 
                        frameClass.className === 'yellow-green' ? 
                            frameClass.className = 'green': 
                                frameClass.className === 'green' ? 
                                    frameClass.className = 'yellow-red' : 
                                        frameClass.className = 'red'; 
    return result;                                      
})