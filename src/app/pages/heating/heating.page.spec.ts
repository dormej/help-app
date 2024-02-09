import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeatingPage } from './heating.page';

describe('HeatingPage', () => {
  let component: HeatingPage;
  let fixture: ComponentFixture<HeatingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
