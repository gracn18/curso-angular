import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserModel} from '../../models/User.models';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  
  usuario : UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {
    this.usuario.nombre="valor inicio";
  }
  crearUsuario(form: NgForm){
    console.log('formulario: ', form)
    console.log('usuario: ', this.usuario)
  }
}
