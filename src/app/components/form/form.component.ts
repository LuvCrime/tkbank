import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  isValue: number = 2;

  ngOnInit(): void {
  }

  toggle(num: number) {
    this.isValue = num;
  }

}
