import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTvShowPopularListComponent } from './page-tv-show-popular-list.component';

describe('PageTvShowPopularListComponent', () => {
  let component: PageTvShowPopularListComponent;
  let fixture: ComponentFixture<PageTvShowPopularListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTvShowPopularListComponent]
    });
    fixture = TestBed.createComponent(PageTvShowPopularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
