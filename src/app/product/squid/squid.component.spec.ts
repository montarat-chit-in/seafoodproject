import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquidComponent } from './squid.component';

describe('SquidComponent', () => {
  let component: SquidComponent;
  let fixture: ComponentFixture<SquidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
