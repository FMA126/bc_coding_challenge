import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { MOCK_DATA, Customer } from '../../mock-data/mock-data'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'customer_id',
    'first_name',
    'last_name',
    'phone',
    'year',
    'make',
    'model',
    'date',
    'time'
  ];
  dataSource = new MatTableDataSource(CUSTOMER_DATA);

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onClick(row: any) {
    this.router.navigate([`/customers/${row.customer_id}`])
  }
}

const CUSTOMER_DATA: Customer[] = MOCK_DATA;


