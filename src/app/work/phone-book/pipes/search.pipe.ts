import { Pipe, PipeTransform } from '@angular/core';
import { IContacts } from '../interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(contacts: Array<IContacts>, searchLine: string,): any {
    if (!searchLine) {
      return contacts
    }
    if (!contacts) {
      return []
    }
    if (contacts.filter(contact => contact.firstName.toLowerCase().includes(searchLine.toLowerCase())).length > 0) {
      return contacts.filter(contact => contact.firstName.toLowerCase().includes(searchLine.toLowerCase()))
    }
    if (contacts.filter(contact => contact.lastName.toLowerCase().includes(searchLine.toLowerCase())).length > 0) {
      return contacts.filter(contact => contact.lastName.toLowerCase().includes(searchLine.toLowerCase()))
    }
    if (contacts.filter(contact => contact.phoneNumber.toLowerCase().includes(searchLine.toLowerCase())).length > 0) {
      return contacts.filter(contact => contact.phoneNumber.includes(searchLine))
    }
    return []
  }

}
