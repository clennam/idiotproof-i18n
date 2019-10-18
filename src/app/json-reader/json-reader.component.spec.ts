import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonReaderComponent } from './json-reader.component';

describe('JsonReaderComponent', () => {
  let component: JsonReaderComponent;
  let fixture: ComponentFixture<JsonReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
