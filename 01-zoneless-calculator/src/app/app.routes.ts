import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculator',
    loadComponent: () =>
      // Add default export to the component
      import('@calculator/views/calculator-view/calculator-view.component'),
  },
  {
    path: '**',
    redirectTo: 'calculator',
  }
];
