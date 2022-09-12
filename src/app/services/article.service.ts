import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IArticle } from "../models/Article";

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  private baseURL: string = 'http://andrew100-001-site1.etempurl.com/api/Admin';

  constructor(
    private http: HttpClient) {}

  AddArticle(formData: IArticle) {
    return this.http.post<IArticle>(`${this.baseURL}/AddArticle`, formData)
  }
}