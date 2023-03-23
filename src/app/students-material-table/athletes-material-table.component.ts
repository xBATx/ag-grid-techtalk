import { Component, OnInit } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {IAthlete} from "../IAthlete";
import data from '../athletes.json'

@Component({
  selector: 'app-students-material-table',
  templateUrl: './students-material-table.component.html',
  styleUrls: ['./students-material-table.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
  ]
})
export class StudentsMaterialTableComponent {
  displayedColumns: string[] = ['athlete', 'age', 'country', 'year'];
  dataSource = data as IAthlete[];
}
