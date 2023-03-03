import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTweetInputComponent } from './search-tweet-input.component';

describe('SearchTweetInputComponent', () => {
  let component: SearchTweetInputComponent;
  let fixture: ComponentFixture<SearchTweetInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTweetInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTweetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
