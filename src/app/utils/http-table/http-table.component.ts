import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-http-table',
  templateUrl: './http-table.component.html',
  styleUrls: ['./http-table.component.scss'],
})
export class HttpTableComponent implements OnInit {
  constructor() {}
  @Input() headers: string[];
  ngOnInit(): void {}
  @Input() contacts: any;
}
