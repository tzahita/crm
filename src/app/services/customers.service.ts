import { Injectable } from '@angular/core';
import { Contacts } from '../interfaces/contacts';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private _customers: Contacts[] = [
      {
        "name": "Park Mendez",
        "email": "parkmendez@geeknet.com",
        "birthday": new Date ("2015-07-20T04:14:50"),
        "phones": [
          "+1 (820) 424-2101",
          "+1 (995) 406-3344",
          "+1 (834) 530-3359"
        ]
      },
      {
        "name": "Cheri Cohen",
        "email": "chericohen@geeknet.com",
        "birthday": new Date ("2014-12-30T09:04:23"),
        "phones": [
          "+1 (804) 476-2737"
        ]
      },
      {
        "name": "Cash Peck",
        "email": "cashpeck@geeknet.com",
        "birthday": new Date ("2017-08-02T04:24:02"),
        "phones": [
          "+1 (928) 469-3680",
          "+1 (943) 451-3630",
          "+1 (899) 467-2535"
        ]
      },
      {
        "name": "Kent Lloyd",
        "email": "kentlloyd@geeknet.com",
        "birthday": new Date ("2018-05-18T01:02:02"),
        "phones": [
          "+1 (858) 538-2678",
          "+1 (906) 416-2281",
          "+1 (907) 533-2897"
        ]
      },
      {
        "name": "Kitty Mccoy",
        "email": "kittymccoy@geeknet.com",
        "birthday": new Date ("2015-09-05T05:35:39"),
        "phones": [
          "+1 (842) 453-2842",
          "+1 (832) 477-3820"
        ]
      },
      {
        "name": "Mayo Hart",
        "email": "mayohart@geeknet.com",
        "birthday": new Date ("2016-02-15T12:07:21"),
        "phones": [
          "+1 (989) 407-2771",
          "+1 (900) 439-2596"
        ]
      },
      {
        "name": "Lesley Byrd",
        "email": "lesleybyrd@geeknet.com",
        "birthday": new Date ("2015-10-08T10:34:31"),
        "phones": []
      },
      {
        "name": "Lela Davidson",
        "email": "leladavidson@geeknet.com",
        "birthday": new Date ("2018-06-17T01:28:27"),
        "phones": [
          "+1 (843) 425-3302",
          "+1 (827) 410-2916"
        ]
      },
      {
        "name": "Tabatha Simpson",
        "email": "tabathasimpson@geeknet.com",
        "birthday": new Date ("2019-08-30T08:11:38"),
        "phones": [
          "+1 (982) 491-2131",
          "+1 (845) 433-3675",
          "+1 (892) 406-2547"
        ]
      },
      {
        "name": "Eddie Holman",
        "email": "eddieholman@geeknet.com",
        "birthday": new Date ("2015-09-11T04:26:28"),
        "phones": [
          "+1 (989) 578-2732",
          "+1 (877) 441-2530",
          "+1 (943) 467-2492"
        ]
      }

  ];

  getAll(): Contacts[] {
    return this._customers;
  }
  constructor() {}
}
