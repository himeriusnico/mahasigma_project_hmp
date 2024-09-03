import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WwaPage } from './wwa.page';

describe('WwaPage', () => {
  let component: WwaPage;
  let fixture: ComponentFixture<WwaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WwaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
