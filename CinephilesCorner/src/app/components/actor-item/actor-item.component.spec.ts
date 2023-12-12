import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorItemComponent } from './actor-item.component';

describe('ActorItemComponent', () => {
  let component: ActorItemComponent;
  let fixture: ComponentFixture<ActorItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorItemComponent]
    });
    fixture = TestBed.createComponent(ActorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
