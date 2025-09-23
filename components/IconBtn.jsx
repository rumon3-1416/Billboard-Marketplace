import { IconButton } from '@mui/material';

const IconBtn = ({ variant, className, children, ...props }) => {
  const coloredBtn = variant === 'primary';

  return (
    <IconButton
      sx={{
        fontSize: { xs: '16px', md: '20px', lg: '24px' },
        lineHeight: 1,
        padding: coloredBtn ? { xs: '14px', md: '16px', lg: '18px' } : { xs: '12px', md: '14px', lg: '16px' },
        margin: 0,
        borderRadius: '999px'
      }}
      className={`!m-0 ${
        coloredBtn
          ? '!bg-primary !text-white'
          : '!bg-card hover:!bg-primary !text-text hover:!text-white !border !border-dark-border hover:!border-primary shadow-[0_12px_40px_-4px_#18274B2E]'
      } ${className}`}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default IconBtn;
