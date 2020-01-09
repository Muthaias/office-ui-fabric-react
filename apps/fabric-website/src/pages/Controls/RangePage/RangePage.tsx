import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { RangePageProps } from './RangePage.doc';

export const RangePage: React.StatelessComponent<IControlsPageProps> = props => {
  return <ControlsAreaPage {...props} {...RangePageProps[props.platform]} />;
};
