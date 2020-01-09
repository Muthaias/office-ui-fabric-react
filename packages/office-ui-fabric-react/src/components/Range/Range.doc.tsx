import * as React from 'react';
import { RangeBasicExample } from './examples/Range.Basic.Example';
import { RangeVerticalExample } from './examples/Range.Vertical.Example';

import { IDocPageProps } from '../../common/DocPage.types';

const RangeBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Range/examples/Range.Basic.Example.tsx') as string;
const RangeVerticalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Range/examples/Range.Vertical.Example.tsx') as string;

export const RangePageProps: IDocPageProps = {
  title: 'Range',
  componentName: 'Range',
  componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/undefined',
  examples: [
    {
      title: 'Horizontal ranges',
      code: RangeBasicExampleCode,
      view: <RangeBasicExample />
    },
    {
      title: 'Vertical ranges',
      code: RangeVerticalExampleCode,
      view: <RangeVerticalExample />
    }
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Range/docs/RangeOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Range/docs/RangeDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Range/docs/RangeDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true
};
