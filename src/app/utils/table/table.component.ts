import { Component, OnInit, Input  } from '@angular/core';
import { Contacts } from 'src/app/interfaces/contacts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  @Input() contacts: Contacts[];

}
