import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-courses-style-one',
  templateUrl: './courses-style-one.component.html',
  styleUrls: ['./courses-style-one.component.scss']
})

export class CoursesStyleOneComponent implements OnInit {

  allCourses: any;
  loader = false;
  urlImage = environment.url_image;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.loader = true;
    this.httpClient.get(`${environment.url_api}Courses/GetAllCourses`).subscribe(response => {
      this.allCourses = response;
      this.loader = false;
      console.error(this.allCourses);
    });
  }
}
