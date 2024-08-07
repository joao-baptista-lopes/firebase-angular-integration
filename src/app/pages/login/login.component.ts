import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private route :Router ){}
  userName : string ;

  login(){
    sessionStorage.setItem('user', this.userName) // na sessão de usuário ele seta um item com a chave e o seu valor
    //Assim na application ele guardará numa tabela a chave com o valor especificado, nesse caso ele é dinâmico (Username)

    this.route.navigate(['home']) //Redirecionar para a rota home
    
    
  }
}
