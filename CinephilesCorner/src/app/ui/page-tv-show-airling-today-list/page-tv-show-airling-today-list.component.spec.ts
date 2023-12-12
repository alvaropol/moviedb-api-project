import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTvShowAirlingTodayListComponent } from './page-tv-show-airling-today-list.component';

describe('PageTvShowAirlingTodayListComponent', () => {
  let component: PageTvShowAirlingTodayListComponent;
  let fixture: ComponentFixture<PageTvShowAirlingTodayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTvShowAirlingTodayListComponent]
    });
    fixture = TestBed.createComponent(PageTvShowAirlingTodayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
