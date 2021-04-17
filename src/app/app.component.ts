import { Component } from '@angular/core';
import { NavController, AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'Ambientes', url: '/ambientes', icon: 'home' },
    { title: 'Embarcados', url: '/embarcados', icon: 'hardware-chip' },
    { title: 'Acessos', url: '/folder/acessos', icon: 'finger-print' },
    { title: 'Relatórios', url: '/folder/relatorios', icon: 'stats-chart' },
    { title: 'Alertas', url: '/folder/alertas', icon: 'megaphone' }
  ];
  
  constructor(private nav:NavController, public alertController: AlertController, public menuCtrl: MenuController) {}

  public rootPage: 'Embarcados';

  async sair(){
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Deseja realmente sair?',
      buttons: [
        { 
          text: 'SAIR', handler: () => {
            this.menuCtrl.enable(false); 
            this.nav.navigateForward('/login');
          } 
        },
        { text: 'CANCELAR',}
      ]
    });
  
    await alert.present();
  }
  
}
