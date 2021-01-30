import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  id:number;
  song: Song = new Song();
  constructor(private songService: SongService,
    private router:Router, 
    private route: ActivatedRoute) { }

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.songService.getSongById(this.id).subscribe(data=>{
      this.song = data;
    }, error=> console.log(error));
  }

  onSubmit(){
    this.songService.editSongs(this.id, this.song).subscribe(data=>{
      this.goToSongList();
    }, error=> console.log(error));
  }

  goToSongList(){
    this.router.navigate(['/songs']);
  }
}
