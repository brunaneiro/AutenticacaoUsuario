import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.page.html',
  styleUrls: ['./recuperarsenha.page.scss'],
})
export class RecuperarsenhaPage implements OnInit {

  constructor(public menuCtrl: MenuController, public alertController: AlertController, private nav:NavController, ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async recuperarSenha(){
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Link para recuperação de senha enviada para o email',
      buttons: [
        { text: 'Ir para o Login', handler: () => {this.nav.navigateForward('/login'); } }
      ]
    });
  
    await alert.present();
  }

  async sair(){
    this.nav.navigateForward('/login'); 
  }
}
