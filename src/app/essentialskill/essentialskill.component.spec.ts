import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialskillComponent } from './essentialskill.component';

describe('EssentialskillComponent', () => {
  let component: EssentialskillComponent;
  let fixture: ComponentFixture<EssentialskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
