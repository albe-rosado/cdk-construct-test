#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UnitTestConstructStack } from '../lib/unit-test-construct-stack';

const app = new cdk.App();
new UnitTestConstructStack(app, 'UnitTestConstructStack');
