import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserModel} from '../../models/User.models';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {
  usuario : UserModel = new UserModel();
  constructor() { }

  ngOnInit(): void {
  }

  ingresar(form: NgForm){
    
    console.log('usuario: ', this.usuario)
  }
}
