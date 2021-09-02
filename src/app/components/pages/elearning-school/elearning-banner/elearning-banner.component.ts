import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../core/api.service";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-elearning-banner',
  templateUrl: './elearning-banner.component.html',
  styleUrls: ['./elearning-banner.component.scss']
})
export class ElearningBannerComponent implements OnInit {

  allCourses = [];
  loader = false;
  urlImage = environment.url_image;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.apiService.getAllCourses().subscribe(response => {
      if (response) {
        this.allCourses = response.splice(0, 2);
      }
    });
  }

  goTo(CourseId): void {
    this.router.navigate(['/single-courses-1', {i: CourseId}]);
  }

  bgImage = [
    {
      img: 'assets/img/gray-bg.jpg'
    }
  ]

}
