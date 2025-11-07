import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula01 } from './aula01';

describe('Aula01', () => {
  let component: Aula01;
  let fixture: ComponentFixture<Aula01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
