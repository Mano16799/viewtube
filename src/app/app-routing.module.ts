import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppGuardGuard } from './services/app-guard.guard';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { VideoViewComponent } from './video-view/video-view.component';

const routes: Routes = [
  {
    path: "home",
    component: SideBarComponent,
    children: [
      {
        path: "",
        component: VideoContentComponent,
        children: [
          {
            path: "video-view/:id",
            component: VideoViewComponent
          }
        ]
      }
    ]
  },
  {
    path: "authenticate", component: AuthenticateComponent,
    children: [{
      path: "login",
      component: LoginComponent
    },
    {
      path:"",
      redirectTo:"login",
      pathMatch:"full"
    },
    {
      path:"register",
      component:RegisterComponent
    }
    ]
  },
  {
    path: "upload",
    component: StudioUploadComponent,
    canActivate: [AppGuardGuard],
    children: [
      {
        path: "",
        redirectTo: "videoupload",
        pathMatch: "full"
      },
      {
        path: "videoupload", component: VideoUploadComponent
      },
      {
        path: "livestream", component: StudioLivestreamComponent,
      }
    ]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
