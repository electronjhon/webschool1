import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvocursoComponent } from './nvocurso.component';

describe('NvocursoComponent', () => {
  let component: NvocursoComponent;
  let fixture: ComponentFixture<NvocursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvocursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvocursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
