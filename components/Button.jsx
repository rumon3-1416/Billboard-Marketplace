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
        px: smSize ? { xs: '16px', md: '20px', lg: '24px' } : { xs: '20px', md: '24px', lg: '28px' },
        py: smSize ? { xs: '12px', md: '14px', lg: '16px' } : { xs: '16px', md: '18px', lg: '20px' },
        lineHeight: 1,
        fontSize: smSize ? { xs: '12px', md: '14px' } : { xs: '14px', md: '16px' },
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
