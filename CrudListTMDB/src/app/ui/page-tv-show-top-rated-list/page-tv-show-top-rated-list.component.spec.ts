import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTvShowTopRatedListComponent } from './page-tv-show-top-rated-list.component';

describe('PageTvShowTopRatedListComponent', () => {
  let component: PageTvShowTopRatedListComponent;
  let fixture: ComponentFixture<PageTvShowTopRatedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTvShowTopRatedListComponent]
    });
    fixture = TestBed.createComponent(PageTvShowTopRatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
