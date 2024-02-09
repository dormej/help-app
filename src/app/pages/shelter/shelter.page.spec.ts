import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterPage } from './shelter.page';

describe('ShelterPage', () => {
  let component: ShelterPage;
  let fixture: ComponentFixture<ShelterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShelterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
