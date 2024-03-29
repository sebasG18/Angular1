import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Index5Component } from './index5.component';

describe('Index5Component', () => {
  let component: Index5Component;
  let fixture: ComponentFixture<Index5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Index5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
