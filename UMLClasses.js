class Student{
    #name='Piotr';
    #surname='bąk';
    #pesel='1234567890';
    constructor(name, surname, pesel){
        this.#name=name;
        this.#surname=surname;
        this.#pesel=pesel;
    }
    /*#getName=function(){
        return this.#name;
    }
    #getSurname=function(){
        return this.#surname;
    }*/
    #getPesel=function(){
        return this.#pesel;
    }
    display(){
        document.write(this.#name+'<br>'+this.#surname+'<br>'+this.#pesel+'<br>');
    }
    getDoB(){
        let str = this.#getPesel().slice(0, 6);
        let str5 = +str.slice(2,4);
        let str6 = str.slice(0,2);
        let str1;
        let str4;
        if(str5>20){
            str1 = 'rok '+'20'+str6+'<br>';
            str4 = str.slice(2, 4)-20+'<br>';
        } else{
            str1 = 'rok '+'19'+str6+'<br>';
            str4 = str.slice(2, 4)+'<br>';
        }

        let str2 = 'miesiąc '+str4+'<br>';
        let str3 = 'dzień '+str.slice(4, 6)+'<br>';
        return str1+str2+str3;
    }
}

let Student1 = new Student(prompt('Wprowadź imie'), prompt('Wprowadź nazwisko'), prompt('wprowadź pesel'));

Student1.display();
document.write(Student1.getDoB());