import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  toggle: boolean = true;
  constructor() {}

  toggleView(change: MatButtonToggleChange) {
     this.toggle = change.value;
  }

  ngOnInit(): void {
  }

}
