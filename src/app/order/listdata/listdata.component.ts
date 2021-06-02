import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { OrderService } from '../../services/order.service';
import { Order } from '../../services/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css'],
})
export class ListdataComponent implements OnInit {
  productlist: Order[];
  // lists: Observable<any[]>;
  searchText: string = '';
  constructor(
    public firestore: AngularFirestore,
    public oderservice: OrderService,
    public router: Router
  ) {
    // this.lists = this.firestore.collection('product').valueChanges();
  }

  ngOnInit() {
    this.oderservice.getOrder().subscribe((actionArray) => {
      this.productlist = actionArray.map((item) => {
        return {
          id: item.payload.doc.id,
          ...(<Order>item.payload.doc.data()),
        };
      });
    });
  }

  onEdit(list: Order) {
    this.oderservice.formData = Object.assign({}, list);
  }

  onDelete(id: string) {
    if (confirm('คุณต้องการจะลบสินค้าชิ้นนี้จริงหรือไม่ ?')) {
      this.firestore.doc('product/' + id).delete();
    }
  }

  // filterCondition(list) {
  //   return (
  //     list.p_name.tolowerCase().indexOf(this.searchText.toLowerCase()) != -1
  //   );
  // }
}
