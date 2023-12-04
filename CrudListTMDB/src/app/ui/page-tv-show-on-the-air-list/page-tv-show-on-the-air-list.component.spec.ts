import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTvShowOnTheAirListComponent } from './page-tv-show-on-the-air-list.component';

describe('PageTvShowOnTheAirListComponent', () => {
  let component: PageTvShowOnTheAirListComponent;
  let fixture: ComponentFixture<PageTvShowOnTheAirListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTvShowOnTheAirListComponent]
    });
    fixture = TestBed.createComponent(PageTvShowOnTheAirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
