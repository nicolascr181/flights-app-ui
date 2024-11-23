import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsCardComponent } from './flights-card.component';

describe('FlightsCardComponent', () => {
  let component: FlightsCardComponent;
  let fixture: ComponentFixture<FlightsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
