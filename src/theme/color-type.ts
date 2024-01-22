export type SimpleColor =
  | 'backdrop'
  | 'shadow'
  | 'background'
  | 'border'
  | 'surface'
  | 'text_primary'
  | 'text_primary_contrast'
  | 'text_secondary'
  | 'text_secondary_contrast'

export type SimpleColorScheme = string;

export type CompoundColor =
  | 'danger'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

export type CompoundColorScheme = {
  background: string;
  text?: string;
};

export type ColorType = Record<SimpleColor, SimpleColorScheme> & Record<CompoundColor, SimpleColorScheme | CompoundColorScheme>;
