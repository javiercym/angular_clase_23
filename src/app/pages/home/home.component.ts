import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user!:string;
  pass!:string;

  usuario = "javier";
  contraseña= "isaac";

  constructor(private globalDataService: LoginService) { }
  
  login(){
    if (this.user == this.usuario && this.pass == this.contraseña) {
      this.guardarDatos();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario y contraseña validas',
        showConfirmButton: false,
        timer: 1500
      })

    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El usuario o contraseña es incorrecto',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  guardarDatos(){


    localStorage.setItem('usuario',this.usuario)
    localStorage.setItem('login',"true")
    this.globalDataService.globalVariable = true;
  }
}
