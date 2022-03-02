import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Order } from '../services/order.model';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  productlist: Order[];

  constructor(
    public orderservice: OrderService,
    private firestore: AngularFirestore,
    private fireStorage: AngularFireStorage,
    private router: Router
  ) {}

  basePath = '/images'; //  <<<<<<<
  downloadableURL = ''; //  <<<<<<<
  task: AngularFireUploadTask; //  <<<<<<<

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.orderservice.formData = {
      id: null,
      p_name: '',
      p_pic: '',
      p_price: '',
      p_weight: '',
      p_list: '',
      p_address: '',
      p_tel: '',
      p_num: '',
      p_face: '',
      p_line: '',
      p_save: '',
      type: '',
    };
  }

  async onFileChanged(event) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`;
      this.task = this.fireStorage.upload(filePath, file);
      (await this.task).ref.getDownloadURL().then((url) => {
        this.downloadableURL = url;
      });
    } else {
      alert('No images selected');
      this.downloadableURL = '';
    }
  }

  onSubmit(form: NgForm) {
    // let image = (<HTMLInputElement>this.image.nativeElement).files[0];
    let data = Object.assign({}, form.value);
    delete data.id;
    this.firestore.doc('product/' + form.value.id).update(data);
    if (form.value.id == null) this.firestore.collection('product').add(data);
    this.resetForm(form);
  }
  // onSubmit(form: NgForm) {
  //   let data = form.value;
  //   this.firestore.collection('product').add(data);
  //   this.resetForm(form);
  // }
}
