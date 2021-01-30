import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component';
import { SongListComponent } from './song-list/song-list.component';
import {EditSongComponent} from './edit-song/edit-song.component';
import {SongDetailsComponent} from './song-details/song-details.component';

const routes: Routes = [
  {path: 'songs', component: SongListComponent},
  {path: 'add-song', component: AddSongComponent},
  {path: 'edit-song/:id', component: EditSongComponent},
  {path: 'song-details/:id', component: SongDetailsComponent},
  {path: '', redirectTo: 'songs', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
