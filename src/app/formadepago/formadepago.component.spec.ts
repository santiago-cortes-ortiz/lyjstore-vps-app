import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadepagoComponent } from './formadepago.component';

describe('FormadepagoComponent', () => {
  let component: FormadepagoComponent;
  let fixture: ComponentFixture<FormadepagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormadepagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormadepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
