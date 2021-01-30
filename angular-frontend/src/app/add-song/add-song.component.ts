import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  song: Song = new Song();
  constructor(private songService: SongService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSong(){
    this.songService.addSong(this.song).subscribe(data=>{
      console.log(data);
      this.goToSongList();
    },
    error=>console.log(error));
  }

  goToSongList(){
    this.router.navigate(['/songs']);
  }
  onSubmit(){
    console.log(this.song);
    this.saveSong();
  }

}
