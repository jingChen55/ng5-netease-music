import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeteaseComponent } from './netease.component';

describe('NeteaseComponent', () => {
  let component: NeteaseComponent;
  let fixture: ComponentFixture<NeteaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeteaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeteaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
