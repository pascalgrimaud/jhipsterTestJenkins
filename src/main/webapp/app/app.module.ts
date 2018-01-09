import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterTestJenkinsSharedModule, UserRouteAccessService } from './shared';
import { JhipsterTestJenkinsAppRoutingModule} from './app-routing.module';
import { JhipsterTestJenkinsHomeModule } from './home/home.module';
import { JhipsterTestJenkinsAdminModule } from './admin/admin.module';
import { JhipsterTestJenkinsAccountModule } from './account/account.module';
import { JhipsterTestJenkinsEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterTestJenkinsAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterTestJenkinsSharedModule,
        JhipsterTestJenkinsHomeModule,
        JhipsterTestJenkinsAdminModule,
        JhipsterTestJenkinsAccountModule,
        JhipsterTestJenkinsEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterTestJenkinsAppModule {}
