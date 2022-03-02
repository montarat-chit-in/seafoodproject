import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstoredataComponent } from './liststoredata.component';

describe('ListstoredataComponent', () => {
  let component: ListstoredataComponent;
  let fixture: ComponentFixture<ListstoredataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstoredataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstoredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
