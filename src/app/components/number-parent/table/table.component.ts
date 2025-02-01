import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-table',
  imports: [
    NgbModule,
    NgbPaginationModule,
    CommonModule,
    TranslatePipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() set _data(value: any[]) {
    if (value && value.length) {
      this.data = value;
      this.totalItems = value.length
    }
  }

  transService: TranslateService = inject(TranslateService);

  data: any[] = [];
  page = 1
  pageSize = 5
  totalItems = 0;

  resize5() {
    this.pageSize = 5
  }

  resize10() {
    this.pageSize = 10
  }

  resize15() {
    this.pageSize = 15
  }
}
