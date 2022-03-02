import { Component, OnInit } from '@angular/core';
import { Store } from '../services/store.model';
import { StoreService } from '../services/store.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
@Component({
  selector: 'app-store-order',
  templateUrl: './store-order.component.html',
  styleUrls: ['./store-order.component.css'],
})
export class StoreOrderComponent implements OnInit {
  storelist: Store[];
  constructor(
    public storeservice: StoreService,
    private firestore: AngularFirestore,
    private fireStorage: AngularFireStorage
  ) {}

  basePath = '/images'; //  <<<<<<<
  downloadableURL = ''; //  <<<<<<<
  task: AngularFireUploadTask; //  <<<<<<<

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.storeservice.formData = {
      id: null,
      g_name: '',
      g_pic: '',
      g_address: '',
      g_tel: '',
      g_face: '',
      g_line: '',
      g_district: '',
      g_subdistrict: '',
      g_map: '',
      g_product: '',
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
    this.firestore.doc('group/' + form.value.id).update(data);
    if (form.value.id == null) this.firestore.collection('group').add(data);
    this.resetForm(form);
  }
}
