type MyComponentProps = {
  className?: string;
  // ...other props
  children?: React.ReactNode;
};

export function MyComponent({ className, children, ...props }: MyComponentProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}