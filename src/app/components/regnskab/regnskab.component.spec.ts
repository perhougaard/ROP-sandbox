import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnskabComponent } from './regnskab.component';

describe('RegnskabComponent', () => {
  let component: RegnskabComponent;
  let fixture: ComponentFixture<RegnskabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegnskabComponent]
    });
    fixture = TestBed.createComponent(RegnskabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
