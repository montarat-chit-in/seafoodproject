import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Store } from './store.model';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  formData: Store;
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getStore() {
    return this.firestore.collection('group').snapshotChanges();
  }
}
