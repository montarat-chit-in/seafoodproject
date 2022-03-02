import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css'],
})
export class StoreDetailComponent implements OnInit {
  keyParams;
  detailStore = {
    g_name: '',
    g_pic: '',
    g_address: '',
    g_tel: '',
    g_face: '',
    g_line: '',
    g_product: '',
  };

  constructor(
    private parms: ActivatedRoute,
    private firestore: AngularFirestore
  ) {
    this.parms.params.subscribe((query) => {
      return (this.keyParams = query.key);
    });
  }

  ngOnInit(): void {
    this.firestore
      .collection('group')
      .ref.doc(this.keyParams)
      .get()
      .then((data) => {
        console.log(data.data());
        this.detailStore.g_name = data.data()['g_name'];
        this.detailStore.g_pic = data.data()['g_pic'];
        this.detailStore.g_address = data.data()['g_address'];
        this.detailStore.g_tel = data.data()['g_tel'];
        this.detailStore.g_face = data.data()['g_face'];
        this.detailStore.g_line = data.data()['g_line'];
        this.detailStore.g_product = data.data()['g_product'];
      });
  }
}
