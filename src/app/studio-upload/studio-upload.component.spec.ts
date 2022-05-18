import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioUploadComponent } from './studio-upload.component';

describe('StudioUploadComponent', () => {
  let component: StudioUploadComponent;
  let fixture: ComponentFixture<StudioUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
