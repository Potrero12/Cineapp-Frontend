import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './pages/main/main.component';

import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';


const routes: Routes = [
    
    {path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: MainComponent },
    // { path: 'actores', component: ActorComponent },
    // { path: 'directores', component: DirectorComponent },
    { path: 'pelicula/:id', component: PeliculaComponent},
    { path: 'mostrar-peliculas', component: PeliculasComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
