import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchLenguajesComponent } from './switch-lenguajes.component';

describe('SwitchLenguajesComponent', () => {
  let component: SwitchLenguajesComponent;
  let fixture: ComponentFixture<SwitchLenguajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchLenguajesComponent]
    });
    fixture = TestBed.createComponent(SwitchLenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
