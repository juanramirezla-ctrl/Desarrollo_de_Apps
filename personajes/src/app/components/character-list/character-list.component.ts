import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  private readonly characterService = inject(CharacterService);

  characters: Character[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(page: number = 1): void {
    this.loading = true;
    this.errorMessage = null;

    this.characterService.getCharacters(page).subscribe({
      next: (response) => {
        this.characters = response.items;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener personajes:', err);
        this.errorMessage = 'Hubo un error al cargar los personajes. Intente de nuevo.';
        this.loading = false;
      }
    });
  }

  matarPersonaje(personaje: Character): void {
    personaje.muerto = !personaje.muerto;
  }
}