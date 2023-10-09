import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  private _http = inject(HttpClient);
  response: string = 'Not yet fetched!';


  ngOnInit(): void {
      this._http.get<{ message: string }>(`${ environment.apiUrl }/`)
        .subscribe(data => this.response = data.message);
  }
}
