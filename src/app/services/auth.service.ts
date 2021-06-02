import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afu: AngularFireAuth, private router: Router) {}

  // all firebase getdata functions

  get CurrentUserName() {
    return this.afu['email'];
  }

  get CurrentUser() {
    return this.afu.authState.pipe().toPromise();
  }
  async registerWithEmail(email: string, password: string) {
    try {
      const result = await this.afu.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async loginWithEmail(email: string, password: string) {
    try {
      const result = await this.afu.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  logout() {
    this.afu.signOut();
  }

  // isUserEmailLoggedIn(): boolean {
  //   if (this.authState !== null && !this.isUserAnonymousLoggedIn) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // registerWithEmail(email: string, password: string) {
  //   return this.afu
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       this.authState = user;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       throw error;
  //     });
  // }

  // loginWithEmail(email: string, password: string) {
  //   return this.afu
  //     .signInWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       this.authState = user;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       throw error;
  //     });
  // }
}
