import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  componentes = [
    { nombre: 'Accordion', ruta: '/accordion' },
    { nombre: 'Action Sheet', ruta: '/action-sheet' },
    { nombre: 'Alert', ruta: '/alert' },
    { nombre: 'Badge', ruta: '/badge' },
    { nombre: 'Button', ruta: '/button' },
    { nombre: 'Card', ruta: '/card' },
    { nombre: 'Checkbox', ruta: '/checkbox' },
    { nombre: 'Chip', ruta: '/chip' },
    { nombre: 'Datetime', ruta: '/datetime' },
    { nombre: 'FAB (Floating Action Button)', ruta: '/fab' },
    { nombre: 'Grid', ruta: '/grid' },
    { nombre: 'Infinite Scroll', ruta: '/infinite-scroll' },
    { nombre: 'Input', ruta: '/input' },
    { nombre: 'Item', ruta: '/item' },
    { nombre: 'Loading', ruta: '/loading' },
    { nombre: 'Menu', ruta: '/menu' },
    { nombre: 'Modal', ruta: '/modal' },
    { nombre: 'Note', ruta: '/note' },
    { nombre: 'Popover', ruta: '/popover' },
    { nombre: 'Progress Bar', ruta: '/progress-bar' },
    { nombre: 'Radio', ruta: '/radio' },
    { nombre: 'Range', ruta: '/range' },
    { nombre: 'Refresher', ruta: '/refresher' },
    { nombre: 'Searchbar', ruta: '/searchbar' },
    { nombre: 'Segment', ruta: '/segment' },
    { nombre: 'Select', ruta: '/select' },
    { nombre: 'Skeleton Text', ruta: '/skeleton' },
    { nombre: 'Spinner', ruta: '/spinner' },
    { nombre: 'Toast', ruta: '/toast' },
    { nombre: 'Toggle', ruta: '/toggle' }
  ];
}