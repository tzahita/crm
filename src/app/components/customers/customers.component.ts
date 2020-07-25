import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Contacts } from 'src/app/interfaces/contacts';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  contacts: Contacts[] = [];
  constructor(public ContactsService: CustomersService) {
    this.contacts = ContactsService.getAll();
  }

  ngOnInit(): void {}
  
}
