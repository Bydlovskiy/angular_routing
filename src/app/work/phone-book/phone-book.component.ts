import { Component, OnInit } from '@angular/core';
import { IContacts, ISort } from './interface';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  public firstName!: string;
  public lastName!: string;
  public phoneNumber!: string;
  public contacts: Array<IContacts> = [
    {
      firstName: 'Oleg',
      lastName: 'Olegovich',
      phoneNumber: '380931560000'
    },
    {
      firstName: 'Alina',
      lastName: 'Petriv',
      phoneNumber: '312341560000'
    },
    {
      firstName: 'Vasyl',
      lastName: 'Strodupciv',
      phoneNumber: '08003251010'
    }

  ];
  public isEdit = false;
  public editIndex!: number;
  public search!: string;
  private regExpFirstName = /^[A-Za-z]{2,}$/;
  private regExpLastName = /^[A-Za-z]{2,}$/;
  private regExpPhoneNumber = /^\d{10,12}$/;
  public firstNamePlaceholder = 'First name goes here';
  public lastNamePlaceholder = 'Last name goes here';
  public phoneNumberPlaceholder = 'Number phone goes here';
  public disabledBtn = false;
  public howsort: ISort = {
    howSort: true,
    whatSort: ''
  };
  public down !: boolean;
  public firstNameDirection = false;
  public lastNameDirection = false;
  public phoneNumberDirection = false;
  constructor() { }

  ngOnInit(): void {
  }

  public disabled(): boolean {
    const firstName: boolean = this.regExpFirstName.test(this.firstName);
    const lastName: boolean = this.regExpLastName.test(this.lastName);
    const phoneNumber: boolean = this.regExpPhoneNumber.test(this.phoneNumber);
    if (firstName && lastName && phoneNumber) {
      return true;
    } else {
      return false;
    }
  }

  public createContactInfo(): void {
    let user = new contactInfo(this.firstName, this.lastName, this.phoneNumber);
    this.contacts.push(user);
    this.clearInputs();
  }

  public deleteContact(i: number): void {
    this.contacts.splice(i, 1)
  }

  public editContact(contact: IContacts, i: number): void {
    this.firstName = contact.firstName;
    this.lastName = contact.lastName;
    this.phoneNumber = contact.phoneNumber;
    this.isEdit = true;
    this.editIndex = i;
  }

  public saveContact(): void {
    this.contacts[this.editIndex].firstName = this.firstName;
    this.contacts[this.editIndex].lastName = this.lastName;
    this.contacts[this.editIndex].phoneNumber = this.phoneNumber;
    this.clearInputs()
    this.isEdit = false;
  }

  public clearInputs() {
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = ''
  }

  public sortTo(sort: string, reverse: string) {
    if (this.howsort.howSort) {
      this.howsort.whatSort = sort;
      this.howsort.howSort = false;
      this.down = false
    } else {
      this.howsort.whatSort = reverse;
      this.howsort.howSort = true;
      this.down = true
    }
    this.direction();
  }
  public direction() {
    if (this.howsort.whatSort == 'first' || this.howsort.whatSort == 'firstReverse') {
      this.firstNameDirection = true;
      this.lastNameDirection = false;
      this.phoneNumberDirection = false;
    } else if (this.howsort.whatSort == 'last' || this.howsort.whatSort == 'lastReverse') {
      this.firstNameDirection = false;
      this.lastNameDirection = true;
      this.phoneNumberDirection = false;
    } else if (this.howsort.whatSort == 'number' || this.howsort.whatSort == 'numberReverse') {
      this.firstNameDirection = false;
      this.lastNameDirection = false;
      this.phoneNumberDirection = true;
    }
  }

}

class contactInfo {
  firstName!: string;
  lastName!: string;
  phoneNumber!: string;
  constructor(firstName: string, lastName: string, phoneNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber
  }
}
