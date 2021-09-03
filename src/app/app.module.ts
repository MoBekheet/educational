import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';
import { StickyNavModule } from 'ng2-sticky-nav';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { LightboxModule } from 'ngx-lightbox';
import { AccordionModule } from 'ngx-accordion';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ElearningSchoolComponent } from './components/pages/elearning-school/elearning-school.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AboutStyleFourComponent } from './components/pages/about-style-four/about-style-four.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { CoursesStyleOneComponent } from './components/pages/courses-style-one/courses-style-one.component';
import { CoursesDetailsStyleOneComponent } from './components/pages/courses-details-style-one/courses-details-style-one.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './core/api.service';
import {ViewAllCoursesComponent} from './components/common/view-all-courses/view-all-courses.component';
import {FunfactsFeedbackComponent} from './components/common/funfacts-feedback/funfacts-feedback.component';
import {ElearningAboutComponent} from './components/pages/elearning-school/elearning-about/elearning-about.component';
import {FeaturesStyleOneComponent} from './components/common/features-style-one/features-style-one.component';
import {ElearningBannerComponent} from './components/pages/elearning-school/elearning-banner/elearning-banner.component';
import {FeedbackComponent} from "./components/common/feedback/feedback.component";
import {FunfactsStyleTwoComponent} from "./components/common/funfacts-style-two/funfacts-style-two.component";

@NgModule({
  declarations: [
    AppComponent,
    ElearningSchoolComponent,
    ViewAllCoursesComponent,
    FunfactsFeedbackComponent,
    ElearningAboutComponent,
    FeedbackComponent,
    FunfactsStyleTwoComponent,
    FeaturesStyleOneComponent,
    ElearningBannerComponent,
    AboutStyleFourComponent,
    TeacherComponent,
    CoursesStyleOneComponent,
    CoursesDetailsStyleOneComponent,
    ProfileComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    CountUpModule,
    StickyNavModule,
    TabsModule,
    NgxScrollTopModule,
    LightboxModule,
    AccordionModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
