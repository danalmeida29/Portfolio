import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  @Input()
  projetoName: string =""

  @Input()
  projetoCover: string =""

  @Input()
  projetoAlt: string =""

  constructor() { }

  ngOnInit(): void {
  }

}
