import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import YoutubeRoutingModule from './youtube-routing.module';
import VideoDetailsComponent from './pages/video-details/video-details.component';

@NgModule({
  declarations: [
    VideoDetailsComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
  ],
  exports: [

  ],
})
export default class YoutubeModule { }
