import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // themeIcon = 'brightness_2';
  constructor() { }

  ngOnInit(): void {
  }

  // autoToggleTheme(){
  //   const hour = new Date();
  //   const currentHour = hour.getHours();
  //   const body = document.body;
  //   const isDark = body.classList.toggle('dark-theme');
  //   this.themeIcon = isDark ? 'brightness_4' : 'brightness_2';

  //   if (currentHour >= 18 || currentHour < 6) {
  //     // horário noturno
  //     body.classList.add('dark-theme');
  //     this.themeIcon = 'brightness_4';
  //   } else {
  //     // horário diurno
  //     body.classList.remove('dark-theme');
  //     this.themeIcon = 'brightness_2';
  //   }

  // }

}
