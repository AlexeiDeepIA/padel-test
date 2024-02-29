import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTvComponent } from './match-tv.component';

describe('MatchTvComponent', () => {
  let component: MatchTvComponent;
  let fixture: ComponentFixture<MatchTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchTvComponent]
    });
    fixture = TestBed.createComponent(MatchTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
