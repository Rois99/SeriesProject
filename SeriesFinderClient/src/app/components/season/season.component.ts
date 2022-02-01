import { Component, Input, OnInit } from '@angular/core';
import { Season } from 'src/app/Models/Season';
import { Episode } from 'src/app/Models/Episode';
@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  @Input() season?: Season
  constructor() { }

  ngOnInit(): void {
  }

}
