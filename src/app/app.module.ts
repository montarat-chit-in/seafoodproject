import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './store/store.component';
import { FishComponent } from './product/fish/fish.component';
import { SquidComponent } from './product/squid/squid.component';
import { ShrimpComponent } from './product/shrimp/shrimp.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './services/order.service';
import { ListdataComponent } from './order/listdata/listdata.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductComponent },
  { path: 'store', component: StoreComponent },
  { path: 'fish', component: FishComponent },
  { path: 'squid', component: SquidComponent },
  { path: 'shrimp', component: ShrimpComponent },
  { path: 'product/:key', component: ProductDetailComponent },
  { path: 'fish/:key', component: ProductDetailComponent },
  { path: 'squid/:key', component: ProductDetailComponent },
  { path: 'shrimp/:key', component: ProductDetailComponent },
  { path: 'order', component: OrderComponent },
  { path: 'listdata', component: ListdataComponent },
  { path: 'store/:key', component: StoreDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductComponent,
    FooterComponent,
    StoreComponent,
    FishComponent,
    SquidComponent,
    ShrimpComponent,
    ProductDetailComponent,
    OrderComponent,
    ListdataComponent,
    StoreDetailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
