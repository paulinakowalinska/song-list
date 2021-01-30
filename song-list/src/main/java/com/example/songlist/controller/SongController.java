package com.example.songlist.controller;

import com.example.songlist.exception.ResourceNotFoundException;
import com.example.songlist.model.Song;
import com.example.songlist.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class SongController {

    @Autowired
    private SongRepository songRepository;

    @GetMapping("songs")
    public List<Song> getAllSongs(){
        return this.songRepository.findAll();
    }

    @GetMapping("/songs/{id}")
    public ResponseEntity<Song> getById(@PathVariable(value="id") Long songId) throws ResourceNotFoundException{
        Song song = songRepository.findById(songId).orElseThrow(()->new ResourceNotFoundException("Song not found"));
        return ResponseEntity.ok().body(song);
    }

    @PostMapping("songs")
    public Song addSong(@RequestBody Song song){
        return this.songRepository.save(song);
    }

    @PutMapping("/songs/{id}")
    public ResponseEntity<Song> editSongs(@PathVariable(value="id") Long songId, @RequestBody Song songDetails)
            throws ResourceNotFoundException{
        Song song = songRepository.findById(songId).orElseThrow(()->new ResourceNotFoundException("Song not found"));
        song.setTitle(songDetails.getTitle());
        song.setArtist(songDetails.getArtist());
        song.setRating(songDetails.getRating());
        return ResponseEntity.ok(this.songRepository.save(song));
    }

    @DeleteMapping("/songs/{id}")
    public Map<String, Boolean> deleteSong(@PathVariable(value="id") Long songId) throws ResourceNotFoundException{
        Song song = songRepository.findById(songId).orElseThrow(()->new ResourceNotFoundException("Song not found"));
        this.songRepository.delete(song);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
