import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaswComponent } from './new-pasw.component';

describe('NewPaswComponent', () => {
  let component: NewPaswComponent;
  let fixture: ComponentFixture<NewPaswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPaswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
