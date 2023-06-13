import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CreateTrailComponent } from './components/create-trail/create-trail.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'video',
    component: VideoPlayerComponent,
  },
  {
    path: 'create-trail',
    component: CreateTrailComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
