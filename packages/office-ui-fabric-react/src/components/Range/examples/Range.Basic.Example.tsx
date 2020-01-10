import * as React from 'react';
import { Range, RangeValue } from 'office-ui-fabric-react/lib/Range';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';

export interface IRangeBasicExampleState {
  value: RangeValue;
}

// tslint:disable:jsx-no-lambda
export class RangeBasicExample extends React.Component<{}, IRangeBasicExampleState> {
  public state: IRangeBasicExampleState = { value: [0, 5] };

  public render(): JSX.Element {
    const stackTokens: IStackTokens = { childrenGap: 20 };

    return (
      <Stack tokens={stackTokens} styles={{ root: { maxWidth: 300 } }}>
        <Range />
        <Range
          label="Snapping slider example"
          min={0}
          max={50}
          step={10}
          defaultValue={[10, 20]}
          showValue={true}
          onChange={(value: RangeValue) => console.log(value)}
          snapToStep
        />
        <Range label="Disabled example" min={50} max={500} step={50} defaultValue={[300, 300]} showValue={true} disabled />
        <Range
          label="Controlled example"
          max={10}
          value={this.state.value}
          onChange={(value: RangeValue) => this.setState({ value })}
          showValue={true}
        />
        <Range
          label="Example with formatted value"
          max={100}
          ariaValueText={([start, stop]: RangeValue) => `${start} to ${stop} percent`}
          valueFormat={(edgeValue: number) => `${edgeValue}%`}
          showValue={true}
        />
        <Range label="Origin from zero" min={-5} max={5} step={1} defaultValue={[2, 2]} showValue />
      </Stack>
    );
  }
}
