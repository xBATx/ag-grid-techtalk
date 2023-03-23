import { Component, OnInit } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {IAthlete} from "../IAthlete";
import athletes from '../athletes.json'

@Component({
  selector: 'app-athletes-material-table',
  templateUrl: './athletes-material-table.component.html',
  styleUrls: ['./athletes-material-table.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
  ]
})
export class AthletesMaterialTableComponent implements OnInit {
  displayedColumns: string[] = ['athlete', 'age', 'percentage', 'country', 'year'];
  athletes = athletes as IAthlete[];
  dataSource: IAthlete[]  = [];

  ngOnInit(): void {
    const allMedalsCount = this.athletes.map(a => a.total).reduce((acc, t) => acc + t, 0);
    this.dataSource = this.athletes.map(d => ({
      ...d,
      percentage: `${Number(d.total * 100 / allMedalsCount).toFixed(2)}%`
    }))
  }

  rowClicked(row: IAthlete) {
    console.log(row.athlete);
  }
}
