import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhasComponent } from './cozinhas.component';

describe('CozinhasComponent', () => {
  let component: CozinhasComponent;
  let fixture: ComponentFixture<CozinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CozinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
