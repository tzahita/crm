import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  template: `
  <div class="row">
    <div class="col">
      <div class="jumbotron py-3">
        <h3><i [ngClass]="icon" class="mr-3"></i>{{ title | titlecase }}</h3>
        <p class="lead">{{ description | paragraphUpperCase }}</p>
      </div>
    </div>
  </div>`,
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponentComponent implements OnInit {
  constructor() {}
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() description: string = '';

  ngOnInit(): void {}
}
