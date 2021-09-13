import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getAllCourses(): Observable<any> {
    return this.httpClient.get(`${environment.url_api}Courses/GetAllCourses`);
  }

  public getOneCourseById(CourseId): Observable<any> {
    return this.httpClient.get(`${environment.url_api}Courses/GetOneCourse?CourseId=${CourseId}`);
  }

  public getAllTeachers(): Observable<any> {
    return this.httpClient.get(`${environment.url_api}Teachers/GetAllTeachers`);
  }

  public GetStatistics(): Observable<any> {
    return this.httpClient.get(`${environment.url_api}Statistics/GetStatistics`);
  }
}
