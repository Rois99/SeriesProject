import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Season } from '../Models/Season';
import { Series } from '../Models/Series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http:HttpClient) { }
  private seriesesNames:string[] = ["Game Of Thrones", "Breaking Bad", "Rick and Morty", "The Sopranos",  "Sherlock"]
  private path:String ="http://localhost:63834/"

  private SeriessesSub: BehaviorSubject<Array<Series>> = new BehaviorSubject<Array<Series>>(this.InitSerieses());
  private SelectedSerise: BehaviorSubject<Series|undefined> = new BehaviorSubject<Series|undefined>(undefined);
  private SelectedSeason: BehaviorSubject<Season|undefined> = new BehaviorSubject<Season|undefined>(undefined);

  public getSeriesses():Observable<Series[]>//GivesTheObservable To the Components
  {
    return this.SeriessesSub.asObservable();
  }
  public setSerieses(Serieses:Series[]):void{
    this.SeriessesSub.next(Serieses)
  }

  public getSeriessesVal():Series[]
  {
    return this.SeriessesSub.value;
  }

  public setCurrentSeries(series:Series):void{
    this.SelectedSerise.next(series);
    this.setSeason(undefined);
  }
  public getCurentSeries():Observable<Series|undefined>{
    return this.SelectedSerise.asObservable();
  }
   
  public InitSerieses():Series[] //gets The Seriess From Server
  {
    return this.getAllSerieses()
  }

  public getAllSerieses()
  {
    let serieses:Series[]=[];
    console.log("Entring The get all series")
    this.seriesesNames.forEach(series => {
      console.log(series)
      this.http.get(this.path+ "series/getbytitle/"+series).subscribe((data)=>serieses.push(data as Series))
    });
    return serieses;
  }
  public searchSeries(title:string)
  {
    this.http.get(this.path+ "series/getbytitle/"+title).subscribe(s=>this.setCurrentSeries(s as Series))
  }

  public searchSeason(Season:number):any
  {
    this.http.get(this.path+ "Season/GetByTitleAndNumber/"+this.SelectedSerise.value?.Title+"/"+Season).subscribe(s=>this.setSeason(s as Season))
  }

  public setSeason(season:Season|undefined)
  {
    this.SelectedSeason.next(season)
  }

  public getCurrentSeasonObs():Observable<Season>
  {
    return this.SelectedSeason as Observable<Season>
  }
}
