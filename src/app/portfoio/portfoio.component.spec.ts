import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoioComponent } from './portfoio.component';

describe('PortfoioComponent', () => {
  let component: PortfoioComponent;
  let fixture: ComponentFixture<PortfoioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfoioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfoioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
