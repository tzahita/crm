import { Injectable } from '@angular/core';
import { Contacts } from '../interfaces/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private _contacts: Contacts[] = [
    {
      name: 'Aurora Munoz',
      email: 'auroramunoz@visalia.com',
      birthday: new Date('2014-10-13T07:01:48'),
      phones: ['+1 (826) 541-2275', '+1 (889) 424-3640'],
    },
    {
      name: 'Juana Cline',
      email: 'juanacline@visalia.com',
      birthday: new Date('2014-09-13T10:04:44'),
      phones: ['+1 (990) 443-2104', '+1 (858) 506-2566', '+1 (968) 567-3190'],
    },
    {
      name: 'Rivers Bates',
      email: 'riversbates@visalia.com',
      birthday: new Date('2020-04-02T02:48:53'),
      phones: ['+1 (865) 458-2259'],
    },
    {
      name: 'Thornton Silva',
      email: 'thorntonsilva@visalia.com',
      birthday: new Date('2020-03-20T06:51:37'),
      phones: ['+1 (891) 554-2715'],
    },
    {
      name: 'Shari Moon',
      email: 'sharimoon@visalia.com',
      birthday: new Date('2017-03-20T09:04:09'),
      phones: ['+1 (828) 536-2596', '+1 (838) 519-3987', '+1 (836) 570-3557'],
    },
    {
      name: 'Mcclure Powell',
      email: 'mcclurepowell@visalia.com',
      birthday: new Date('2017-01-25T12:29:51'),
      phones: ['+1 (805) 433-3430'],
    },
    {
      name: 'Cherry Parsons',
      email: 'cherryparsons@visalia.com',
      birthday: new Date('2017-08-30T02:56:02'),
      phones: ['+1 (919) 582-3843', '+1 (802) 408-2514', '+1 (898) 418-2711'],
    },
    {
      name: 'Jennifer Payne',
      email: 'jenniferpayne@visalia.com',
      birthday: new Date('2016-02-14T05:59:40'),
      phones: [],
    },
    {
      name: 'Newman Wiggins',
      email: 'newmanwiggins@visalia.com',
      birthday: new Date('2016-03-19T10:31:15'),
      phones: ['+1 (906) 443-2134', '+1 (824) 471-3886', '+1 (966) 501-2918'],
    },
    {
      name: 'Eaton Dunn',
      email: 'eatondunn@visalia.com',
      birthday: new Date('2019-11-13T02:14:49'),
      phones: ['+1 (894) 472-2161', '+1 (933) 448-2491'],
    },
  ];

  getAll(): Contacts[] {
    return this._contacts;
  }
  constructor() {}
}
