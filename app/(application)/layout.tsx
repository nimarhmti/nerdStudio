import Sidebar from "./_layouts/sidebar/sidebar";

interface ApplicationLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: ApplicationLayoutProps) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      {children}
    </div>
  );
}
