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

  bgImage = [
    {
      img: 'assets/img/register-shape.jpg'
    }
  ]

  submit(form) {
    var name = form.name;
    console.log(name);

    var email = form.email;
    console.log(email);

    var number = form.number;
    console.log(number);

    var message = form.message;
    console.log(message);
    this.loader = true;
    setTimeout(_ => {
      this.loader = false;
    }, 3000);
  }

}
