import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Song} from "../song";
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  id:number
  song: Song
  constructor(private route:ActivatedRoute, private songService: SongService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.song = new Song();
    this.songService.getSongById(this.id).subscribe(data=>{
      this.song=data;
    })
  }

}
