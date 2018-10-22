export interface ITdLineStyle extends ITdShadow {
  color?: any;
  width?: number;
  type?: TdLineType;
  opacity?: number;
}

export interface ITdLineCurveStyle extends ITdLineStyle {
  curveness?: number;
  emphasis?: ITdLineStyle;
}

export interface ITdAnimation {
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number | Function;
  animationEasing?: string;
  animationDelay?: number | Function;
  animationDurationUpdate?: number | Function;
  animationEasingUpdate?: string;
  animationDelayUpdate?: number | Function;
}

export interface ITdShadow {
  shadowBlur?: number;
  shadowColor?: any;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
}

export interface ITdTextShadow {
  textShadowColor?: string;
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
}

export interface ITdFont {
  fontStyle?: TdFontStyle;
  fontWeight?: TdFontWeight;
  fontFamily?: string;
  fontSize?: number;
}

export interface ITdTooltip {
  show?: boolean;
  trigger?: TdToolTipTrigger;
  axisPointer?: ITdTooltipAxisPointer;
  showContent?: boolean;
  alwaysShowContent?: boolean;
  triggerOn?: TdTooltopTriggerOn;
  showDelay?: number;
  hideDelay?: number;
  enterable?: boolean;
  renderMode?: 'html' | 'richText';
  confine?: boolean;
  transitionDuration?: number;
  position?: string | any[] | Function;
  formatter?: string | Function;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  padding?: number;
  textStyle?: ITdTextStyle;
  extraCssText?: string;
}

export interface ITdTooltipAxisPointer {
  type?: TdAxisPointerType;
  axis?: TdAxisPointerAxis;
  snap?: boolean;
  z?: number;
  label?: ITdAxisPointerLabel;
  lineStyle?: ITdLineStyle;
  shadowStyle?: ITdBaseStyle;
  crossStyle?: ITdLineStyle;
}

export interface ITdBaseStyle extends ITdShadow {
  color?: any;
  opacity?: number;
}

export interface ITdTextStyle extends ITdTextShadow, ITdFont {
  color?: string | object;
  lineHeight?: number;
  width?: number | string;
  height?: number | string;
  textBorderColor?: string; // Defaults to transparent
  textBorderWidth?: number;
  rich: object;
}

export interface ITdLabel extends ITdShadow, ITdTextShadow, ITdFont {
  show?: boolean;
  position?: TdLabelPosition;
  distance?: number;
  rotate?: number;
  offset?: number[];
  formatter?: any | Function;
  color?: any;
  align?: TdAlign;
  verticalAlign?: TdVerticalAlign;
  lineHeight?: number;
  backgroundColor?: string | object;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  padding?: number;
  width?: number | string;
  height?: number | string;
  textBorderColor?: string;
  textBorderWidth?: number;
  rich?: any;
}

export interface ITdAxisPointerLabel extends ITdShadow, ITdTextShadow, ITdFont {
  show?: boolean;
  precision?: string | number;
  formatter?: string | Function;
  margin?: number;
  color?: any;
  lineHeight?: number;
  width?: number | string;
  height?: number | string;
  textBorderColor?: string;
  textBorderWidth?: number;
  padding?: number | number[];
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
}

export type TdAxisPointerAxis = 'x' | 'y' | 'radius' | 'angle';

export type TdToolTipTrigger = 'item' | 'axis' | 'none';

export type TdTooltopTriggerOn = 'mousemove' | 'click' | 'none';

export type TdAxisPointerType = 'line' | 'shadow' | 'cross';

export type TdLabelPosition = 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'insideLeft' | 'insideRight' |
  'insideTop' | 'insideBottom' | 'insideTopLeft' | 'insideBottomLeft' | 'insideTopRight' | 'insideBottomRight' | string[];

export type TdAlign = 'left' | 'center' | 'right';

export type TdLineType = 'solid' | 'dashed' | 'dotted';

export type TdAreaOrigin = 'auto' | 'start' | 'end';

export type TdLineLabelPosition = 'middle' | 'start' | 'end';

export type TdTooltipPosition  = 'inside' | 'top' | 'left' | 'right' | 'bottom';

export type TdFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | number;

export type TdVerticalAlign = 'top' | 'middle' | 'bottom' | 'center';

export type TdPointerType = 'line' | 'shadow';

export type TdFontStyle = 'normal' | 'italic' | 'oblique';

export type TdStatus = 'show' | 'hide';

export type TdMarkPointSymbol = 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
