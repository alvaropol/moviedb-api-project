import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsTvShowComponent } from './page-details-tv-show.component';

describe('PageDetailsTvShowComponent', () => {
  let component: PageDetailsTvShowComponent;
  let fixture: ComponentFixture<PageDetailsTvShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDetailsTvShowComponent]
    });
    fixture = TestBed.createComponent(PageDetailsTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
