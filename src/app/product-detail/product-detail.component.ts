import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  keyParams;
  detailProduct = {
    p_name: '',
    p_pic: '',
    p_address: '',
    p_list: '',
    p_num: '',
    p_price: '',
    p_tel: '',
    p_face: '',
    p_line: '',
    p_weight: '',
    p_save: '',
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
      .collection('product')
      .ref.doc(this.keyParams)
      .get()
      .then((data) => {
        console.log(data.data());
        this.detailProduct.p_name = data.data()['p_name'];
        this.detailProduct.p_pic = data.data()['p_pic'];
        this.detailProduct.p_address = data.data()['p_address'];
        this.detailProduct.p_list = data.data()['p_list'];
        this.detailProduct.p_num = data.data()['p_num'];
        this.detailProduct.p_price = data.data()['p_price'];
        this.detailProduct.p_tel = data.data()['p_tel'];
        this.detailProduct.p_face = data.data()['p_face'];
        this.detailProduct.p_line = data.data()['p_line'];
        this.detailProduct.p_weight = data.data()['p_weight'];
        this.detailProduct.p_save = data.data()['p_save'];
      });
  }
}
