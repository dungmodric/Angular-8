import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideosService } from '../videos.service';
import { VideosComponent } from '../videos/videos.component';
import { Route } from '@angular/compiler/src/core';
import { map } from 'rxjs/operators';
import { DataShow } from '../Model/VideoModel';

@Component({
  selector: 'app-videos-detail',
  templateUrl: './videos-detail.component.html',
  styleUrls: ['./videos-detail.component.css']
})
export class VideosDetailComponent implements OnInit {
  videoData = null;
  data1: any;
  data2: any;
  constructor(
    private videoService: VideosService,
    private route: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let VideoId = params.get('VideoId');
      this.videoService.getVideosById(VideoId).subscribe((data) => { this.data1 = data; this.mapData() })
    })
  }

  mapData() {
    this.videoData = this.data1.Data;
    console.log(this.data1);
    console.log(this.data2);
  }

  removeVideo() {
    let conf = confirm('Bạn có chắc chắn muốn xóa video này?');
    if (conf) {
      this.videoService.removeVideoById(this.videoData.VideoId).subscribe(data => {
        this.route.navigate(['']);
      })
    }
  }

}
