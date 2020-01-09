import * as React from 'react';
import { Range, RangeValue } from 'office-ui-fabric-react/lib/Range';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';

export interface IRangeVerticalExampleState {
  value: number;
}

// tslint:disable:jsx-no-lambda
export const RangeVerticalExample: React.StatelessComponent = () => {
  const stackTokens: IStackTokens = { childrenGap: 20 };

  return (
    <Stack horizontal tokens={stackTokens} styles={{ root: { height: 200 } }}>
      <Range // prettier-ignore
        label="Basic"
        min={1}
        max={5}
        step={1}
        defaultValue={[2, 2]}
        showValue
        vertical
      />
      <Range // prettier-ignore
        label="Disabled"
        min={50}
        max={500}
        step={50}
        defaultValue={[300, 310]}
        showValue
        vertical
        disabled
      />
      <Range // prettier-ignore
        label="Controlled"
        max={10}
        vertical
        showValue
      />
      <Range // prettier-ignore
        label="Formatted value"
        max={100}
        valueFormat={([start, stop]: RangeValue) => `${start}% to ${stop}%`}
        showValue
        vertical
      />
      <Range // prettier-ignore
        label="Origin from zero"
        min={-5}
        max={15}
        step={1}
        defaultValue={[5, 5]}
        showValue
        vertical
      />
    </Stack>
  );
};
