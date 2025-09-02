import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
CEP: Observable<any> | undefined

  constructor(private rt: Router, private http: HttpClient, public toastC: ToastController) {}

OnInit(){
this.CEP = this.http.get(`http://viacep.com.br/`);
}

}
