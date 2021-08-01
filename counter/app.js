const value = document.getElementById('value');

const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        // console.log(e.target)
        const style = e.target.classList;

        if(style.contains('decrease')){
            count--;
            value.textContent = count;
        }else if(style.contains('increase')){
            count++;

            value.textContent = count
        }else{
            count = 0;
            value.textContent = count
        }

        if (count < 0){
             value.style.color = 'red'
        }else if(count > 0){
              value.style.color = 'green'
        }else{
             value.style.color = 'black'
        }

    })
})

