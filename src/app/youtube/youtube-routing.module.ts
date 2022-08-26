import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthGuard from '../auth/guards/auth.guard';
import VideoItemsComponent from './components/video-items/video-items.component';
import VideoDetailsComponent from './pages/video-details/video-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: VideoItemsComponent,
    canActivate: [AuthGuard],
    canLoad: [false],
  },
  {
    path: ':id',
    component: VideoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
