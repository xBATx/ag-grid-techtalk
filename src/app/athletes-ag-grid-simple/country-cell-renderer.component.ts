import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'custom-group-component',
  template: `
    <div *ngIf="value">
      <span *ngIf="countryCode" class="fi fi-{{countryCode}}"></span>
      {{value}}
      <span *ngIf="countryCode" class="fis"></span>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class CountryCellRendererComponent implements ICellRendererAngularComp {
  public params!: ICellRendererParams;
  public value?: string;
  public countryCode?: string;

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.value = params.value;
    this.countryCode = this.getCountryCode(params);
  }

  getCountryCode(params: ICellRendererParams): string | undefined {
    switch (params.value) {
      case 'United States':
        return 'us';
      case 'Australia':
        return 'au';
      case 'China':
        return 'ch';
      case 'Canada':
        return 'ca';
      case 'zimbabwe':
        return 'zw';
      case 'Netherlands':
        return 'nl';
      default:
        return undefined;
    }
  }

  refresh(params: ICellRendererParams) {
    return false;
  }
}
