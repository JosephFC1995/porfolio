import { cn } from '@/utils/tw';
import clsx from 'clsx';
import { forwardRef } from 'react';

export interface IButton extends Omit<React.HTMLProps<HTMLAnchorElement | HTMLDivElement | HTMLButtonElement>, 'as' | 'size' | 'height' | 'width'> {
  as?: React.ElementType;
  size?: 'small' | 'normal' | 'large';
  variant?: 'primary' | 'outline';
  children?: React.ReactNode;
  className?: string;
  height?: string | null;
  width?: string | null;
}

const mapVariant = {
  primary: `btn-primary`,
  outline: `btn-outline`,
};

const mapSize = {
  small: `size-small`,
  normal: `size-normal`,
  large: `size-large`,
};

const Button = forwardRef<HTMLInputElement, IButton>((props, ref) => {
  const { className, variant = 'primary', size = 'normal', as = 'a', children, disabled = false, width = null, height = null, ...restProps } = props;
  const Element: React.ElementType = as;
  return (
    <Element ref={ref} {...restProps} className={cn(className, 'btn', mapVariant[variant], mapSize[size], disabled && 'disabled')}>
      {children}
    </Element>
  );
});

Button.displayName = 'Button';

export default Button;
