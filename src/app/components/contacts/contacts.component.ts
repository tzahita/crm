import { Component, OnInit } from '@angular/core';
import { ContactsService} from '../../services/contacts.service'
import { Contacts } from 'src/app/interfaces/contacts';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contacts[] = [];
  constructor(public ContactsService: ContactsService) {
    this.contacts = ContactsService.getAll();
  }
  ngOnInit(): void {
  }
}
