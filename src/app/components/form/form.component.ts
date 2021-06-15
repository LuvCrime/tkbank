import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(private router: Router ) {
    router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd)
          if(event.url === '/') {
            this.isButtonValue = 'checkAcc';
          } else {
            this.isButtonValue = 'aboutService';
          }
      });
  }
  isButtonValue: string = '';
  checked = false;
  isButtonActive = false;
  bikValue = '';
  setAccValue = '';

  ngOnInit(): void {
  }


  changeHandler() {
    if(this.setAccValue && this.bikValue) {
      this.isButtonActive = true;
    } else {
      this.isButtonActive = false;
    }
  }

  checkAccount() {
    console.log('hi')
  }

  changeCheckboxVal() {
    if(this.checked === true) {
      this.checked = false
    } else {
      this.checked = true
    }
  }
}
