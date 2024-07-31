import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAndStatisticsComponent } from './charts-and-statistics.component';

describe('ChartsAndStatisticsComponent', () => {
  let component: ChartsAndStatisticsComponent;
  let fixture: ComponentFixture<ChartsAndStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsAndStatisticsComponent]
    });
    fixture = TestBed.createComponent(ChartsAndStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
