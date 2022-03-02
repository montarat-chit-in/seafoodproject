import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/services/store.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-liststoredata',
  templateUrl: './liststoredata.component.html',
  styleUrls: ['./liststoredata.component.css'],
})
export class ListstoredataComponent implements OnInit {
  storetlist: Store[];
  constructor(
    public firestore: AngularFirestore,
    public storeservice: StoreService
  ) {}

  ngOnInit(): void {
    this.storeservice.getStore().subscribe((actionArray) => {
      this.storetlist = actionArray.map((item) => {
        return {
          id: item.payload.doc.id,
          ...(<Store>item.payload.doc.data()),
        };
      });
    });
  }

  onEdit(list: Store) {
    this.storeservice.formData = Object.assign({}, list);
  }

  onDelete(id: string) {
    if (confirm('คุณต้องการจะลบผู้ประกอบการชื่อนี้จริงหรือไม่ ?')) {
      this.firestore.doc('group/' + id).delete();
    }
  }
}
