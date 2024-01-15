import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRedevableComponent } from './update-redevable.component';

describe('UpdateRedevableComponent', () => {
  let component: UpdateRedevableComponent;
  let fixture: ComponentFixture<UpdateRedevableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRedevableComponent]
    });
    fixture = TestBed.createComponent(UpdateRedevableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
