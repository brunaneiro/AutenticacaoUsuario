import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-embarcados',
  templateUrl: './embarcados.page.html',
  styleUrls: ['./embarcados.page.scss'],
})
export class EmbarcadosPage implements OnInit {

  constructor(public alertController: AlertController, private nav:NavController, ) { }

  ngOnInit() {
  }

  async registrarSisEmb(){
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Sistema Embarcado registrado com sucesso!',
      buttons: [
        { 
          text: 'COTINUAR', handler: () => {
            window.location.reload();
          } 
        }
      ]
    });
  
    await alert.present(); 
  }

}
