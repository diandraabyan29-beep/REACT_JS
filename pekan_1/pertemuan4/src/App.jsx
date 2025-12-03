import ProfileBox from "./components/inline/ProfileBox";
import ProfileCard from "./components/css-class/ProfileCard";
import Button from "./components/css-modules/Button";
import AlertBox from "./components/dynamic/AlertBox";
import ResponsiveBox from "./components/responsive/ResponsiveBox";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Evaluasi Harian React - Hari 4</h1>

      <h2>1. Inline Styles</h2>
      <ProfileBox />

      <h2>2. CSS Classes</h2>
      <ProfileCard />

      <h2>3. CSS Modules</h2>
      <Button />

      <h2>4. Dynamic Styling</h2>
      <AlertBox type="success" message="Berhasil disimpan!" />
      <AlertBox type="warning" message="Periksa kembali input Anda!" />
      <AlertBox type="error" message="Terjadi error pada sistem!" />

      <h2>5. Responsive Component</h2>
      <ResponsiveBox />
    </div>
  );
}

export default App;
