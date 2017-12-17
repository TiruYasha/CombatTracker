import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncounterDetailComponent } from './encounters/encounter-detail/encounter-detail.component';

const routes: Routes = [
    { path: 'encounter/:id', component: EncounterDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }