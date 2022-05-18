import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule} from '@angular/material/chips';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import { VideoViewComponent } from './video-view/video-view.component';
import { YouTubePlayerModule} from '@angular/youtube-player';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    VideoContentComponent,
    ChipsBarComponent,
    SideBarComponent,
    StudioUploadComponent,
    VideoUploadComponent,
    StudioLivestreamComponent,
    VideoViewComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    AppRoutingModule,
    FormsModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatRippleModule,
    YouTubePlayerModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
