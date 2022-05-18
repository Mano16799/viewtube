import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoService } from '../video.service';
import * as moment from 'moment';
import 'moment-duration-format';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent {
  //ripple props
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string
  /* the code here subscribes to the observable providing the video list
    and additionally adds the relativeTime which gives the publish duration
    and the length of video
  */

  video$: Observable<Array<any>>;
  metaData: any = {}
  constructor(private videoService: VideoService) {
    this.video$ = this.videoService.video$.pipe(map(this.addRelativeTime));
    this.video$.subscribe(data => {
      this.metaData = data
    })

  }

  addRelativeTime(videos: any) {
    return videos.map((video: any) => {
      video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
      video.contentDetails.length = moment.duration(video.contentDetails.duration, "minutes").format();
      return video;
    });
  }


}
