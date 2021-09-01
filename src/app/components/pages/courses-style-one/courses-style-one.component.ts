import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api.service';

@Component({
  selector: 'app-courses-style-one',
  templateUrl: './courses-style-one.component.html',
  styleUrls: ['./courses-style-one.component.scss']
})

export class CoursesStyleOneComponent implements OnInit {

  allCourses: any;
  loader = false;
  urlImage = environment.url_image;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loader = true;
    this.apiService.getAllCourses().subscribe(response => {
      this.allCourses = response;
      this.loader = false;
    });
  }

}
