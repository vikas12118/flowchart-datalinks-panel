import React, { useState } from 'react';
// import { StandardEditorProps } from '@grafana/data';
import { Select, Icon, Tooltip, Switch } from '@grafana/ui';
const aggregationOption = [
  { label: 'First', value: 0 },
  { label: 'First (not null)', value: 1 },
  { label: 'Last', value: 2 },
  { label: 'Last (not null)', value: 3 },
  { label: 'Min', value: 4 },
  { label: 'Max', value: 5 },
  { label: 'Sum', value: 6 },
  { label: 'Avg', value: 7 },
  { label: 'Count', value: 8 },
  { label: 'Delta', value: 9 },
  { label: 'Range', value: 10 },
  { label: 'Diff', value: 11 },
  { label: 'Time of last point', value: 12 },
];

const typeOption = [
  { label: 'Number', value: 0 },
  { label: 'String', value: 1 },
  { label: 'Date', value: 2 },
];

const unitOption = [
  { label: 'Misc', value: 0 },
  { label: 'Acceleration', value: 1 },
  { label: 'Angle', value: 2 },
  { label: 'Area', value: 3 },
  { label: 'Computation', value: 4 },
  { label: 'Concentration', value: 5 },
  { label: 'Currency', value: 6 },
  { label: 'Data', value: 7 },
  { label: 'Data rate', value: 8 },
  { label: 'date & time', value: 8 },
  { label: 'Energy', value: 8 },
  { label: 'Flow', value: 8 },
  { label: 'Force', value: 8 },
];

const directionList = [
  { label: 'Vertical', value: 0 },
  { label: 'Horizontal', value: 1 },
];

const whenStateList = [
  { label: 'Warning / Critical', value: 0 },
  { label: 'Always', value: 1 },
];

const graphTypeList = [
  { label: 'Line', value: 0 },
  { label: 'Histogram', value: 1 },
];

const graphSizeList = [
  { label: 'Adjustable', value: 0 },
  { label: 'Small', value: 1 },
  { label: 'Medium', value: 2 },
  { label: 'Large', value: 3 },
];

const scaleTypeList = [
  { label: 'Linear', value: 0 },
  { label: 'Logarithimic', value: 1 },
];

const IdentifyList = [
  { label: 'Id', value: 0 },
  { label: 'Label', value: 1 },
];

const colorWhenList = [
  { label: 'Never', value: 0 },
  { label: 'Warning/ Critical ', value: 1 },
  { label: 'Alwayd', value: 2 },
];

const labelMappingWhenList = [
  { label: 'Never', value: 0 },
  { label: 'When Metric Displayed', value: 1 },
  { label: 'Warning / Critical', value: 2 },
  { label: 'Critical Only', value: 3 },
];

const linkMappingWhenList = [
  { label: 'Warning/ Critical ', value: 0 },
  { label: 'Alwayd', value: 1 },
];

const colorHowList = [
  { label: 'Shape Stroke/Border', value: 0 },
  { label: 'Shape Fill', value: 1 },
  { label: 'Shape Gradient', value: 3 },
  { label: 'Label font color', value: 4 },
  { label: 'Label background color', value: 5 },
  { label: 'Label border color', value: 6 },
  { label: 'Image background', value: 7 },
  { label: 'Image border', value: 8 },
];

const labelMappingHowList = [
  { label: 'All content', value: 0 },
  { label: 'Substring', value: 1 },
  { label: 'Append (Space)', value: 3 },
  { label: 'Append (New line)', value: 4 },
];

