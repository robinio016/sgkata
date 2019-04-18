import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, range } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() totalSize: number;
  @Input() itemsPerPage: number;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemPerPageChange: EventEmitter<number> = new EventEmitter<number>();
  pages: Observable<number[]>;
  range = 3;

  totalPageNumber: number;
  currentPage: number;
  constructor() { }

  ngOnInit() {
    this.totalPageNumber = this.calculatePageNumber(this.totalSize, this.itemsPerPage);
    this.getPages();
    this.currentPage = 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalPageNumber = this.calculatePageNumber(this.totalSize, this.itemsPerPage);
    this.currentPage = 1;
    this.getPages();
  }

  calculatePageNumber(totalSize: number, itemsPerPage: number) {
    return Math.ceil(Math.max(totalSize, 1) / Math.max(itemsPerPage, 1));
  }

  selectPage(page: number, $event) {
    this.cancelEvent($event);
    this.currentPage = page;
    this.getPages();
    this.pageChange.emit(page);
  }

  getPages() {
    this.pages = range(-this.range, (this.range * 2) + 1)
                  .pipe(map( rangeNumberItem => {
                    return rangeNumberItem + this.currentPage;
                  }))
                  .pipe(filter(page => this.isValidNumber(page)))
                  .pipe(toArray());
  }

  isValidNumber(page: number): boolean {
    return page > 0 && page <= this.totalPageNumber;
  }

  cancelEvent(event) {
    event.preventDefault();
  }

  setPaginationPerPage(value) {
    this.currentPage = 1;
    this.totalPageNumber = this.calculatePageNumber(this.totalSize, value);
    this.itemPerPageChange.emit(value);
    this.getPages();
  }
}
