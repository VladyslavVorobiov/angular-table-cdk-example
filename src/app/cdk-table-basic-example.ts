import { DataSource } from '@angular/cdk/collections';
import { Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H-Hydrogen' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He-Hydrogen' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li-Hydrogen' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be-Hydrogen' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B-Hydrogen' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C-Hydrogen' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N-Hydrogen' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O-Hydrogen' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
  { position: 105555, name: 'Neon', weight: 20.1797, symbol: 'Ne-Hydrogen' },
];

/**
 * @title Basic CDK data-table
 */
@Component({
  selector: 'my-table-basic-example',
  styleUrls: ['cdk-table-basic-example.css'],
  templateUrl: 'cdk-table-basic-example.html',
  encapsulation: ViewEncapsulation.None,
})
export class CdkTableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
