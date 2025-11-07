import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula02 } from './aula02';

describe('Aula02', () => {
  let component: Aula02;
  let fixture: ComponentFixture<Aula02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
