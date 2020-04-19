import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VideosService } from '../videos.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShow } from '../Model/VideoModel';

@Component({
  selector: 'app-videos-form',
  templateUrl: './videos-form.component.html',
  styleUrls: ['./videos-form.component.css']
})
export class VideosFormComponent implements OnInit {
  videoData = null;
  data1: any;
  data2: any;
  title: string;
  VideoForm = new FormGroup({
    Title: new FormControl(''),
    VideoId: new FormControl(''),
    Description: new FormControl(''),
    ThumbnailPath: new FormControl(''),
    ThumbnailDescription: new FormControl(''),
    DisplayStatus: new FormControl(''),
    Duration: new FormControl(''),
    DurationInText: new FormControl(''),
    CreatedOnDate: new FormControl(''),
    LastModifiedOnDate: new FormControl(''),
    CreatedByUser: new FormControl(''),
    LastModifiedByUser: new FormControl(''),
    TotalViewTime: new FormControl(''),
    MobileViewTime: new FormControl(''),
    ProfileCount: new FormControl(''),
    WorkflowCode: new FormControl(''),
    WorkflowState: new FormControl(''),
    DesktopViewCount: new FormControl(''),
    MobileViewCount: new FormControl(''),
    Histories: new FormControl(''),
    Profiles: new FormControl(''),
    //VideoProfile: new FormControl(''),
  });
  constructor(
    private VideoService: VideosService,
    private route: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let VideoId = params.get('VideoId');
      if (VideoId != null) {
        this.VideoService.getVideosById(VideoId).subscribe(data => {
          this.data1 = data;
          this.videoData = this.data1.Data;
          console.log(this.data1);
          this.VideoForm.setValue(this.data1.Data);
        })
      }
    })
  }

  addvideo() {
    this.VideoService.addNewVideo(this.VideoForm.value).subscribe(data => {
      this.route.navigate(['']);
    })
  }

  updateVideo() {
    this.VideoService.editVideo(this.VideoForm.value).subscribe(data => {
      //console.log(data);
      this.route.navigate(['']);
    })
  }
}
