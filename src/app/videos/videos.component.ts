import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataShow } from '../Model/VideoModel';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos = [];
  data1: any;
  data2: any;
  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.videosService.getVideos().subscribe((data) => { this.data1 = data; this.mapData() })
  }
  mapData() {
    this.data2 = this.data1.Data;
    console.log(this.data1);
    console.log(this.data2);
  }
}
