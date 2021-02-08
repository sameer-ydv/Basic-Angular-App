import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/User";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: "",
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;
  enableAdd: boolean = true;
  showUserForm = false;
  @ViewChild("userForm", { static: false }) form: any;
  // currentClasses= {};
  // currentStyles= {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();

    //arrow function
    // setTimeout(() => {
    //   this.users = [
    //     {
    //       firstName: 'John',
    //       lastName: 'Gamel',
    //       age: 30,
    //       address: {
    //           street: 'IDPL',
    //           city: 'Rishikesh',
    //           state: 'Uttarakhand'
    //       }
    //   },
    //   {
    //     firstName: 'Saurav',
    //     lastName: 'Sayana',
    //     age: 20,
    //     address: {
    //         street: 'Swami',
    //         city: 'Surat',
    //         state: 'Gujarat'
    //     }
    // },
    // {
    //   firstName: 'Aman',
    //   lastName: 'Rathi',
    //   age: 21,
    //   address: {
    //       street: 'Satellite',
    //       city: 'Ahmedabad',
    //       state: 'Gujarat'
    //   }
    // }
    //   ];
    //   this.loaded= true;
    // }, 2000);

    // this.showExtended = false;
    // this.addUser({
    //   firstName: 'Sameer',
    //   lastName: 'Yadav',
    //   // age: 20,
    //   // address: {
    //   //     street: 'Aatithya',
    //   //     city: 'Dholka',
    //   //     state: 'Gujarat'
    //   // }
    // });

    // this.setCurrentClasses();
    // this.setCurrentStyles();
  }

  // addUser(){
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.user.hide = true;
  //   this.users.unshift(this.user);
  //   this.user = {
  //   firstName: '',
  //   lastName: '',
  //   email: ''
  //   }
  // }

  // toggleHide(user:User) {
  //   user.hide = !user.hide;
  // }

  // setCurrentClasses() {
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     'big-text': this.showExtended
  //   }
  // }

  //    setCurrentStyles(){
  //      this.currentStyles = {
  //        'padding-top' : this.showExtended ? '0' : '40px' ,
  //        'font-size' : this.showExtended ? '' : '40px'
  //      }
  //    }

  // fireEvent(e) {
  //   console.log(e);
  // }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }
}
