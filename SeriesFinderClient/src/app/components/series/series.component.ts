import { Component, Input, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Season } from 'src/app/Models/Season';
import { Episode } from 'src/app/Models/Episode';
import { Series } from 'src/app/Models/Series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  private seriesObservable: Observable<Series | undefined> = new Observable<Series | undefined>();
  public selectedSeasonNum?:number
  public  selectedSeason:Season|undefined
  constructor(private seriesService: SeriesService) {
  }
  public series?: Series;
  public seasons: number[] = []
  ngOnInit(): void {
    this.seriesService.getCurrentSeasonObs().subscribe((data)=>{
      this.selectedSeason = data;
    })
    
    this.seriesObservable = this.seriesService.getCurentSeries();
    this.seriesObservable.subscribe((data) => 
    {this.series = data;
      this.fillSeasons()
    })  
  }

  fillSeasons(){
    if (this.series)
    {
      console.log("filling, total seasons = " + this.series.totalSeasons)
      this.seasons = []
      for (let index = 1; index <= this.series.totalSeasons; index++) {
        this.seasons.push(index);
      }
    }
  }


  checkIfAvalable(): boolean {
    return typeof this.series === undefined ? false : true
  }

  SelectSeason(){
    if(this.selectedSeasonNum)
    {
      this.seriesService.searchSeason(this.selectedSeasonNum);
    }
  }
}
