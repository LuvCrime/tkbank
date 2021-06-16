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

  isButtonValue: string = ''; //переключение интерфеса по кнопкам "о серисе" и "проверить счет"
  checked: boolean = false; //значение чекбокса
  isButtonActive: boolean = false; //состояние копки "проверить"
  termsIsShown: boolean = false; //состояние для лейбла "условия"
  bikValue: string = ''; //проверка инпута бик
  setAccValue: string = ''; //проверка инпута РС
  resultToShow = ''; //отображение результата проверки для пользователя

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
    var result = false;
    var rs = this.setAccValue;
    var bik = this.bikValue;
        var bikRs = bik.slice(-3) + rs;
        var checksum = 0;
        var coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
        for (var i in coefficients) {
          checksum += coefficients[i] * (Number(bikRs[i]) % 10);
        }
        if (checksum % 10 === 0) {
          this.resultToShow = 'success';
          result = true;
        } else {
          this.resultToShow = 'error';
          result = false
        }
    return result;
  }

  changeCheckboxVal() {
    if(this.checked === true) {
      if(this.termsIsShown === false) {
        this.termsIsShown = true;
      } else {
      this.checked = true
      this.termsIsShown = false;
      }
    } else {
      this.checked = true
      this.termsIsShown = true;
    }
  }
}
