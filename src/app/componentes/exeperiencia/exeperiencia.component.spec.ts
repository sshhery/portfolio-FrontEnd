import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeperienciaComponent } from './exeperiencia.component';

describe('ExeperienciaComponent', () => {
  let component: ExeperienciaComponent;
  let fixture: ComponentFixture<ExeperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
