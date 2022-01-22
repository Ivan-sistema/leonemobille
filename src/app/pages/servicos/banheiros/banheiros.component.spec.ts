import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanheirosComponent } from './banheiros.component';

describe('BanheirosComponent', () => {
  let component: BanheirosComponent;
  let fixture: ComponentFixture<BanheirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanheirosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanheirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
