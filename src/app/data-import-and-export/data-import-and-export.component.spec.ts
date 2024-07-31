import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataImportAndExportComponent } from './data-import-and-export.component';

describe('DataImportAndExportComponent', () => {
  let component: DataImportAndExportComponent;
  let fixture: ComponentFixture<DataImportAndExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataImportAndExportComponent]
    });
    fixture = TestBed.createComponent(DataImportAndExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
