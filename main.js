//просто 3 клас
/*
class Iphone{
    constructor(){
        this.model = 'Xr';
        this.year = 2019;
        this.color = 'red';
        this.ram = 128;
        this.brand = 'Aplle';
    }
}

class Samsung{
    constructor(){
        this.model = 'a51';
        this.year = 2017;
        this.color = 'blue';
        this.ram = 64;
        this.brand = 'Samsung';
    }
}

class Xiaomi{
    constructor(){
        this.model = 'redmi a228';
        this.year = 2024;
        this.color = 'black';
        this.ram = 1000;
        this.brand = 'Xiaomi';
    }
}

let iphone = new Iphone(),
    samsung = new Samsung(),
    xiaomi = new Xiaomi();

console.log(iphone)
console.log(samsung)
console.log(xiaomi)
*/
// класи з конструктором
/*
class Iphone{
    constructor(model, year, color, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.ram = ram;
        this.brand = 'Iphone';
    }
}

class Samsung{
    constructor(model, year, color, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.ram = ram;
        this.brand = 'Samsung';
    }
}

class Xiaomi{
    constructor(model, year, color, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.ram = ram;
        this.brand = 'Xiaomi';
    }
}

let iphone = new Iphone('11pro', 2019, 'grey', 256),
    samsung = new Samsung('s9', 2015, 'black', 64),
    xiaomi = new Xiaomi('note redmi pro 228 smart+', 2025, 'black-blue-white', 512);

console.log(iphone);
console.log(samsung);
console.log(xiaomi);
*/
//батьківський класс
/*
class Phone{
    constructor(model,year,color,ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.ram = ram;
    }
}

class Iphone extends Phone{
    constructor(model,year,color,ram){
        super(model,year,color,ram);
        this.brand = 'Iphone';
    }
}

class Samsung extends Phone{
    constructor(model,year,color,ram){
        super(model,year,color,ram);
        this.brand = 'Samsung';
    }
}

class Xiaomi extends Phone{
    constructor(model,year,color,ram){
        super(model,year,color,ram);
        this.brand = 'Xiaomi';
    }
}

let iphone = new Iphone('12mini',2020,'White', 64),
    samsung = new Samsung('s21plus',2021,'Black', 128),
    xiaomi = new Xiaomi('redmi 899889',2019,'Green', 256);

console.log(iphone);
console.log(samsung);
console.log(xiaomi);
*/
//з методом обчисленя ціни/віку
/*
class Phone{
    constructor(model,year,color,mem){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem;
    }

    calculatePrice =()=>{
        let koef = 1.27 
        return Math. round(((this.year * koef)/ this.mem) * 10);
    }

    calculateYear=()=>{
        let nowYear = 2022;
        return(nowYear - this.year)
    }
}

class Iphone extends Phone{
    constructor(model,year,color,mem){
        super(model,year,color,mem);
        this.brand = 'Iphone';
    }
}

class Samsung extends Phone{
    constructor(model,year,color,mem){
        super(model,year,color,mem);
        this.brand = 'Samsung';
    }
}

class Xiaomi extends Phone{
    constructor(model,year,color,mem){
        super(model,year,color,mem);
        this.brand = 'Xiaomi';
    }
}

let iphone = new Iphone('7plus',2016,'White', 64),
    samsung = new Samsung('s9',2018,'Black', 128),
    xiaomi = new Xiaomi('redmi 899889',2010,'Green', 256);

console.log('Телефон на ринку вже' +' '+ iphone.calculateYear()+' '+ 'р');
console.log('Телефон на ринку вже' +' '+ samsung.calculateYear()) + ' ' + 'р' ;
console.log('Телефон на ринку вже' +' '+ xiaomi.calculateYear()+' '+ 'р');

console.log('Ціна телефона в $:' +' '+ iphone.calculatePrice());
console.log('Ціна телефона в $:' +' '+ samsung.calculatePrice());
console.log('Ціна телефона в $:' +' '+ xiaomi.calculatePrice());

*/
//завдання з зірочкою (гетери сетери)
/*
class Phone{
    constructor(model, year, color, ram){
    this.model = model;
    this.year = year;
    this.color = color;
    this.ram = ram;
    }
    //модель
    get model(){
        this._model = model;
    }
    set model(model){
        this._model = 'xr'
    }
    //рік
    get year(){
        this._year = year;
    }
    set year(year){
        this._year = 2020
    }
    //кол
    get color(){
        this._color = color;
    }
    set color(color){
        this._color = 'red'
    }
    //пам'ять
    get ram(){
        this._ram = ram;
    }
    set ram(ram){
        this._ram = 128
    }
}
let phone = new Phone()
console.log(phone)
*/

//завдання з ** 


function creatClass(name){
     new name 
        }

console.log(creatClass(iphone))