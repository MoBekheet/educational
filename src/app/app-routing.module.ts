import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElearningSchoolComponent } from './components/pages/elearning-school/elearning-school.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AboutStyleFourComponent } from './components/pages/about-style-four/about-style-four.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { CoursesStyleOneComponent } from './components/pages/courses-style-one/courses-style-one.component';
import { CoursesDetailsStyleOneComponent } from './components/pages/courses-details-style-one/courses-details-style-one.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
    {path: '', component: ElearningSchoolComponent},
    {path: 'about', component: AboutStyleFourComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'courses', component: CoursesStyleOneComponent},
    {path: 'details-courses', component: CoursesDetailsStyleOneComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'contact', component: ContactUsComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
