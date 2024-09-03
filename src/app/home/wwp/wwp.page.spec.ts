import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WwpPage } from './wwp.page';

describe('WwpPage', () => {
  let component: WwpPage;
  let fixture: ComponentFixture<WwpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WwpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
