import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadLocationsComponent } from './load-locations.component';

describe('LoadLocationsComponent', () => {
  let component: LoadLocationsComponent;
  let fixture: ComponentFixture<LoadLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
