import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() music;
  player = new Audio();

  constructor() { }

  ngOnInit(): void {
  }

  playSong(audio){
    this.player.src = audio.previewUrl;
    this.player.play();
  }

  stopSong(audio){
    this.player.pause();
  }

}
