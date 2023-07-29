import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Recipe } from './types/recipe';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRecipe(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Recipe>(`${apiUrl}/recipe/${id}`);
  }

  getRecipes() {
    const { apiUrl } = environment;
    return this.http.get<Recipe[]>(`${apiUrl}/recipes`);
  }

  // getPosts(limit?: number) {
  //   const { appUrl } = environment;
  //   const limitFilter = limit ? `?limit=${limit}` : '';

  //   return this.http.get<Post[]>(`${appUrl}/posts${limitFilter}`);
  // }
}
