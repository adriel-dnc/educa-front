import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CreateTrailComponent } from './components/create-trail/create-trail.component';

const routes: Routes = [
  {
    path: 'video',
    component: VideoPlayerComponent,
  },
  {
    path: 'create-trail',
    component: CreateTrailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
