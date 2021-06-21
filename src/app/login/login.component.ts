import { Component } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app'

@Component({
    selector: 'login', 
	templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(
		public afAuth: AngularFireAuth
	) {}
	login() {
	  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
	}
	logout() {
	  this.afAuth.signOut()
	}
}