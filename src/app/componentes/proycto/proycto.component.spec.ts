import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyctoComponent } from './proycto.component';

describe('ProyctoComponent', () => {
  let component: ProyctoComponent;
  let fixture: ComponentFixture<ProyctoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyctoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyctoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
