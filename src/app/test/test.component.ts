import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private http: HttpClient) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    this.http.get('https://api.github.com/users').subscribe((res: Response) => {
      console.log('res', res);
      this.spinner.hide();
    });


  }

}
