import { Component, OnInit } from '@angular/core';
import { Song } from "../song"
import { SongService } from '../song.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: Song[];
  constructor(private songService: SongService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSongs();
  }

  private getSongs(){
    this.songService.getSongList().subscribe(data =>{
      this.songs = data;
    });
  }

  editSongs(id:number){
    this.router.navigate(['edit-song', id]);
  }

  deleteSong(id:number){
    this.songService.deleteSong(id).subscribe(data=>{
      console.log(data);
      this.getSongs();
    })
  }

  songDetails(id:number){
    this.router.navigate(['song-details', id]);
  }
}