import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public src: string = './assets/images/logotipo.png';
  constructor() {}

  ngOnInit(): void {}
}
