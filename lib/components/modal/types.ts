export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  backdropProps?: React.HTMLAttributes<HTMLDivElement>;
  onBackdropClick?: React.MouseEventHandler<HTMLDivElement>;
  center?: boolean;
  visible?: boolean;
}