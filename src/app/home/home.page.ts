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
cep: string ='';
cepP: any;
cepL:any;
//pesquisa
logradouro: string ='';
estado:string ='';
cidade:string ='';

  constructor(private rt: Router, private http: HttpClient, public toastC: ToastController)  {}

consultar(){
  if(this.cep){
   this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe( (res) => {
    this.cepP = res;
});
}else if(this.cidade && this.logradouro && this.estado){
 this.http.get(`https://viacep.com.br/ws/${this.estado}/${this.cidade}/${this.logradouro}/json/`).subscribe ((res) => {
  this.cepL =res;
});
}

};

}
