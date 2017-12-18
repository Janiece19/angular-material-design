import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponenetComponent } from './dialog-componenet.component';

describe('DialogComponenetComponent', () => {
  let component: DialogComponenetComponent;
  let fixture: ComponentFixture<DialogComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
