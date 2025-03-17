import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyB2YvnV6yUA0x1ky0MNdjySgP2YQYl8Wtk",
    authDomain: "tienda-online-e7015.firebaseapp.com",
    databaseURL: "https://tienda-online-e7015-default-rtdb.firebaseio.com",
    projectId: "tienda-online-e7015",
    storageBucket: "tienda-online-e7015.appspot.com",
    messagingSenderId: "406263713806",
    appId: "1:406263713806:web:7c77d8508b355ec368ec5f"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() { 
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
