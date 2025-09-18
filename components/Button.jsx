import { Button as MuiButton } from '@mui/material';

const Button = ({ variant, size = 'default', textColor = '', className = '', children, ...props }) => {
  const containedStyle = '!text-white !bg-primary';
  const outlinedStyle = `!bg-transparent ${
    textColor === 'white' ? '!text-white !border-[#dde0e6]' : '!text-text !border-border'
  }`;
  const smSize = size === 'sm';

  return (
    <MuiButton
      variant={variant}
      sx={{
        px: smSize ? '24px' : '28px',
        py: smSize ? '16px' : '20px',
        lineHeight: 1,
        fontSize: smSize ? '14px' : '16px',
        fontWeight: '500',
        borderRadius: '999px',
        textTransform: 'none'
      }}
      className={`!font-primary ${
        variant === 'outlined' ? outlinedStyle : variant === 'contained' && containedStyle
      } ${className}`}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
