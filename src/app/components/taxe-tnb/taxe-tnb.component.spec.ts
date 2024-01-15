import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeTnbComponent } from './taxe-tnb.component';

describe('TaxeTnbComponent', () => {
  let component: TaxeTnbComponent;
  let fixture: ComponentFixture<TaxeTnbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxeTnbComponent]
    });
    fixture = TestBed.createComponent(TaxeTnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
