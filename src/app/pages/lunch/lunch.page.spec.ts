import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunchPage } from './lunch.page';

describe('LunchPage', () => {
  let component: LunchPage;
  let fixture: ComponentFixture<LunchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
