import { Component, inject, OnInit } from '@angular/core';
import { NumberHeaderComponent } from "./number-header/number-header.component";
import { TableComponent } from "./table/table.component";
import { FooterComponent } from "./footer/footer.component";
import { DATA } from '../../shared/data';
import { NUMBERS_DATA } from '../../shared/data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-number-parent',
  imports: [
    NumberHeaderComponent,
    TableComponent,
    FooterComponent,
    TranslateModule
],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.css'
})
export class NumberParentComponent implements OnInit {
  translate: TranslateService = inject(TranslateService);

  ngOnInit(): void {
    this.changeLang();
  }

  get tableData () {
    return DATA;
  }

  get numbers() {
    return NUMBERS_DATA;
  }

  changeLang() {
    const currentLang = this.translate.currentLang;
    const newLang = (!currentLang) ? 'ar' : currentLang === 'ar' ? 'en' : 'ar';
    this.translate.use(newLang);
    this.setDirection(newLang);
  }

  edite() {
    window.alert('editing');
  }

  delete() {
    window.alert('deleting');
  }

  private setDirection(lang: string): void {
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
  }
}
