import { Component } from '@angular/core';
import {
  CellDoubleClickedEvent,
  CellKeyDownEvent,
  ColDef, FullWidthCellKeyDownEvent,
  GridReadyEvent,
} from 'ag-grid-community';
import 'ag-grid-enterprise';
import { CustomGroupCellRenderer } from './custom-group-cell-renderer.component';
import {IAthlete} from "../IAthlete";
import {AgGridModule} from "ag-grid-angular";
import data from '../athletes.json'
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-athletes-ag-grid',
  templateUrl: './athletes-ag-grid.component.html',
  styleUrls: ['./athletes-ag-grid.component.scss'],
  standalone: true,
  imports: [CommonModule, AgGridModule]
})
export class AthletesAgGridComponent {
  public columnDefs: ColDef[] = [
    {
      field: 'country',
      rowGroup: true,
      hide: true,
    },
    {
      field: 'year',
      rowGroup: true,
      hide: true,
    },
    {
      field: 'athlete',
    },
    {
      field: 'total',
      aggFunc: 'sum',
    },
  ];
  public autoGroupColumnDef: ColDef = {
    cellRenderer: CustomGroupCellRenderer,
  };
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 120,
    resizable: true,
  };
  public groupDefaultExpanded = 1;
  public rowData!: IAthlete[];

  onCellDoubleClicked(params: CellDoubleClickedEvent<IAthlete, any>) {
    if (params.colDef.showRowGroup) {
      params.node.setExpanded(!params.node.expanded);
    }
  }

  onCellKeyDown(params: CellKeyDownEvent<any, any> | FullWidthCellKeyDownEvent<any, any>) {
    if (!('colDef' in params)) {
      return;
    }

    if (!(params.event instanceof KeyboardEvent)) {
      return;
    }
    if (params.event.code !== 'Enter') {
      return;
    }
    if (params.colDef.showRowGroup) {
      params.node.setExpanded(!params.node.expanded);
    }
  }

  onGridReady(params: GridReadyEvent<IAthlete>) {
    this.rowData = data as IAthlete[];
  }
}
