import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCarouselComponent } from './story-carousel.component';

describe('StoryCarouselComponent', () => {
  let component: StoryCarouselComponent;
  let fixture: ComponentFixture<StoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
