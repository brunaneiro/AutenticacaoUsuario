import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.page.html',
  styleUrls: ['./ambiente.page.scss'],
})
export class AmbientePage implements OnInit {

  constructor(public alertController: AlertController, private nav:NavController, ) { }

  ngOnInit() {
  }

  async registrarAmbiente(){
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Ambiente cadrastado com sucesso!',
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
