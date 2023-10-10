import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PriskurantComponent } from './components/priskurant/priskurant.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OpstillingComponent } from './components/opstilling/opstilling.component';
import { RegnskabComponent } from './components/regnskab/regnskab.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeListModule } from '@progress/kendo-angular-treelist';
import { RegnskabsummerComponent } from './components/regnskabsummer/regnskabsummer.component';




@NgModule({
  declarations: [
    AppComponent,
    PriskurantComponent,
    OpstillingComponent,
    RegnskabComponent,
    RegnskabsummerComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    TreeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
