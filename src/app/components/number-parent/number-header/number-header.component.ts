import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-number-header',
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.css'
})
export class NumberHeaderComponent implements OnInit {
  @Input() numbers!: any[]
  @Output() edite = new EventEmitter
  @Output() delete = new EventEmitter

  transService: TranslateService = inject(TranslateService);

  showsub = false

  show() {
    this.showsub = !this.showsub
  }

  ngOnInit(): void {
  }

  onedite() {
    this.edite.emit()
  }

  ondelete() {
    this.delete.emit()
  }
}
