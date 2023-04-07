import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  themeIcon = 'brightness_2';

  @Input()
  inicio: string = ""
  @Input()
  sobreMin: string = ""
  @Input()
  projetos: string = ""
  @Input()
  contato: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    this.themeIcon = isDark ? 'brightness_4' : 'brightness_2';
  }

}
