import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { matchPasswordsValidator } from "src/app/shared/validators/match-passwords-validator";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  
  constructor(private fb: FormBuilder) {}
  
  form = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: [
      "",
      [Validators.required, Validators.email],
    ],
    passGroup: this.fb.group(
      {
        password: ["", [Validators.required, Validators.minLength(5)]],
        rePassword: ["", [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator("password", "rePassword")],
      }
    ),
  });


  register(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}
