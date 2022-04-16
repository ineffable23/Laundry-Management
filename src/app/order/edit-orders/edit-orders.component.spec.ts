import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdersComponent } from './edit-orders.component';

describe('EditOrdersComponent', () => {
  let component: EditOrdersComponent;
  let fixture: ComponentFixture<EditOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
