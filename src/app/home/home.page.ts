import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
cepP:any = null;
cep:string ='';

  constructor(private rt: Router, private http: HttpClient, public toastC: ToastController) {}


consultar(){
this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe((res:any) => {
  this.cepP = res;
})
};

}
