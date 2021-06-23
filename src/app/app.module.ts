import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment'
import { LoginComponent } from './login/login.component'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {fabric} from 'fabric'
// import { Login1Component } from './login1/login1.component'

const config = {
  apiKey: "AIzaSyBeS6jhQcIj4Ao9IDv9TvYJF76TvrLc_dM",
  authDomain: "pencle.firebaseapp.com",
  projectId: "pencle",
  storageBucket: "pencle.appspot.com",
  messagingSenderId: "176525273023",
  appId: "1:176525273023:web:3aed602723c36bef90630a",
  measurementId: "G-MSVBYS4BNY"
};

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth

    AngularFireStorageModule, BrowserAnimationsModule ,// storage
    MatButtonModule
  ],
  declarations: [AppComponent ,LoginComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}