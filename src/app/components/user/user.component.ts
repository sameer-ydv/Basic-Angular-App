import { Component } from '@angular/core';

//import the user interface from User.ts file
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    // template: '<h2>John Doe</h2>',
    templateUrl: './user.component.html',
    styles: [`
    h2{
        color:blue;
    }
    `]
})

export class UserComponent {
    //Properties

    // firstName: string;
    // lastName: string;
    // age: number;
    // address;
    // foo:any;
    // hasKids: boolean;
    // numberArray: number[];
    // stringArray: string[];
    // mixedArray: any[];
    // myTuple: [string, number,boolean];
    // unusable: void;
    // u: undefined;
    // n: null;


    //Using interfaces to make the user component cleaner and efficient
    user: User;
    //Methods
    constructor() {
        // console.log('Hello User');
        // console.log(this.age);
        // this.hasBirthday();
        // this.sayHello();
        // console.log(this.age);


        //     this.firstName = 'John';
        //     this.lastName = 'Doe';
        //     this.age = 30;
        //     this.address = {
        //         street: 'Ichchhanath',
        //         city: 'Surat',
        //         state: 'Gujarat'
        //     };
        //     this.foo=99;
        //     this.foo= true;
        //     this.hasKids= true;
        //     this.numberArray = [1,2,3,4,5,6];
        //     this.stringArray = ['Hello','World'];
        //     this.mixedArray = [true,undefined,1,2,'Mixed Feelings'];
        //     this.myTuple = ['hello', 1,false];
        //     this.unusable = undefined;
        //     this.u = undefined;
        //     this.n = null;

        //     console.log(this.addNumbers(5,9));

        // }
        // sayHello(){
        //     console.log(`Hello ${this.lastName}`);
        // }
        // hasBirthday() {
        //     this.age+= 1;
        // }
        // addNumbers(num1: number,num2: number):number {
        //     return num1+num2 ;}


        // this.user = {
        //     firstName: 'John',
        //     lastName: 'Gamel',
        //     age: 30,
        //     address: {
        //         street: 'IDPL',
        //         city: 'Rishikesh',
        //         state: 'Uttarakhand'
        //     }
        // }

    }
    // ngOnInit() {
    //     this.user = {
    //         firstName: 'John',
    //         lastName: 'Gamel',
    //         age: 30,
    //         address: {
    //             street: 'IDPL',
    //             city: 'Rishikesh',
    //             state: 'Uttarakhand'
    //         }
    //     }
    // }
}




//Using interface within the component file 

// interface User {
//     firstName: string,
//     lastName: string,
//     age: number,
//     address: {
//         street: string,
//         city: string,
//         state: string
//     }
// }