import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {

  correo: string = '';
  contrasena: string = '';
  nombreUsuario: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
    
    login(){
      if(this.correo.trim()===''||this.contrasena.trim()=== ''){
        alert('Ingresa correo y contraseña');
          return;
      }
      const usuarios: any = {
      'juan@mail.com': 'Juan',
      'maria@mail.com': 'María',
      'luis@mail.com': 'Luis'
      };
      this.nombreUsuario = usuarios[this.correo];

      if(!this.nombreUsuario){
        alert('Correo no registrado')
        return
      }

      this.navCtrl.navigateForward(['/home2', this.nombreUsuario])
    }


}