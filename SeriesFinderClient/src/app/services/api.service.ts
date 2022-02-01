import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../Models/Series';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private path:String ="http://localhost:5000"
  private seriesesNames:string[] = ["Game Of Thrones", "Breaking Bad", "Rick and Morty", "The Sopranos",  "Sherlock"]
  constructor(private http:HttpClient) { }


  getSeries():Observable<Series>
  {
   return this.http.get("https://www.omdbapi.com/?t=game%20of%20thrones&?S=2&apikey=6c8aac9d") as Observable<Series>
  }

  public getAllSerieses()
  {
    let serieses:Series[]=[];
    this.seriesesNames.forEach(series => {
      this.http.get(this.path+"Series/getByTitle"+series).subscribe((data)=>serieses.push(data as Series))
    });
    return serieses;
  }
}
