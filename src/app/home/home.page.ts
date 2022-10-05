import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController,
    public toastControler: ToastController,
    private loadingCtrl: LoadingController,
    private filmeService: FilmesService,
    private rota: Router) { }
  
  async ngOnInit() {
  //console.log('passou no home');
  //this.carregarFilmes();  

    this.filmeService.getProductions();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
