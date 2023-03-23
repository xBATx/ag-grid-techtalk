import { Component } from '@angular/core';
import {
  CellDoubleClickedEvent,
  ColDef,
  GridReadyEvent, RowClickedEvent,
} from 'ag-grid-community';
import 'ag-grid-enterprise';
import {IAthlete} from "../IAthlete";
import {AgGridModule} from "ag-grid-angular";
import data from '../athletes.json'
import {CommonModule} from "@angular/common";
import {CountryCellRendererComponent} from "./country-cell-renderer.component";


@Component({
  selector: 'app-athletes-ag-grid',
  templateUrl: './athletes-ag-grid-simple.component.html',
  styleUrls: ['./athletes-ag-grid-simple.component.scss'],
  standalone: true,
  imports: [CommonModule, AgGridModule]
})
export class AthletesAgGridSimpleComponent {
  public columnDefs: ColDef[] = [
    {
      headerName: 'Athlete',
      field: 'athlete',
      minWidth: 50,
      maxWidth: 150,
    },
    {
      headerName: 'Total',
      valueGetter: params => params.data.gold + params.data.silver + params.data.silver,
      cellRenderer: (params: any) => '<b>' + params.value + '</b>'
    },
    {
      headerName: 'Percentage',
      valueGetter: params => params.data.total * 100 / this.allMedalsCount,
      valueFormatter: params => `${Number(params.value).toFixed(2)} %`,
      cellRenderer: (params: any) => '<b>' + params.valueFormatted + '</b>'
    },
    {
      field: 'country',
      cellRenderer: CountryCellRendererComponent
    },
    {
      field: 'year',
      minWidth: 50,
      maxWidth: 100,
    }
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 120,
    resizable: true,
  };

  public rowData!: IAthlete[];
  public allMedalsCount!: number;

  onCellDoubleClicked(params: CellDoubleClickedEvent<IAthlete, any>) {
    console.log(`double clicked on ${params.value}`);
  }

  onRowClicked(params: RowClickedEvent<IAthlete, any>) {
    console.log(params.data?.athlete);
  }

  onGridReady(params: GridReadyEvent<IAthlete>) {
    const athletes = data as IAthlete[];
    this.allMedalsCount = athletes.map(a => a.total).reduce((acc, t) => acc + t, 0);
    this.rowData = data as IAthlete[];
  }
}
