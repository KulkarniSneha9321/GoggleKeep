import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnoteComponent } from './addnotes.component';

describe('AddnotesComponent', () => {
  let component: AddnoteComponent;
  let fixture: ComponentFixture<AddnoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnoteComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
