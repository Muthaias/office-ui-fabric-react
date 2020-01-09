import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { RangePageProps } from 'office-ui-fabric-react/lib/components/Range/Range.doc';

export const RangePage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/Range.page.json')}
    {...{ ...RangePageProps, ...props }}
  />
);
