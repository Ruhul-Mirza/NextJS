



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    
      <h2
        className="text-center text-3xl"
      >
        Second
        {children}
      </h2>
    
  );
}
