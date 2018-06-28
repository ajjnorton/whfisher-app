
import { Component, OnInit} from '@angular/core';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }





}


