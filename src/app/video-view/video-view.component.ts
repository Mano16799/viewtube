import { Component,  OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  private apiLoaded = false;
  videoObservable: Observable<any> = new Observable<any>();

  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService) {
    this.activatedRoute.params.subscribe(data => {
      this.videoObservable = videoService.getVideo(data['id']);
    })

    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngOnInit(): void {
  }

}

