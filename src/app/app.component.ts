import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Loader
  isLoading: boolean;

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  }

  changeMode() {
    let theme = localStorage.getItem("theme");
    if (theme == "light" || theme == "") {
      document.body.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.removeAttribute("data-bs-theme");
      localStorage.setItem("theme", "light");
    }
  }
}
