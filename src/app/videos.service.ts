import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { DataShow } from '../app/Model/VideoModel';
@Injectable({
  providedIn: 'root'
})
export class VideosService {
  apiURL = environment.apiURL;
  private URLmethod = 'api/v3/cms/getallvideo';
  private getvideobyId = 'api/v3/cms/videos/';
  private delvideobyId = 'api/v3/cms/videos/';
  private addvideo = 'api/v3/cms/videos';
  private updatevideo = 'api/v3/cms/videos/';
  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    return this.http.get<any>(this.apiURL + this.URLmethod);
  }

  getVideosById(VideoId): Observable<any> {
    return this.http.get<any>(this.apiURL + this.getvideobyId + VideoId);
  }

  removeVideoById(VideoId): Observable<any> {
    return this.http.delete<any>(this.apiURL + this.delvideobyId + VideoId);
  }

  addNewVideo(obj): Observable<any>{
    return this.http.post<any>(this.apiURL + this.addvideo, obj);
  }

  editVideo(obj): Observable<any>{
    return this.http.put<any>(this.apiURL + this.updatevideo + obj.VideoId, obj);
  }
}
