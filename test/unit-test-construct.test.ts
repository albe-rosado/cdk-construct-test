import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as UnitTestConstruct from '../lib/unit-test-construct-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new UnitTestConstruct.UnitTestConstructStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
