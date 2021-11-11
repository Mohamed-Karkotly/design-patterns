import { Component, OnInit } from '@angular/core';
import { demonstrate } from '../../utils/demonstrate';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    demonstrate();
  }
}
