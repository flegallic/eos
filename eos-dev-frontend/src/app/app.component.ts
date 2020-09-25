import { Component } from '@angular/core';
import { GlobalVariable } from './common/GlobalVariable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eos-dev-frontend';
  public app = GlobalVariable.app;
  public azure = GlobalVariable.azure;
  public azureSharedServices = GlobalVariable.azureSharedServices;
  public aws = GlobalVariable.aws;
  public fe = GlobalVariable.fe;
  public gcp = GlobalVariable.gcp;
  public customers = GlobalVariable.customers;
  public billing = GlobalVariable.billing;
  public projectManager = GlobalVariable.projectManager;
  public active = false;
  public languages = [
    {name: 'EN', label: 'English version', lang: 'en', current: this.active},
    {name: 'FR', label: 'Version française', lang: 'fr', current: this.active},
    {name: 'SP', label: 'Versión en español', lang: 'sp', current: this.active}
  ];
  public selectLanguage = {name: 'Languages', label: '', lang: ''};

  ChangeLanuage(l) {
    this.selectLanguage = l;
    this.languages.forEach(lang => { lang.current = this.active; });
    l.current = !l.current;
  }
}
