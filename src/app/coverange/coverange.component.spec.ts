import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverangeComponent } from './coverange.component';

describe('CoverangeComponent', () => {
  let component: CoverangeComponent;
  let fixture: ComponentFixture<CoverangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
