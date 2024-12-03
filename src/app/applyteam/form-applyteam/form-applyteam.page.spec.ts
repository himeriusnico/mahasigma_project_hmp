import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormApplyteamPage } from './form-applyteam.page';

describe('FormApplyteamPage', () => {
  let component: FormApplyteamPage;
  let fixture: ComponentFixture<FormApplyteamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormApplyteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
