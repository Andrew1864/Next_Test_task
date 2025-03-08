// These styles apply to every route in the application
import "./global.css";
import Index from ".";

export default function RootLayout({}) {
  return (
    <>
      <div>
        <Index />
      </div>
    </>
  );
}
