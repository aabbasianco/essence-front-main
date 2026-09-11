// design-system/entities.ts

export type Id = number;

export type Tone = {
  id: Id;
  name: string;
};

export type Appearance = {
  id: Id;
  name: string;
};

export type State = {
  id: Id;
  name: string;
};

export type VisualScheme = {
  id: Id;
  bgColorId: Id;
  fgColorId: Id;
  borderColorId: Id;

  bgOpacity: number;
  fgOpacity: number;
  borderOpacity: number;
};

export type ColorSet = {
  id: Id;
  name: string;

  backgroundColorId: Id;
  backgroundForegroundColorId: Id;
  subtleColorId: Id;
  subtleForegroundColorId: Id;
};

export type Color = {
  id: Id;
  name: string;
  hexCode: string;
};

export type RAppearanceTone = {
  id: Id;
  toneId: Id;
  appearanceId: Id;
};

export type RAppearanceToneStateVisualScheme = {
  id: Id;
  stateId: Id;
  visualSchemeId: Id;
  rAppearanceToneId: Id;
};

export type RColorSetColorPalette = {
  id: Id;
  colorSetId: Id;
  colorId: Id;
};