typescript notes -

data types

primitive data types
number
let a : number = a
string 
let b : string= 'abhi'
boolean
let c : boolean = true

array - 
let a : number = [] //this will only the with numbers elements
let b : string = [] //this will only the with string elements
let c : string | number = [] //this will only the with string elements

tuples 
let a : [number , string] = [1 , 'String'] this will store the value in the specified format, moving to the against format will creat issue - like if we tring to store value in number and then string

Enums 

enum StatusCodes {
    FAIL = 400,
    DATABASE_FAIL = 500,
    SUCCESS = 200,
}

enum UserRoles {
    ADMIN = 'admin',
    GUEST = 'guest',
    SUPER_ADMIN = 'super admin'
}
and will access like this - UserRoles.ADMIN

Any, Unknown , Void, Null, Undefined, Never

when you not decide the type it always be any type or you can select with any keyword
a:any 

- unknown
let a: unknown;
a = 12
a = 'abhi'

if you are using unknown type , you must check the typeof before making any operation 
type narro
if(typeof a === 'string'){
    a.toUpperCase()
}

void - when you are not returning anything from an function , 

function abcd : void(){
    console.log('checking value')
}
function abcd : number (){
    return number  
}
 never is like return, uske aage ka code run nhi hota h


 //type inference

 let a = 12; when you are not telling the typescript abou the data type and typescript assume the type- that is inference

 type annotations
 let a : number | string | boolean
 a = 12
 a = 'abhi'
 a  = true


 //interfaces - use to tell the type of object (key's type)

 interface User {
    name : string,
    email : string,
    password : string,
    gender? : string  //making this optional
 }

 function getData ( obj : user ){
so we will  get the value in this shape of user

obj.name

 }

 getData({name : 'Abhis',
    email : "test1@test.com",
    password : "1234"})

EXTEND THE INTERFACE

 interface User {
    name : string,
    email : string,
    password : string,
    gender? : string  //making this optional
 }

 interface Admin extends User {
    admin : boolean
 }
 so now the Admin has the value of User and Admin too
 
 NOTE - TWO INTERFACE WILL ACTUALLY MERGE AND YOU WILL GET THE VALUE OF BOTH

 interfce Abcd{
    name :string
 }
 interfce Abcd{
    email :string
 }


 TYPE ALIASES
 custom type -you can custom the type by your choice
 type = arg : string | null;
 function abcd(obj : arg){ //this will receive only two data type

 }


UNIOUN -- 
let a : number | string |null


type User = {
    name : string,
    email: string
}

type Admin = User & {
    getDetails(user:string) : void
}

function abcd(a:admin){
    a.getDetails()  //its working like the extends where you have the value of previous and current
}

CLASSES
ACCESS MODIFIERS (PUBLIC, PRIVATE, PROTECTED)


CLASSES - 

class Music {
    constructor(public name: string, public artist: string , public length: number)
}
OR WE CAN CRETE LIKE THIS

class Music{
    public name;
    public artist;
    public length;
     constructor( name: string,  artist: string ,  length: number){
        this.name = name
        this.artist = artist
        this.length = length
     }
}


class Music{
    public name;
    public artist;
    public length;
     constructor( name: string,  artist: string ,  length: number){
       if(!length){

        this.length = 20       }
     }
}

let a1 = new Music('abhi', 'artist name', 15)

class BottleMaker {
    constructor(public name: string)  //you can not access the private key to the extended classes
    //PROTECTED KEY - YOU CAN ACCESS WITHIN THE CLASS AND EXTENDED CLASSES BUT NOT ABLE TO CHANGE THROUGH THE INSTANCES
}


class MetalBottleMake extends BottleMaker{
    constructor(name string){
        super(name)
    }

    getValue(){
        console.log(this.name)
    }
}

READ ONLY PROPERTIES


class MetalBottleMake {
    constructor( public readonly name:string , public class?:string){
    } //with readonly you can not change the value, actually you can typescript just giving notify error
    with question mark you can update as optional

    changeName (){
        this.name = 'new name
    }

    getValue(){
        console.log(this.name)
    }
}

let a1 = new MetalBottleMake('abhishek')


//STATIC MEMBERS

class Shery{
   static version = 1.0
    static getRandomNumber(){
        return Math.random()
    }
} 
static keyword allows to without using the new keyword , i will be able to access the properties

eg. Shery.getRandomNumber() and this works fine

//ABSTRACT  - Abstract is the essential classes from them we are not creating any instances, which extended from the abstracted classes will use for the instances

class Payment{
    constructor(public amount:number, public accountNumber:string){}
}

class PaytmPayment extends Payment{}

class GPayPayment extends Payment{} so in future we will create the instances form PaytmPayment,GPayPayment not the Payment class


//FUNCTION

function abcd(name: string, gender:string, cb){

}

abcd('abhishek', 'male', (value)=>{
    console.log(arva.g)
})



//TASK FOR THE MONDAY

pagespeed insights - for web

will figure it out for local
npm i sitespeed.io- for local


//static site generator
//mobx- redux alternative
