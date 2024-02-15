import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // form
  itemData!: UntypedFormGroup;
  errormessage: any = "*Please enter a name*";

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    // validation
    this.itemData = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]]
    });
    
  }

  ValidateFrom() {
    var name = this.itemData.get("name")!.value;
    var email = this.itemData.get("email")!.value;
    var subject = this.itemData.get("subject")!.value;


    if (name == "" || name == null) {
      document.getElementById('message')!.innerHTML = "<div class='alert alert-warning'></i>*Please enter a name*</div>";
      return false;
    }
    if (email == "" || email == null) {
      document.getElementById('message')!.innerHTML = "<div class='alert alert-warning'></i>*Please enter a email*</div>";
      return false;
    }
    if (subject == "" || subject == null) {
      document.getElementById('message')!.innerHTML = "<div class='alert alert-warning'></i>*Please enter a subject*</div>";
      return false;
    }
    return true
  }

  sendMsg() {
    if (this.ValidateFrom()) {
      document.getElementById('message')!.innerHTML =""
    }
  }

}
