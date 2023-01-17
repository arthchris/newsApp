import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})

export class newsApiService {

  constructor(private http:HttpClient){}

 //newsApiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ea8691f0412345cda5abc05f45368a33"
  newsHeader(){
    return this.http.get<any>(this.newsApiUrl)
  }

  // techNewsApi
  techNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ea8691f0412345cda5abc05f45368a33"

  techNewsHeader(){
    return this.http.get<any>(this.techNewsApiUrl)
  }




}

