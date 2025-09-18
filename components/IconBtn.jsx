import { IconButton } from '@mui/material';

const IconBtn = ({ variant, className, children, ...props }) => {
  return (
    <IconButton
      sx={{
        fontSize: '24px',
        lineHeight: 1,
        padding: '18px',
        margin: 0,
        borderRadius: '999px'
      }}
      className={`!m-0 ${
        variant === 'primary'
          ? '!bg-primary !text-white'
          : '!bg-card hover:!bg-primary !text-text hover:!text-white !p-4 !border !border-dark-border hover:!border-primary shadow-[0_12px_40px_-4px_#18274B2E]'
      } ${className}`}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default IconBtn;
