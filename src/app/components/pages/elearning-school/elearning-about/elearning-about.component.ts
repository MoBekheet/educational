import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../core/api.service";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-elearning-about',
  templateUrl: './elearning-about.component.html',
  styleUrls: ['./elearning-about.component.scss']
})
export class ElearningAboutComponent implements OnInit {

  allCourses = [];
  loader = false;
  urlImage = environment.url_image;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllCourses().subscribe(response => {
      if (response) {
        for (let i = 0; i < response.length; i++) {
          if (i < 4) {
            this.allCourses.push(response[i]);
          }
        }
      }
      this.loader = false;
    });
  }

  goTo(CourseId): void {
    this.router.navigate(['/single-courses-1', {i: CourseId}]);
  }


}
