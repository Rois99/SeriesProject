import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from 'src/app/Models/Series';
import { SeriesService } from 'src/app/services/series.service';
import { Event } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-serieses',
  templateUrl: './serieses.component.html',
  styleUrls: ['./serieses.component.css']
})
export class SeriesesComponent implements OnInit {
  public TitleS:string =""
  seriesesArray: Series[] = [];
  public selectedSeries?: Series;
  private serriessObservable: Observable<Series[]> = new Observable();

  constructor(private seriesService: SeriesService,private apiservice:ApiService) {

  }

  ngOnInit(): void {
    this.serriessObservable = this.seriesService.getSeriesses();
    this.serriessObservable.subscribe((data) => this.seriesesArray = data);
    this.seriesService.getCurentSeries().subscribe((data)=>this.selectedSeries = data)
  }
  onChange(e: Event): void {
    if (this.selectedSeries)
      this.seriesService.setCurrentSeries(this.selectedSeries)//Updating The Selected Series With BehaviorSubjects
  }

  async getTitle(){
    this.seriesService.searchSeries(this.TitleS)
  }
}
