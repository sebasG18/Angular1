import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Index2Component } from './index2.component';

describe('Index2Component', () => {
  let component: Index2Component;
  let fixture: ComponentFixture<Index2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Index2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
