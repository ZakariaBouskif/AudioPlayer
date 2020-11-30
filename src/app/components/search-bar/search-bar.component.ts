import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AudioListService } from 'src/app/audio-list.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

  constructor(private musicListService: AudioListService) { }

  ngOnInit(): void {
  }

  passQueryString(value) {
    this.searchQuery.emit(value);
    this.musicListService.clearCache();
  }

}
