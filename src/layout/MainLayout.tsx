import Header from "../components/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ 
        padding: "2rem", 
        maxWidth: "1100px", 
        margin: "0 auto", 
        background: "#fbfbeaff" 
        }}>
      {children}
        </main>
    </>
  );
}