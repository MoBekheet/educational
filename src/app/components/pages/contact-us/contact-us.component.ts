import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  loader = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  bgImage = 'assets/img/register-shape.jpg';

  submit(form) {
    let name = form.name;
    console.log(name);

    let email = form.email;
    console.log(email);

    let number = form.number;
    console.log(number);

    let message = form.message;
    console.log(message);
    this.loader = true;
    setTimeout(_ => {
      this.loader = false;
    }, 3000);
  }

}
