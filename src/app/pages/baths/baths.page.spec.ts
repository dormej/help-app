import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BathsPage } from './baths.page';

describe('BathsPage', () => {
  let component: BathsPage;
  let fixture: ComponentFixture<BathsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BathsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
