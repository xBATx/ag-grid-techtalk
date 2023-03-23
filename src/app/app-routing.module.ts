import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AthletesMaterialTableComponent} from "./students-material-table/athletes-material-table.component";
import {AthletesAgGridSimpleComponent} from "./athletes-ag-grid-simple/athletes-ag-grid-simple.component";
import {AthletesAgGridComponent} from "./athletes-ag-grid/athletes-ag-grid.component";

const routes: Routes = [
  { path: 'material-table', component: AthletesMaterialTableComponent },
  { path: 'ag-grid-simple', component: AthletesAgGridSimpleComponent },
  { path: 'ag-grid', component: AthletesAgGridComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
