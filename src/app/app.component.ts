import { Component, VERSION } from "@angular/core";

interface Login  {
  username: string
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  model: Login = {
    username: ""
  };

  login(form: any): void {
    this.model = form;
  }
}
