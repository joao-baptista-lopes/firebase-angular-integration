import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  userName: string | null; // porque a variável pode ser string ou nulo 
  localizacao: any ;

 

  ngOnInit(): void {
      this.userName = sessionStorage.getItem('user');
  }

}
