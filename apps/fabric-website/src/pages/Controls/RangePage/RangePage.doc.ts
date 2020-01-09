import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { RangePageProps as ExternalProps } from 'office-ui-fabric-react/lib/components/Range/Range.doc';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/RangePage/docs/RangeRelated.md') as string;

export const RangePageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    title: 'Range',
    related
  }
};
