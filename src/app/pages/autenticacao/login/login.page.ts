import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logo = 'https://media1.tenor.com/images/a896411a001705014cf9075aae195420/tenor.gif?itemid=15705678'

  constructor(private nav:NavController, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  logar(){
    this.nav.navigateForward('/perfil')
  }

  registrarUsuario(){
    this.nav.navigateForward('/resgistrarusuario')
  }

  recuperarSenha(){
    this.nav.navigateForward('/recuperarsenha')
  }

}
