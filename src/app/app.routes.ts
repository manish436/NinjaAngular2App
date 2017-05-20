import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'directory/:ninja', component: DirectoryComponent },
  { path: '', component: HomeComponent }
];

export const appRouterModule = RouterModule.forRoot(routes);
