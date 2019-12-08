import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflContainerComponent } from './nfl-container.component';

describe('NflContainerComponent', () => {
  let component: NflContainerComponent;
  let fixture: ComponentFixture<NflContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
