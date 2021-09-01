import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  allTeachers: any;
  loader = false;
  urlImage = environment.url_image;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers(): void {
    this.loader = true;
    this.httpClient.get(`${environment.url_api}Teachers/GetAllTeachers`).subscribe(response => {
      this.allTeachers = response;
      this.loader = false;
      console.error(this.allTeachers);
    });
  }

}
