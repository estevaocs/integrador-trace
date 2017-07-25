import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogersComponent } from './logers.component';

describe('LogersComponent', () => {
  let component: LogersComponent;
  let fixture: ComponentFixture<LogersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
