import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private link = "https://app.powerbi.com/view?r=eyJrIjoiYmQzMThkZTQtZjA4ZC00YmEyLWE3OWYtYzIxZWZjMmZhNThkIiwidCI6IjkxNWRkMzNhLTlmMDAtNGNjMC1iM2M1LTMzNTM5YzA5M2UyNiJ9";

  constructor() { }

  ngOnInit() {
  }

}
