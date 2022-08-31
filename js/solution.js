const arr = [];
let li = document.querySelectorAll('li');

for(let value of li){
    console.log(value);
    let text = value.innerHTML;
    arr.push(text);
}
console.log(li.length);
console.log(arr);