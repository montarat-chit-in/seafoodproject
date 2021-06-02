import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { rejects } from 'node:assert';
import { resolve } from 'node:path';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private firestore: AngularFirestore) {}

  // filterData(customfilter) {
  //   return new Promise((resolve, rejects) => {
  //     if (customfilter.subdistrict == '') rejects();
  //     if (customfilter.filtervalue == '') rejects();
  //     resolve(
  //       this.firestore
  //         .collection('group', (ref) =>
  //           ref.where(
  //             customfilter.district,
  //             customfilter.subdistrict,
  //             customfilter.flitervalue
  //           )
  //         )
  //         .valueChanges()
  //     );
  //   });
  // }

  getStore() {
    return this.firestore.collection('group').snapshotChanges();
  }

  // filterByDistrict(district) {
  //   const bydistrict = this.firestore
  //     .collection('group', (ref) => ref.where('g_district', '==', district))
  //     .valueChanges();
  //   return bydistrict;
  // }
}
