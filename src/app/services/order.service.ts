import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { Order } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  formData: Order;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getOrder() {
    return this.firestore.collection('product').snapshotChanges();
  }
  getStore() {
    return this.firestore.collection('group').snapshotChanges();
  }

  getImage(image: File) {
    let ref = this.storage.ref('images/' + image.name);
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe((g_pic) => {
        this.firestore.collection('group').add({
          g_pic,
        });
      });
    });
  }
}
