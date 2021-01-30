import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Song} from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseURL = "http://localhost:8080/api/v1/songs";

  constructor(private httpClient: HttpClient) { }

  getSongList(): Observable<Song[]>{
    return this.httpClient.get<Song[]>(this.baseURL);
  }

  addSong(song: Song): Observable<Object>{
    return this.httpClient.post<Object>(this.baseURL, song);
  }

  getSongById(id:number):Observable<Song>{
    return this.httpClient.get<Song>(`${this.baseURL}/${id}`);
  }

  editSongs(id: number, song: Song): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, song);
  }

  deleteSong(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
