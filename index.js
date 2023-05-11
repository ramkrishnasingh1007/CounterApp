const countValue = document.querySelector('#counter');

const increment = () =>{
    let value = parseInt(countValue.innerText);
    value +=1;
    countValue.textContent = value;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value -=1;
    countValue.innerText = value;

};
