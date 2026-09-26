import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'accordion',
    loadComponent: () => import('./accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.page').then( m => m.CardPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'toggle',
    loadComponent: () => import('./toggle/toggle.page').then( m => m.TogglePage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'chip',
    loadComponent: () => import('./chip/chip.page').then( m => m.ChipPage)
  },
  {
    path: 'datetime',
    loadComponent: () => import('./datetime/datetime.page').then( m => m.DatetimePage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./input/input.page').then( m => m.InputPage)
  },
  {
    path: 'loading',
    loadComponent: () => import('./loading/loading.page').then( m => m.LoadingPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'note',
    loadComponent: () => import('./note/note.page').then( m => m.NotePage)
  },
  {
    path: 'progress-bar',
    loadComponent: () => import('./progress-bar/progress-bar.page').then( m => m.ProgressBarPage)
  },
  {
    path: 'radio',
    loadComponent: () => import('./radio/radio.page').then( m => m.RadioPage)
  },
  {
    path: 'range',
    loadComponent: () => import('./range/range.page').then( m => m.RangePage)
  },
  {
    path: 'searchbar',
    loadComponent: () => import('./searchbar/searchbar.page').then( m => m.SearchbarPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./segment/segment.page').then( m => m.SegmentPage)
  },
  {
    path: 'select',
    loadComponent: () => import('./select/select.page').then( m => m.SelectPage)
  },
  {
    path: 'skeleton',
    loadComponent: () => import('./skeleton/skeleton.page').then( m => m.SkeletonPage)
  },
  {
    path: 'spinner',
    loadComponent: () => import('./spinner/spinner.page').then( m => m.SpinnerPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./infinite-scroll/infinite-scroll.page').then( m => m.InfiniteScrollPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./popover/popover.page').then( m => m.PopoverPage)
  },
  {
    path: 'refresher',
    loadComponent: () => import('./refresher/refresher.page').then( m => m.RefresherPage)
  },
  {
    path: 'item',
    loadComponent: () => import('./item/item.page').then( m => m.ItemPage)
  },
];
