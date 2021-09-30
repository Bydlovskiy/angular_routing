import { Pipe, PipeTransform } from '@angular/core';
import { IContacts } from '../interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(contacts: Array<IContacts>, howsort: string) {
    if (howsort == 'first') {
      return contacts.sort((a, b) => a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1);
    } else if (howsort == 'firstReverse') {
      return contacts.reverse()
    }
    if (howsort == 'last') {
      return contacts.sort((a, b) => a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1);
    } else if (howsort == 'lastReverse') {
      return contacts.reverse()
    }
    if (howsort == 'number') {
      return contacts.sort((a, b) => a.phoneNumber > b.phoneNumber ? 1 : -1);
    } else if (howsort == 'numberReverse') {
      return contacts.reverse()
    }
    return contacts
  }

}
