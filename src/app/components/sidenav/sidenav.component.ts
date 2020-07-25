import { Component, OnInit } from '@angular/core';
interface NavItems {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navItems: NavItems[] = [
    {
      title: 'customers',
      icon: 'fas fa-users',
      link: 'customers',
    },
    {
      title: 'contacts',
      icon: 'fas fa-address-book',
      link: 'contacts',
    },
    {
      title: 'leads',
      icon: 'fas fa-hand-point-up',
      link: 'leads',
    },
    {
      title: 'reports',
      icon: 'fas fa-flag',
      link: 'reports',
    },
    {
      title: 'integrations',
      icon: 'fab fa-stack-exchange',
      link: 'integrations',
    },
    {
      title: 'Year-end sale',
      icon: 'fas fa-glass-cheers',
      link: 'yes',
    },
    {
      title: 'HTTP Tut',
      icon: 'fas fa-glass-cheers',
      link: 'http',
    },
  ];


  constructor() {}

  ngOnInit(): void {}
}
