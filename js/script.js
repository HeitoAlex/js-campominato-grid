const playElement = document.querySelector('button');

playElement.addEventListener('click', function(){
    const gridElement = document.getElementById('grid');
    
    for(let i = 0; i < 100; i++){
        const squareElement = document.createElement('article');
        squareElement.classList.add('square');
        squareElement.append(i +1);

        squareElement.addEventListener('click', function(){
            squareElement.classList.add('active');
            console.log(i +1);
        });

        gridElement.appendChild(squareElement);
        
    }

})