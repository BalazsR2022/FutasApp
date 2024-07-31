import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSupportComponent } from './mobile-support.component';

describe('MobileSupportComponent', () => {
  let component: MobileSupportComponent;
  let fixture: ComponentFixture<MobileSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileSupportComponent]
    });
    fixture = TestBed.createComponent(MobileSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
