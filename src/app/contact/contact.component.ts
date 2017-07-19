import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

    constructor(private service: ContactService) {}
    ngOnInit() {}

    onSubmit(firstName, lastName, email, message) {
        this.service.postEmail(firstName.value.toString(), lastName.value.toString(), email.value.toString(), message.value.toString())

        .subscribe(
          (response: Response) => {
              console.log(response.json());
          },
          (error) => console.log(error)
        );
    }
}
