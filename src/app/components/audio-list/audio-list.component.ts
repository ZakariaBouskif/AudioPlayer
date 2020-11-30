import { Component, OnInit } from '@angular/core';
import { AudioListService } from 'src/app/audio-list.service';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.scss']
})
export class AudioListComponent implements OnInit {

  music;

  loading = false;

  constructor(private audioListService:AudioListService) { }

  ngOnInit(): void {
  }

  searchSong(value){
    this.loading = true;
    this.audioListService.getMusicList(value).subscribe(music => {
      this.music = music;
      this.loading = false;
    } , (err) => {
      this.loading = false;
    })
  }

}
