import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
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
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) this.firestore.collection('product').add(data);
    else this.firestore.doc('product/' + form.value.id).update(data);
    this.resetForm(form);
    this.router.navigate(['/listdata']);
  }
  // onSubmit(form: NgForm) {
  //   let data = form.value;
  //   this.firestore.collection('product').add(data);
  //   this.resetForm(form);
  // }
}
