import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsContainerListComponent } from './flights-container-list.component';

describe('FlightsContainerListComponent', () => {
  let component: FlightsContainerListComponent;
  let fixture: ComponentFixture<FlightsContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsContainerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightsContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
