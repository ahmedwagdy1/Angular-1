import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazylodaingComponent } from './lazylodaing.component';

describe('LazylodaingComponent', () => {
  let component: LazylodaingComponent;
  let fixture: ComponentFixture<LazylodaingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazylodaingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazylodaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
