import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitionComponent } from './repetition.component';

describe('RepetitionComponent', () => {
  let component: RepetitionComponent;
  let fixture: ComponentFixture<RepetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepetitionComponent]
    });
    fixture = TestBed.createComponent(RepetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
