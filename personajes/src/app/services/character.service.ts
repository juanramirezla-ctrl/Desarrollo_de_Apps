import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://dragonball-api.com/api/characters';

  getCharacters(page: number = 1): Observable<CharacterResponse> {
    const url = page > 1 ? `${this.apiUrl}?page=${page}` : this.apiUrl;
    return this.http.get<CharacterResponse>(url);
  }
}