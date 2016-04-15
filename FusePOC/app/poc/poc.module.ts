/// <reference path='../typings/browser.d.ts' />

import 'angular';
import 'angular-route';
import 'angular-resource';

import { PocModuleCtrl } from './poc.controller';
import { PocConfig } from './poc.config';
import { PocComponent } from './poc.component';
import { AutoModule } from '../auto/auto.module';
import { SpulModule } from '../spul/spul.module';
import { SharedComponent } from '../shared/shared.component'

new AutoModule();
new SpulModule();

angular.module('PocModule', ['ngRoute'
	, 'ngResource'
	, 'AutoModule'
	, 'SpulModule'])
	.controller('PocModuleCtrl', PocModuleCtrl)
	.component('pocComponent', new PocComponent())
	.component('sharedComp', new SharedComponent())
	.config(PocConfig);