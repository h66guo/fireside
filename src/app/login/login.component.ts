import { Component } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app'
import {Router} from '@angular/router'
import { Observable } from 'rxjs'

@Component({
    selector: 'login', 
	templateUrl: './login.component.html'
})
export class LoginComponent {
    public user: firebase.User;
    public authState$: Observable<firebase.User|null>
    constructor(
		public afAuth: AngularFireAuth,
        private router:Router
	) {

        this.user= null as any;
        this.authState$=afAuth.authState;
        this.authState$.subscribe((user)=>{
            console.log("I'm getting userrrr");
            console.log(user?.displayName);

            if(user!==null){
                this.user=user;
                // window.location.href='http://fabricjs.com/';
            }
        });
    }
	login() {
	  this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    //   this.afAuth.getRedirectResult().then(result=>{
    //     // this.isLoggedIn();
    //       if(result.user){
              
    //           console.log("I should redirect");
    //           window.location.href='http://fabricjs.com/';
    //       }
    //   });
      
      
	}
	logout() {
	  this.afAuth.signOut()
	}
    isLoggedIn(): boolean{
        return this.user!==null;
    }
}