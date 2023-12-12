import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAprovedComponent } from './auth-aproved.component';

describe('AuthAprovedComponent', () => {
  let component: AuthAprovedComponent;
  let fixture: ComponentFixture<AuthAprovedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthAprovedComponent]
    });
    fixture = TestBed.createComponent(AuthAprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
