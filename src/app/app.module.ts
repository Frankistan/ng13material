// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomMaterialModule } from './modules/custom-material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// COMPONENTS
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavToolbarComponent } from './layout/nav-toolbar/nav-toolbar.component';
import { BtnMenuComponent } from './layout/btn-menu/btn-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavToolbarComponent,
        BtnMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CustomMaterialModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
