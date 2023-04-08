import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.autoToggleTheme();
    }, 60 * 60 * 1000);
  
  }
  ngAfterViewInit(){
    this.autoToggleTheme();
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
  }
  
  toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    this.themeIcon = isDark ? 'brightness_4' : 'brightness_2';
  }

  @Output()
  autoToggleThemeEvent = new EventEmitter<void>();
  
  autoToggleTheme(){
    const hour = new Date();
    const currentHour = hour.getHours();
    const body = document.body;

    if (currentHour >= 18 || currentHour < 6) {
      // horário noturno
      body.classList.add('dark-theme');
      this.themeIcon = 'brightness_4' ; 
    } else {
      // horário diurno
      body.classList.remove('dark-theme');
      this.themeIcon = 'brightness_2' ;
    }

    this.autoToggleThemeEvent.emit();
  }

}
