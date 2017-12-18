import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAddComponent } from './mock-add.component';

describe('MockAddComponent', () => {
  let component: MockAddComponent;
  let fixture: ComponentFixture<MockAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
