import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuongeeComponent } from './tuongee.component';

describe('TuongeeComponent', () => {
  let component: TuongeeComponent;
  let fixture: ComponentFixture<TuongeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuongeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuongeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
