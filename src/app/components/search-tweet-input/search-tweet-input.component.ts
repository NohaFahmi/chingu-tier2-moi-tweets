import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-tweet-input',
  templateUrl: './search-tweet-input.component.html',
  styleUrls: ['./search-tweet-input.component.scss']
})
export class SearchTweetInputComponent implements OnInit{
  @Output () getSearchTweetsKeywords: EventEmitter<string> = new EventEmitter<string>();
  tweetKeyword: FormControl = new FormControl('', Validators.required);
  constructor() {
  }
  ngOnInit(): void {}

  onGetTweetsByKeyword() {
    this.getSearchTweetsKeywords.emit(this.tweetKeyword.value);
  }
}
