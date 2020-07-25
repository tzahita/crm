import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { Contacts } from 'src/app/interfaces/contacts';
import { async } from 'rxjs/internal/scheduler/async';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-http-tut',
  templateUrl: './http-tut.component.html',
  styleUrls: ['./http-tut.component.scss'],
})
export class HttpTutComponent implements OnInit {
  constructor(public httpService: HttpService) {}
  // theId: Observable<Post>;
  flag: Boolean = false;
  buttonText: string = 'Get All';
  headers = ["No.","Name", "Email", "Website", "Phones"]
  contactObj: Contacts[];
  contactsObs: Observable<Contacts[]>;
  theId: Observable<Contacts[]>;
  contacts: any;

  ngOnInit(): void {
    this.sendDataToGrid();
  }

  sendDataToGrid() {
    this.contactsObs = this.httpService.getAll();
    this.contactsObs.subscribe((data) => {
      this.contacts = data as Contacts[];
    });
  }

  getAll() {
    if (this.flag) {
      this.flag = false;
      this.buttonText = 'Get All';
    } else {
      this.flag = true;
      this.buttonText = 'Hide';
    }
  }
  submit(input) {
    if (input.value > 0 && input.value < 11) {
      this.theId = this.httpService.getById(input.value);
      this.theId.subscribe((data) => {
        this.contacts = [data];
      });
    } else if (input.value.length == 0) {
      this.sendDataToGrid();
    } else {
      this.contacts = [];
    }
  }
}
