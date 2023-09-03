import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishFarmComponent } from './fish-farm.component';

describe('FishFarmComponent', () => {
  let component: FishFarmComponent;
  let fixture: ComponentFixture<FishFarmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishFarmComponent]
    });
    fixture = TestBed.createComponent(FishFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