export const RuleView = ({ ruleNo }: { ruleNo: any }) => {
  const [settingEnabled, setSettingEnabled] = useState<boolean>(false);
  const [aggregation, setAggregation] = useState<any>();
  const [type, setType] = useState<any>();
  const [graphType, setGraphType] = useState<any>();
  const [graphSize, setGraphSize] = useState<any>();
  const [scaleType, setScaleType] = useState<any>();
  const [unit, setUnit] = useState<any>();
  const [isDisplayMatric, setIsDisplayMatric] = useState<any>(false);
  const [isDisplayGraphic, setIsDisplayGraphic] = useState<any>(false);
  const [whenStateIs, setWhenStateIs] = useState<any>();
  const [directionVal, setDirectionVal] = useState<any>();

  const [colorWhenVal, setColorWhenVal] = useState<any>();
  const [colorHowVal, setColorHowVal] = useState<any>();

  const [labelTextMappingIdentify, setLabelTextMappingIdentify] = useState<any>();
  const [isLabelTextMappingRegularEx, setIsLabelTextMappingRegularEx] = useState<any>();

  const [linkTextMappingIdentify, setLinkTextMappingIdentify] = useState<any>();
  const [isLinkTextMappingRegularEx, setIsLinkTextMappingRegularEx] = useState<any>();

  const [eventMappingIdentify, setEventMappingIdentify] = useState<any>();
  const [isEventtMappingRegularEx, setIsEventMappingRegularEx] = useState<any>();

  const [colorTootTipIdentify, setColorTootTipIdentify] = useState<any>();
  const [isColorTootTipRegularEx, setIsColorTootTipRegularEx] = useState<any>();

  const [ruleName, setRuleName] = useState<any>('');
  const [applyToMetrics, setApplyToMetrics] = useState<any>('');
  const [decimals, setDecimals] = useState<any>('');
  const [labelInput, setLabelInput] = useState<any>('');
  const [yMin, setYMin] = useState<any>('');
  const [yMax, setYMax] = useState<any>('');

  const [isInvert, setIsInvert] = useState<any>(false);
  const [isGradient, setIsGradient] = useState<any>(false);
  const [isIconState, setIsIconState] = useState<any>(false);

  const [isColorWithState, setIsColorWithState] = useState<any>(false);

  const setColorTootTipRegularEx = () => {
    setIsColorTootTipRegularEx(!isColorTootTipRegularEx);
  };

  const setLabelTextMappingRegularEx = () => {
    setIsLabelTextMappingRegularEx(!isLabelTextMappingRegularEx);
  };

  const setLinkTextMappingRegularEx = () => {
    setIsLinkTextMappingRegularEx(!isEventtMappingRegularEx);
  };

  const setEventMappingRegularEx = () => {
    setIsEventMappingRegularEx(!isEventtMappingRegularEx);
  };

  const setInvert = () => {
    setIsInvert(!isInvert);
  };

  const setGradient = () => {
    setIsGradient(!isGradient);
  };

  const setIconState = () => {
    setIsIconState(!isIconState);
  };

  const setColorWithState = () => {
    setIsColorWithState(!isColorWithState);
  };

  const getRuleName = (e: any) => {
    setRuleName(e.target.value);
  };

  const getApplyToMetrics = (e: any) => {
    setApplyToMetrics(e.target.value);
  };

  const getDecimals = (e: any) => {
    setDecimals(e.target.value);
  };

  const getLabelInput = (e: any) => {
    setLabelInput(e.target.value);
  };

  const getYMin = (e: any) => {
    setYMin(e.target.value);
  };

  const getYMax = (e: any) => {
    setYMax(e.target.value);
  };

  const setSetting = () => {
    setSettingEnabled(!settingEnabled);
  };

  const setDisplayMatric = () => {
    setIsDisplayMatric(!isDisplayMatric);
  };

  const setDisplayGraphic = () => {
    setIsDisplayGraphic(!isDisplayGraphic);
  };

  return (
    <div className="editor-row">
      <div style={{ backgroundColor: 'black', color: 'white', marginBottom: '20px' }}>
        <div className="rule-item testw22" onMouseOver={() => {}} onMouseLeave={() => {}}>
          <div id="left" style={{ float: 'left', width: '30%' }} onClick={setSetting}>
            <span className="rule-extend" style={{ cursor: 'pointer' }}>
              <i className={`fa ${!settingEnabled ? 'fa-chevron-right' : 'fa-chevron-down'}`}></i>
            </span>
            <span className="rule-title" style={{ cursor: 'pointer' }}>
              1 : Rule [myRule]
            </span>
          </div>
          <div id="center" style={{ display: 'inline-block', margin: '0 auto', width: '50%' }}>
            <div style={{ display: 'inline-block', marginRight: '5px' }}>
              <span>Last state level : [-1]</span>
            </div>
            <div style={{ display: 'inline-block', marginRight: '5px' }}>
              <span>Raw value : []</span>
            </div>
            <div style={{ display: 'inline-block', marginRight: '5px' }}>
              <span>Formatted value : []</span>
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
              <div style={{ display: 'inline-block', marginRight: '5px' }}>
                <span>color : []</span>
              </div>
              <div style={{ display: 'inline-block', marginRight: '5px' }}>
                <span>Execute time : [0.00 ms]</span>
              </div>
            </div>
          </div>
          <div id="right" style={{ float: 'right' }}>
            <div id="delete" style={{ width: '20px', clear: 'left', display: 'inline-block' }}>
              <span className="rule-nav" bs-tooltip="'Click twice to remove rule'" data-original-title="" title="">
                <i className="fa fa-w fa-remove pointer"></i>
              </span>
            </div>
            <div id="clone" style={{ width: '20px', clear: 'left', display: 'inline-block' }}>
              <span className="rule-nav" bs-tooltip="'Clone this rule'" data-original-title="" title="">
                <i className="fa fa-copy"></i>
              </span>
            </div>
            <div id="show/hide" style={{ width: '20px', clear: 'left', display: 'inline-block' }}>
              <span
                className="rule-nav"
                bs-tooltip="rule.data.hidden ? 'Show/enable this rule' : 'Hide/disable this rule' "
                data-original-title=""
                title=""
              >
                <i
                  className="fa fa-chevron-right fa-w fa-eye pointer"
                  ng-className="{'fa fa-w fa-eye pointer': !rule.isHidden(), 'fa fa-w fa-eye-slash pointer': rule.isHidden()}"
                ></i>
              </span>
            </div>
            <div id="up" style={{ width: '20px', clear: 'left', display: 'inline-block' }}>
              <i className="fa fa-arrow-up fa-lg"></i>
            </div>
            <div id="down" style={{ width: '20px', clear: 'left', display: 'inline-block' }}>
              <i className="fa fa-arrow-down fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
      {settingEnabled ? (
        <>
          <div className="section gf-form-group">
            <h5 className="section-heading">
              Options
              <span style={{ float: 'right' }}>
                <Tooltip placement="auto" theme="info" content="Options for mapping objects and metrics">
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </h5>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Rule name
                <span
                  style={{ position: 'absolute', right: 6, top: 0 }}
                  className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                >
                  <Tooltip placement="auto" theme="info" content="Name of the rule, for information">
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <input
                type="text"
                onChange={getRuleName}
                value={ruleName}
                className="gf-form-input width-12 ng-pristine ng-untouched ng-valid ng-not-empty"
                placeholder="Name of this rule"
              />
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Apply to metrics
                <span
                  style={{ position: 'absolute', right: 6, top: 0 }}
                  className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                >
                  <Tooltip placement="auto" theme="info" content="Select alias or name of metric">
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <input
                type="text"
                placeholder="Name or regex of metric"
                className="gf-form-input width-12 ng-pristine ng-untouched ng-valid ng-not-empty"
                onChange={getApplyToMetrics}
                value={applyToMetrics}
              />
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Aggregation
                <span
                  style={{ position: 'absolute', right: 6, top: 0 }}
                  className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                >
                  <Tooltip placement="auto" theme="info" content="Select an aggregation for all values of metric">
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-select-wrapper width-12">
                <Select
                  options={aggregationOption}
                  value={aggregation}
                  allowCustomValue
                  onChange={(customValue) => {
                    console.log('customValue', customValue.label);
                    setAggregation(customValue.label);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="section gf-form-group">
            <h5 className="section-heading">
              Type
              <span style={{ float: 'right' }}>
                <Tooltip
                  placement="auto"
                  theme="info"
                  content="Specify unit (Number, String or date) and type for displayed values by Text Mappings."
                >
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </h5>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Type
                <span style={{ float: 'right' }}>
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Select type and unit of metric to display it for the good format."
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <Select
                options={typeOption}
                value={type}
                allowCustomValue
                onChange={(customValue) => {
                  console.log('customValue', customValue.label);
                  setType(customValue.label);
                }}
              />
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Unit
                <span style={{ float: 'right' }}>
                  <Tooltip placement="auto" theme="info" content="Select unit of aggregated value.">
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <Select
                options={unitOption}
                className="width-12"
                value={unit}
                allowCustomValue
                onChange={(customValue) => {
                  console.log('customValue', customValue.label);
                  setUnit(customValue.label);
                }}
              />
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Decimals
                <span style={{ float: 'right' }}>
                  <Tooltip placement="auto" theme="info" content="Select number of decimals">
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <input
                type="number"
                onChange={getDecimals}
                value={decimals}
                className="gf-form-input width-4 ng-pristine ng-untouched ng-valid ng-not-empty"
              />
            </div>
          </div>
          <div className="section gf-form-group" style={{ position: 'relative' }}>
            <h5 className="section-heading">
              Thresholds (2 : Critical &gt; ... &gt; 0 : Ok)
              <span style={{ float: 'right' }}>
                <Tooltip
                  placement="auto"
                  theme="info"
                  content="Define states according to value and direction (invert)."
                >
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </h5>
            <table>
              <thead>
                <tr>
                  <th>
                    <label className="gf-form-label width-5" style={{ marginRight: '2px' }}>
                      Buttons
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-5" style={{ marginRight: '2px' }}>
                      Color
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px' }}>
                      Number
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-3" style={{ marginRight: '2px' }}>
                      Lvl
                    </label>
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">
                    <label className="gf-form-switch-container">
                      <div className="gf-form-label width-8" style={{ position: 'relative' }}>
                        Invert
                        <span style={{ float: 'right' }}>
                          <Tooltip placement="auto" theme="info" content="Invert level state and color">
                            <Icon name="info-circle" />
                          </Tooltip>
                        </span>
                      </div>
                      <div className="gf-form-switch ">
                        <Switch value={isInvert} onChange={setInvert} />
                      </div>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <label className="gf-form-switch-container">
                      <div className="gf-form-label width-8" style={{ position: 'relative' }}>
                        Gradient
                        <span style={{ float: 'right' }}>
                          <Tooltip placement="auto" theme="info" content="Apply gradient color according to the value">
                            <Icon name="info-circle" />
                          </Tooltip>
                        </span>
                      </div>
                      <div className="gf-form-switch ">
                        <Switch value={isGradient} onChange={setGradient} />
                      </div>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <label className="gf-form-switch-container">
                      <div className="gf-form-label width-8" style={{ position: 'relative' }}>
                        Icon state
                        <span style={{ float: 'right' }}>
                          <Tooltip placement="auto" theme="info" content="Display a warning icon when state > 0">
                            <Icon name="info-circle" />
                          </Tooltip>
                        </span>
                      </div>
                      <div className="gf-form-switch ">
                        <Switch value={isIconState} onChange={setIconState} />
                      </div>
                    </label>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="section gf-form-group">
            <h5 className="section-heading">
              Tooltips
              <span style={{ float: 'right' }}>
                <Tooltip
                  placement="auto"
                  theme="info"
                  content="Add/change tooltip/popup with aggregated values in shapes defined in color mapping"
                >
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </h5>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Display metrics
                <span style={{ float: 'right' }}>
                  <Tooltip placement="auto" theme="info" content="Add tooltips metrics and graphs on shapes">
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-switch ">
                <Switch value={isDisplayMatric} onChange={setDisplayMatric} />
              </div>
            </div>

            {isDisplayMatric ? (
              <>
                <div className="section gf-form-group">
                  <div className="gf-form">
                    <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                      Label
                      <span
                        style={{ position: 'absolute', right: 6, top: 0 }}
                        className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                      >
                        <Tooltip placement="auto" theme="info" content="Label of metric in popup">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                    <input
                      onChange={getLabelInput}
                      value={labelInput}
                      type="text"
                      className="gf-form-input width-12 ng-pristine ng-untouched ng-valid ng-not-empty"
                      placeholder="Auto"
                    />
                  </div>
                  <div className="gf-form">
                    <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                      When state is
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Define condition to add values in tooltip">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                    <div className="gf-form-select-wrapper width-12">
                      <Select
                        options={whenStateList}
                        value={whenStateIs}
                        allowCustomValue
                        onChange={(customValue) => {
                          console.log('customValue', customValue.label);
                          setWhenStateIs(customValue.label);
                        }}
                      />
                    </div>
                  </div>
                  <div className="gf-form">
                    <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                      Direction
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Define the sens of display">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                    <div className="gf-form-select-wrapper width-12">
                      <Select
                        options={directionList}
                        value={directionVal}
                        allowCustomValue
                        onChange={(customValue) => {
                          console.log('customValue', customValue.label);
                          setDirectionVal(customValue.label);
                        }}
                      />
                    </div>
                  </div>
                  <div className="gf-form">
                    <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                      Color with state
                      <span style={{ float: 'right' }}>
                        <Tooltip
                          placement="auto"
                          theme="info"
                          content="Color values in tooltip with state/thresholds colors"
                        >
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                    <div className="gf-form-switch ">
                      <Switch value={isColorWithState} onChange={setColorWithState} />
                    </div>
                  </div>
                </div>
                <div className="section gf-form-group">
                  <h5 className="section-heading">
                    Graph Tooltips
                    <span style={{ float: 'right' }}>
                      <Tooltip placement="auto" theme="info" content="Add Graph into the tooltip">
                        <Icon name="info-circle" />
                      </Tooltip>
                    </span>
                  </h5>
                  <div className="gf-form">
                    <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                      Display graph
                    </label>
                    <div className="gf-form-switch ">
                      <Switch value={isDisplayGraphic} onChange={setDisplayGraphic} />
                    </div>
                  </div>

                  {isDisplayGraphic ? (
                    <>
                      <div className="gf-form">
                        <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                          Graph type
                          <span
                            style={{ position: 'absolute', right: 6, top: 0 }}
                            className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                          >
                            <Tooltip placement="auto" theme="info" content="Select type of graph">
                              <Icon name="info-circle" />
                            </Tooltip>
                          </span>
                        </label>
                        <div className="gf-form-select-wrapper width-12">
                          <Select
                            options={graphTypeList}
                            value={graphType}
                            allowCustomValue
                            onChange={(customValue) => {
                              console.log('customValue', customValue.label);
                              setGraphType(customValue.label);
                            }}
                          />
                        </div>
                      </div>
                      <div className="gf-form">
                        <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                          Graph Size
                          <span style={{ float: 'right' }}>
                            <Tooltip placement="auto" theme="info" content="Select size of graph">
                              <Icon name="info-circle" />
                            </Tooltip>
                          </span>
                        </label>
                        <div className="gf-form-select-wrapper width-12">
                          <Select
                            options={graphSizeList}
                            value={graphSize}
                            allowCustomValue
                            onChange={(customValue) => {
                              console.log('customValue', customValue.label);
                              setGraphSize(customValue.label);
                            }}
                          />
                        </div>
                      </div>
                      <div className="gf-form">
                        <label className="gf-form-label width-6" style={{ position: 'relative' }}>
                          Y-Min
                          <span style={{ float: 'right' }}>
                            <Tooltip placement="auto" theme="info" content="Select the min for the scale">
                              <Icon name="info-circle" />
                            </Tooltip>
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Auto"
                          onChange={getYMin}
                          value={yMin}
                          className="gf-form-input width-5 ng-pristine ng-untouched ng-valid ng-not-empty"
                        />
                        <label className="gf-form-label width-6" style={{ position: 'relative' }}>
                          Y-Max
                          <span style={{ float: 'right' }}>
                            <Tooltip placement="auto" theme="info" content="Select the max for the scale">
                              <Icon name="info-circle" />
                            </Tooltip>
                          </span>
                        </label>
                        <input
                          type="text"
                          onChange={getYMax}
                          value={yMax}
                          placeholder="Auto"
                          className="gf-form-input width-5 ng-pristine ng-untouched ng-valid ng-not-empty"
                        />
                      </div>
                      <div className="gf-form">
                        <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                          Scale type
                          <span style={{ float: 'right' }}>
                            <Tooltip placement="auto" theme="info" content="Select scale type">
                              <Icon name="info-circle" />
                            </Tooltip>
                          </span>
                        </label>
                        <div className="gf-form-select-wrapper width-12">
                          <Select
                            options={scaleTypeList}
                            value={scaleType}
                            allowCustomValue
                            onChange={(customValue) => {
                              console.log('customValue', customValue.label);
                              setScaleType(customValue.label);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </>
            ) : null}
          </div>

          <div className="section gf-form-group">
            <h5 className="section-heading" style={{ position: 'relative' }}>
              Color/Tooltip Mappings
              <span
                style={{ position: 'absolute', right: 6, top: 0 }}
                className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
              >
                <Tooltip placement="auto" theme="info" content="Select the objects to colorize">
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </h5>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Identify by
                <span
                  style={{ position: 'absolute', right: 6, top: 0 }}
                  className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                >
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Select the type of data in field 'What' ID (uniq) or LABEL"
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-select-wrapper width-12">
                <Select
                  options={IdentifyList}
                  value={colorTootTipIdentify}
                  allowCustomValue
                  onChange={(customValue) => {
                    console.log('customValue', customValue.label);
                    setColorTootTipIdentify(customValue.label);
                  }}
                />
              </div>
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Regular exression
                <span style={{ float: 'right' }}>
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Disable this option if you don't use regular expressions in field 'What' below to improve performance"
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-switch ">
                <Switch value={isColorTootTipRegularEx} onChange={setColorTootTipRegularEx} />
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>
                    <label className="gf-form-label width-7" style={{ marginRight: '2px' }}>
                      Buttons
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      What
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Enter shape Id or click on link button">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      When
                      <span style={{ float: 'right' }}>
                        <Tooltip
                          placement="auto"
                          theme="info"
                          content="Select condition to apply color and tooltip on shape."
                        >
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      How
                      <span style={{ float: 'right' }}>
                        <Tooltip
                          placement="auto"
                          theme="info"
                          content="Fill to color content, Stroke for outline or arrows, Text for text."
                        >
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  ng-repeat="shape in rule.getShapeMaps()"
                  ng-className="{'gf-form-disabled': shape.data.hidden}"
                  ng-mouseleave="editor.unselectCell(rule.data.shapeProp,shape.data.pattern)"
                  ng-mouseover="editor.selectCell(rule.data.shapeProp,shape.data.pattern)"
                >
                  <td>
                    <div className="gf-form">
                      <label className="gf-form-label" style={{ marginRight: '4px' }}>
                        <Tooltip placement="auto" theme="info" content="Delete this mapping object">
                          <i
                            className="fa fa-w fa-remove pointer"
                            bs-tooltip="'Delete this mapping object'"
                            ng-click="editor.removeShapeMap(rule,$index);editor.onRulesChange()"
                            data-original-title=""
                            title=""
                          ></i>
                        </Tooltip>
                      </label>
                      <label className="gf-form-label" ng-if="!shape.isHidden()" style={{ marginRight: '4px' }}>
                        <i
                          className="fa fa-w fa-eye pointer"
                          bs-tooltip="'Hide selected object graph in rule'"
                          ng-click="shape.hide();editor.onRulesChange()"
                          data-original-title=""
                          title=""
                        ></i>
                      </label>

                      <label
                        className="gf-form-label"
                        style={{ marginRight: '4px' }}
                        ng-hide="editor.flowchartHandler.isMapping(shape)"
                      >
                        <Tooltip placement="auto" theme="info" content="Hide seleted object graph in rule">
                          <i
                            className="fa fa-link pointer"
                            ng-click="editor.flowchartHandler.setMap(shape,rule.data.shapeProp)"
                            bs-tooltip="'Link it on object graph'"
                            data-original-title=""
                            title=""
                          ></i>
                        </Tooltip>
                      </label>
                      <label
                        className="gf-form-label ng-hide"
                        style={{ marginRight: '4px', color: 'orange' }}
                        ng-show="editor.flowchartHandler.isMapping(shape)"
                      >
                        <Tooltip placement="auto" theme="info" content="Link it on object graph">
                          <i className="fa fa-unlink pointer" title=""></i>
                        </Tooltip>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="gf-form">
                      <input
                        type="text"
                        style={{ marginRight: '2px' }}
                        id="ccec75e9-a9a7-f3d2-105c-09afd776135f"
                        placeholder="id or regex of shape"
                        className="gf-form-input width-8 ng-pristine ng-untouched ng-valid ng-empty"
                        title=""
                      />
                    </div>
                  </td>
                  <td>
                    <Select
                      options={colorWhenList}
                      value={colorWhenVal}
                      allowCustomValue
                      onChange={(customValue) => {
                        console.log('customValue', customValue.label);
                        setColorWhenVal(customValue.label);
                      }}
                    />
                  </td>
                  <td>
                    <Select
                      options={colorHowList}
                      value={colorHowVal}
                      allowCustomValue
                      onChange={(customValue) => {
                        console.log('customValue', customValue.label);
                        setColorHowVal(customValue.label);
                      }}
                    />
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div className="gf-form">
                      <label className="gf-form-label">
                        <i
                          className="fa fa-plus pointer"
                          ng-click="rule.addShapeMap('')"
                          style={{ marginRight: '2px' }}
                        ></i>
                      </label>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="section gf-form-group">
            <h5 className="section-heading" style={{ position: 'relative' }}>
              Label/Text Mappings
              <span
                style={{ position: 'absolute', right: 6, top: 0 }}
                className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
              >
                <Tooltip placement="auto" theme="info" content="Select the text object to replace by value">
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </h5>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Identify by
                <span
                  style={{ position: 'absolute', right: 6, top: 0 }}
                  className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                >
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Select the type of data in field 'What' ID (uniq) or LABEL"
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-select-wrapper width-12">
                <Select
                  options={IdentifyList}
                  value={labelTextMappingIdentify}
                  allowCustomValue
                  onChange={(customValue) => {
                    console.log('customValue', customValue.label);
                    setLabelTextMappingIdentify(customValue.label);
                  }}
                />
              </div>
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Regular exression
                <span style={{ float: 'right' }}>
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Disable this option if you don't use regular expressions in field 'What' below to improve performance"
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-switch ">
                <Switch value={isLabelTextMappingRegularEx} onChange={setLabelTextMappingRegularEx} />
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>
                    <label className="gf-form-label width-7" style={{ marginRight: '2px' }}>
                      Buttons
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      What
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Enter shape Id or click on link button">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      When
                      <span style={{ float: 'right' }}>
                        <Tooltip
                          placement="auto"
                          theme="info"
                          content="Select condition to apply color and tooltip on shape."
                        >
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      How
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Whitch part of text to replace">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      With
                      <span style={{ float: 'right' }}>
                        <Tooltip
                          placement="auto"
                          theme="info"
                          content="Enter pattern/regular expression (Only for substring method)"
                        >
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  ng-repeat="shape in rule.getShapeMaps()"
                  ng-className="{'gf-form-disabled': shape.data.hidden}"
                  ng-mouseleave="editor.unselectCell(rule.data.shapeProp,shape.data.pattern)"
                  ng-mouseover="editor.selectCell(rule.data.shapeProp,shape.data.pattern)"
                >
                  <td>
                    <div className="gf-form">
                      <label className="gf-form-label" style={{ marginRight: '4px' }}>
                        <Tooltip placement="auto" theme="info" content="Delete this mapping object">
                          <i
                            className="fa fa-w fa-remove pointer"
                            bs-tooltip="'Delete this mapping object'"
                            ng-click="editor.removeShapeMap(rule,$index);editor.onRulesChange()"
                            data-original-title=""
                            title=""
                          ></i>
                        </Tooltip>
                      </label>
                      <label className="gf-form-label" ng-if="!shape.isHidden()" style={{ marginRight: '4px' }}>
                        <i
                          className="fa fa-w fa-eye pointer"
                          bs-tooltip="'Hide selected object graph in rule'"
                          ng-click="shape.hide();editor.onRulesChange()"
                          data-original-title=""
                          title=""
                        ></i>
                      </label>

                      <label
                        className="gf-form-label"
                        style={{ marginRight: '4px' }}
                        ng-hide="editor.flowchartHandler.isMapping(shape)"
                      >
                        <Tooltip placement="auto" theme="info" content="Hide seleted object graph in rule">
                          <i
                            className="fa fa-link pointer"
                            ng-click="editor.flowchartHandler.setMap(shape,rule.data.shapeProp)"
                            bs-tooltip="'Link it on object graph'"
                            data-original-title=""
                            title=""
                          ></i>
                        </Tooltip>
                      </label>
                      <label
                        className="gf-form-label ng-hide"
                        style={{ marginRight: '4px', color: 'orange' }}
                        ng-show="editor.flowchartHandler.isMapping(shape)"
                      >
                        <Tooltip placement="auto" theme="info" content="Select object/target in graph">
                          <i className="fa fa-unlink pointer" title=""></i>
                        </Tooltip>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="gf-form">
                      <input
                        type="text"
                        style={{ marginRight: '2px' }}
                        id="ccec75e9-a9a7-f3d2-105c-09afd776135f"
                        placeholder="id or regex of shape"
                        className="gf-form-input width-8 ng-pristine ng-untouched ng-valid ng-empty"
                        title=""
                      />
                    </div>
                  </td>
                  <td>
                    <Select
                      options={labelMappingWhenList}
                      value={colorWhenVal}
                      allowCustomValue
                      onChange={(customValue) => {
                        console.log('customValue', customValue.label);
                        setColorWhenVal(customValue.label);
                      }}
                    />
                  </td>
                  <td>
                    <Select
                      options={labelMappingHowList}
                      value={colorHowVal}
                      allowCustomValue
                      onChange={(customValue) => {
                        console.log('customValue', customValue.label);
                        setColorHowVal(customValue.label);
                      }}
                    />
                  </td>
                  <td></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div className="gf-form">
                      <label className="gf-form-label">
                        <i
                          className="fa fa-plus pointer"
                          ng-click="rule.addShapeMap('')"
                          style={{ marginRight: '2px' }}
                        ></i>
                      </label>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="section gf-form-group">
            <h5 className="section-heading" style={{ position: 'relative' }}>
              Link Mappings
            </h5>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Identify by
                <span
                  style={{ position: 'absolute', right: 6, top: 0 }}
                  className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                >
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Select the type of data in field 'What' ID (uniq) or LABEL"
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-select-wrapper width-12">
                <Select
                  options={IdentifyList}
                  value={linkTextMappingIdentify}
                  allowCustomValue
                  onChange={(customValue) => {
                    console.log('customValue', customValue.label);
                    setLinkTextMappingIdentify(customValue.label);
                  }}
                />
              </div>
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Regular exression
                <span style={{ float: 'right' }}>
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Disable this option if you don't use regular expressions in field 'What' below to improve performance"
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-switch ">
                <Switch value={isLinkTextMappingRegularEx} onChange={setLinkTextMappingRegularEx} />
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>
                    <label className="gf-form-label width-7" style={{ marginRight: '2px' }}>
                      Buttons
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      What
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Enter shape Id or click on link button">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      When
                      <span style={{ float: 'right' }}>
                        <Tooltip
                          placement="auto"
                          theme="info"
                          content="Select condition to dislay value or text on shape."
                        >
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-10" style={{ marginRight: '2px', position: 'relative' }}>
                      Url
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Enter absolute or relative URL">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      Params
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Apply actual parameters to URL">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  ng-repeat="shape in rule.getShapeMaps()"
                  ng-className="{'gf-form-disabled': shape.data.hidden}"
                  ng-mouseleave="editor.unselectCell(rule.data.shapeProp,shape.data.pattern)"
                  ng-mouseover="editor.selectCell(rule.data.shapeProp,shape.data.pattern)"
                >
                  <td>
                    <div className="gf-form">
                      <label className="gf-form-label" style={{ marginRight: '4px' }}>
                        <Tooltip placement="auto" theme="info" content="Delete this mapping object">
                          <i
                            className="fa fa-w fa-remove pointer"
                            bs-tooltip="'Delete this mapping object'"
                            ng-click="editor.removeShapeMap(rule,$index);editor.onRulesChange()"
                            data-original-title=""
                            title=""
                          ></i>
                        </Tooltip>
                      </label>
                      <label className="gf-form-label" ng-if="!shape.isHidden()" style={{ marginRight: '4px' }}>
                        <i
                          className="fa fa-w fa-eye pointer"
                          bs-tooltip="'Hide selected object graph in rule'"
                          ng-click="shape.hide();editor.onRulesChange()"
                          data-original-title=""
                          title=""
                        ></i>
                      </label>

                      <label
                        className="gf-form-label"
                        style={{ marginRight: '4px' }}
                        ng-hide="editor.flowchartHandler.isMapping(shape)"
                      >
                        <Tooltip placement="auto" theme="info" content="Hide seleted object graph in rule">
                          <i
                            className="fa fa-link pointer"
                            ng-click="editor.flowchartHandler.setMap(shape,rule.data.shapeProp)"
                            bs-tooltip="'Link it on object graph'"
                            data-original-title=""
                            title=""
                          ></i>
                        </Tooltip>
                      </label>
                      <label
                        className="gf-form-label ng-hide"
                        style={{ marginRight: '4px', color: 'orange' }}
                        ng-show="editor.flowchartHandler.isMapping(shape)"
                      >
                        <Tooltip placement="auto" theme="info" content="Select object/target in graph">
                          <i className="fa fa-unlink pointer" title=""></i>
                        </Tooltip>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="gf-form">
                      <input
                        type="text"
                        style={{ marginRight: '2px' }}
                        id="ccec75e9-a9a7-f3d2-105c-09afd776135f"
                        placeholder="id or regex of shape"
                        className="gf-form-input width-8 ng-pristine ng-untouched ng-valid ng-empty"
                        title=""
                      />
                    </div>
                  </td>
                  <td>
                    <Select
                      options={linkMappingWhenList}
                      value={colorWhenVal}
                      allowCustomValue
                      onChange={(customValue) => {
                        console.log('customValue', customValue.label);
                        setColorWhenVal(customValue.label);
                      }}
                    />
                  </td>
                  <td>
                    <div className="gf-form">
                      <input
                        type="text"
                        style={{ marginRight: '2px' }}
                        id="ccec75e9-a9a7-f3d2-105c-09afd776135f"
                        placeholder="id or regex of shape"
                        className="gf-form-input width-10 ng-pristine ng-untouched ng-valid ng-empty"
                        title=""
                      />
                    </div>
                  </td>
                  <td>
                    <div className="gf-form-switch ">
                      <Switch />
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div className="gf-form">
                      <label className="gf-form-label">
                        <i
                          className="fa fa-plus pointer"
                          ng-click="rule.addShapeMap('')"
                          style={{ marginRight: '2px' }}
                        ></i>
                      </label>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="section gf-form-group">
            <h5 className="section-heading" style={{ position: 'relative' }}>
              Event/Animation Mappings
              <span
                style={{ position: 'absolute', right: 6, top: 0 }}
                className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
              >
                <Tooltip placement="auto" theme="info" content="Select the objects to event">
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </h5>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Identify by
                <span
                  style={{ position: 'absolute', right: 6, top: 0 }}
                  className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                >
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Select the type of data in field 'What' ID (uniq) or LABEL"
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-select-wrapper width-12">
                <Select
                  options={IdentifyList}
                  value={eventMappingIdentify}
                  allowCustomValue
                  onChange={(customValue) => {
                    console.log('customValue', customValue.label);
                    setEventMappingIdentify(customValue.label);
                  }}
                />
              </div>
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10" style={{ position: 'relative' }}>
                Regular exression
                <span style={{ float: 'right' }}>
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Disable this option if you don't use regular expressions in field 'What' below to improve performance"
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <div className="gf-form-switch ">
                <Switch value={isEventtMappingRegularEx} onChange={setEventMappingRegularEx} />
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>
                    <label className="gf-form-label width-7" style={{ marginRight: '2px' }}>
                      Buttons
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      What
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Enter shape Id or click on link button">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      When
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Select level state to apply event on shape.">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      Action
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Select action type">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px', position: 'relative' }}>
                      Value
                      <span style={{ float: 'right' }}>
                        <Tooltip placement="auto" theme="info" content="Select value for this action">
                          <Icon name="info-circle" />
                        </Tooltip>
                      </span>
                    </label>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  ng-repeat="shape in rule.getShapeMaps()"
                  ng-className="{'gf-form-disabled': shape.data.hidden}"
                  ng-mouseleave="editor.unselectCell(rule.data.shapeProp,shape.data.pattern)"
                  ng-mouseover="editor.selectCell(rule.data.shapeProp,shape.data.pattern)"
                >
                  <td>
                    <div className="gf-form">
                      <label className="gf-form-label" style={{ marginRight: '4px' }}>
                        <Tooltip placement="auto" theme="info" content="Delete this mapping object">
                          <i
                            className="fa fa-w fa-remove pointer"
                            bs-tooltip="'Delete this mapping object'"
                            ng-click="editor.removeShapeMap(rule,$index);editor.onRulesChange()"
                            data-original-title=""
                            title=""
                          ></i>
                        </Tooltip>
                      </label>
                      <label className="gf-form-label" ng-if="!shape.isHidden()" style={{ marginRight: '4px' }}>
                        <i
                          className="fa fa-w fa-eye pointer"
                          bs-tooltip="'Hide selected object graph in rule'"
                          ng-click="shape.hide();editor.onRulesChange()"
                          data-original-title=""
                          title=""
                        ></i>
                      </label>

                      <label
                        className="gf-form-label"
                        style={{ marginRight: '4px' }}
                        ng-hide="editor.flowchartHandler.isMapping(shape)"
                      >
                        <Tooltip placement="auto" theme="info" content="Hide seleted object graph in rule">
                          <i
                            className="fa fa-link pointer"
                            ng-click="editor.flowchartHandler.setMap(shape,rule.data.shapeProp)"
                            bs-tooltip="'Link it on object graph'"
                            data-original-title=""
                            title=""
                          ></i>
                        </Tooltip>
                      </label>
                      <label
                        className="gf-form-label ng-hide"
                        style={{ marginRight: '4px', color: 'orange' }}
                        ng-show="editor.flowchartHandler.isMapping(shape)"
                      >
                        <Tooltip placement="auto" theme="info" content="Link it on object graph">
                          <i className="fa fa-unlink pointer" title=""></i>
                        </Tooltip>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="gf-form">
                      <input
                        type="text"
                        style={{ marginRight: '2px' }}
                        id="ccec75e9-a9a7-f3d2-105c-09afd776135f"
                        placeholder="id or regex of shape"
                        className="gf-form-input width-8 ng-pristine ng-untouched ng-valid ng-empty"
                        title=""
                      />
                    </div>
                  </td>
                  <td>
                    <Select
                      options={colorWhenList}
                      value={colorWhenVal}
                      allowCustomValue
                      onChange={(customValue) => {
                        console.log('customValue', customValue.label);
                        setColorWhenVal(customValue.label);
                      }}
                    />
                  </td>
                  <td>
                    <Select
                      options={colorHowList}
                      value={colorHowVal}
                      allowCustomValue
                      onChange={(customValue) => {
                        console.log('customValue', customValue.label);
                        setColorHowVal(customValue.label);
                      }}
                    />
                  </td>
                  <td></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div className="gf-form">
                      <label className="gf-form-label">
                        <i
                          className="fa fa-plus pointer"
                          ng-click="rule.addShapeMap('')"
                          style={{ marginRight: '2px' }}
                        ></i>
                      </label>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};
