import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  themeIcon = 'brightness_2';

  @Input() targetIds!: string[];

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

  scrollToTarget(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  changeLanguage(language: string) {
    const availableLanguages = ['pt-br', 'en', 'es'];
  
    if (availableLanguages.includes(language)) {
      this.translateService.addLangs(availableLanguages);
      this.translateService.setDefaultLang('pt-br');
      const browserLang = this.translateService.getBrowserLang() ?? 'pt-br';
      this.translateService.setDefaultLang(browserLang.match(/pt-br|en|es/) ? browserLang : 'pt-br');
      this.translateService.use(language);
      console.log(`Idioma selecionado: ${language}`);
      console.log('Browser language:', browserLang);
    } else {
      console.error(`Language "${language}" is not available.`);
    }
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
     
      body.classList.add('dark-theme');
      this.themeIcon = 'brightness_4' ; 
    } else {
     
      body.classList.remove('dark-theme');
      this.themeIcon = 'brightness_2' ;
    }

    this.autoToggleThemeEvent.emit();
  }

}
