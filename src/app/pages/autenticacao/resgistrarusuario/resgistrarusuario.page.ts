import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resgistrarusuario',
  templateUrl: './resgistrarusuario.page.html',
  styleUrls: ['./resgistrarusuario.page.scss'],
})
export class ResgistrarusuarioPage implements OnInit {

  constructor(public menuCtrl: MenuController, public alertController: AlertController, private nav:NavController, ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async continuar(){
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Confirmação do registro foi enviado para o e-mail',
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

