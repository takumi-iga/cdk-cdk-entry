#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkEntryStack } from '../lib/cdk-entry-stack';

const app = new cdk.App();
new CdkEntryStack(app, 'CdkEntryStack');
