import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavanderiasComponent } from './lavanderias.component';

describe('LavanderiasComponent', () => {
  let component: LavanderiasComponent;
  let fixture: ComponentFixture<LavanderiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavanderiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LavanderiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
