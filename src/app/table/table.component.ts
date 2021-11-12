import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource = new MatTableDataSource(MOCK_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

const CUSTOMER_DATA: Customer[] = MOCK_DATA;

