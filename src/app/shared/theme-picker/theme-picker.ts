import { Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule, ViewChild } from '@angular/core';
import { StyleManager } from '../style-manager/style-manager';
import { ThemeStorage, DocsSiteTheme } from './theme-storage/theme-storage';


import { OntimizeWebModule } from 'ontimize-web-ngx';
import { MatSlideToggle } from '@angular/material';



@Component({
  selector: 'theme-picker',
  templateUrl: 'theme-picker.html',
  styleUrls: ['theme-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { 'aria-hidden': 'true' },
})
export class ThemePicker {
  isDarkTheme: boolean = false;
  isIconAccent: boolean = false;
  currentTheme;
  @ViewChild('toggleDark') toggleDark: MatSlideToggle;

  themes = [
    {
      primary: '#0d0d0d',
      accent: '#ffad00',
      href: 'ontimize.css',
      href_dark: 'ontimize-dark.css',
      isDefault: true
    },
    {
      primary: '#009688',
      accent: '#ffd740',
      href: 'mat-teal-amber.css',
      href_dark: 'mat-teal-amber-dark.css',
    },
    {
      primary: '#607d8b',
      accent: '#ff6e40',
      href: 'mat-bluegrey-deeporange.css',
      href_dark: 'mat-bluegrey-deeporange-dark.css'
    },
    {
      primary: '#795548',
      accent: '#ffab40',
      href: 'mat-brown-orange.css',
      href_dark: 'mat-brown-orange-dark.css'
    }
  ];

  constructor(
    public styleManager: StyleManager,
    private _themeStorage: ThemeStorage
  ) {

  }

  ngOnInit(): void {
    const currentTheme = this._themeStorage.getStoredTheme();
    if (currentTheme) {
      if (currentTheme.isDark) {
        this.isDarkTheme = true;
      }
      this.installTheme(currentTheme);
    }

  }

  clickIconAccent() {
    this.isIconAccent = !this.isIconAccent;
  }

  onChangeToogleDark() {
    const currentTheme = this._themeStorage.getStoredTheme();
    this.installTheme(currentTheme);
  }

  installTheme(theme: DocsSiteTheme) {
    this.currentTheme = this._getCurrentThemeFromHref(theme.href);
    const dark = this.isDarkTheme;

    if (theme.isDefault) {
      if (dark) {
        this.styleManager.setStyle('theme', `./assets/custom-themes/${theme.href_dark}`);
      } else {
        this.styleManager.removeStyle('theme');
      }
     
    } else {
      if (dark) {
        this.styleManager.setStyle('theme', `./assets/custom-themes/${theme.href_dark}`);
      } else {
        this.styleManager.setStyle('theme', `./assets/custom-themes/${theme.href}`);
      }
      this.currentTheme.isDark = dark;
    }

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }


  private _getCurrentThemeFromHref(href: string): DocsSiteTheme {
    return this.themes.find(theme => theme.href === href);
  }
}

@NgModule({
  imports: [
    OntimizeWebModule,
  ],
  exports: [ThemePicker],
  declarations: [ThemePicker],
  providers: [StyleManager, ThemeStorage],
})
export class ThemePickerModule { }