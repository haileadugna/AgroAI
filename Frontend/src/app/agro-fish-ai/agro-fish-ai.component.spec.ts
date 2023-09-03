import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroFishAiComponent } from './agro-fish-ai.component';

describe('AgroFishAiComponent', () => {
  let component: AgroFishAiComponent;
  let fixture: ComponentFixture<AgroFishAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgroFishAiComponent]
    });
    fixture = TestBed.createComponent(AgroFishAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
