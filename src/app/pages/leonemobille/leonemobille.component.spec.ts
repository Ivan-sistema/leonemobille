import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeonemobilleComponent } from './leonemobille.component';

describe('LeonemobilleComponent', () => {
  let component: LeonemobilleComponent;
  let fixture: ComponentFixture<LeonemobilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeonemobilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeonemobilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
