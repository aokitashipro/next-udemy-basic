export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="bg-gray-100 h-screen">
      { children }
    </div>
  )
}
