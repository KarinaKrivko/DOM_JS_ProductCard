//DOM - DOCUMENT OBJECT MODEL

//const header = document.querySelector('h2');
// const header = document.querySelector('.header');
// const paragraph = document.querySelector('#par');


// console.log(header);
// console.log(paragraph);

// header.style.color = 'red';
// paragraph.style.backgroundColor = 'green';

// header.classList.add('class2');
// header.classList.remove('class1');
// const container = document.createElement('div')
// const text = document.createElement('p'); //создаю новый элемент 
// text.innerText = 'Какой-то текст внутри нового div';


// // container.append(text); //добавляю p внутрь container

// // const heading = document.getElementById('hello');


// class Worker {
   
//     constructor(name, days){
//         this.name = name;
//         this.days = days;
// }

// add_days(amount){
// this.days = this.days+ amount;// += amount;
// }

    
// delete_days(amount){
// this.days  = this.days - amount; //-= amount;
// }
// }

// const worker_1 = new Worker('Sam', 20 );
// const worker_2 =  new Worker('Tom', 30);

// worker_1.add_days(5);
// console.log(worker_1);

// worker_2.delete_days(5);
// console.log(worker_2);

// // const root = document.createElement('div')

// (name, days){
//     this.name = name;
//     this.days = days;
// }

// class User{

// static roles = ['root', 'admin', 'manager', 'user'];

//     constructor(name, age, role){
//         this.name = name;
//         this.age = age;
//         if (User.roles.includes(role)){
//             this.role = role;
//         }else{
//             this.role = undefined;
//         }
            
//     }


//     sayHi(){
//     console.log('Hi!')

//     }

//     change_name(new_name){
//     this.name = new_name;
//     }

//     b_day(){
//         this.age++
//         console.log('HAPPY BIRTHDAY')
       
//     }

//     change_role(new_role){
//         this.name = new_role;
//         }
// }

// const user_1 = new User('Sam', 20, 'teacher');
// const user_2 = new User('Kate', 27, 'user');

// user_1.b_day()

// const header = document.querySelector('h2');// ищу элемент
// const paragraph = document.querySelector('#par');
// const container = document.querySelector('.container');

// console.log(header);
// console.log(paragraph);

// header.style.color = 'red';
// paragraph.style.backgroundColor = 'green';

// header.classList.add('class_added');
// //header.classList.remove('class_added');
// const text = document.createElement('p');// создаю элемент
// const img = document.createElement('img');// создаю элемент
// text.innerText = 'Any text';
// container.append(text);// добавить внутрь контейнера элемент(первое элемент,добавить = append и (где))

// //const geElById = document.getElementById('id');


// Артикул, наименование товара, цена. Данные взять произвольные.
// Применить стили к карточке: width, background-color, border, border-radius, padding, margin.

const div = document.querySelector('div');
div.classList.add('wrapper');
const body = document.body;
const header = document.createElement('h1');
header.textContent = 'Card';
const ul =
`<ul> Product card:
    <li> Item: 00054687 </li>
    <li> Name: "Luntic" </li>
    <li> Price: 30$ </li>
</ul>`;

div.innerHTML = ul;

// const card = document.createElement('Card:');
// const item = document.createElement('item');
// item.innerText = '01';
// const productName = document.createElement('productName');
// productName.innerText = '"Luntic';
// const price = document.createElement('price');
// price.innerText = '30$';
// const arr = [item, productName, price];
// console.log(arr);


div.style.innerWidth = '355';
div.style.backgroundColor = 'yellow';
div.style.border = 'solid black';
div.style.borderRadius = '50px';
div.style.padding = '4px';
div.style.margin = '5px';

