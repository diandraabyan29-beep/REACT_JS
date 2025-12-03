import Card from "./components/Card";
import Greeting from "./components/Greeting"
import ProductCard from "./components/ProductCard"
import Welcome from "./components/Welcome"

function App() {
  const handleClick = () => {
    alert('Tombol diklik!');
  };

  // const commentData = {
  //   date: new Date(),
  //   text: 'Saya harap Anda menikmati belajar React!',
  //   author: {
  //     name: 'Hello Kitty',
  //     avatarUrl: 'https://via.placeholder.com/50/FF0000/FFFFFF?text=HK',
  //   },
  // };


  return (
    <>
    <Greeting/>
    <p>Ini adalah paragraf tentang React</p>
    <Welcome name="Zahran"/>
    <Welcome name="Budi"/>
    <ProductCard productName="Laptop" price={1500} stock={5} isAvailable={true}/>
    <ProductCard productName="Smartphone" price={800} stock={0} isAvailable={false}/>
    <button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>Klik Saya</button>
     
     {/* <Card>
        <h2>Judul Kartu Pertama</h2>
        <p>Ini adalah konten di dalam kartu pertama.</p>
        <button>Detail</button>
      </Card>

      <Card>
        <h3>Kartu Kedua</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card>
        <h1>Contoh Komposisi Komponen</h1>
      <Comment
        author={commentData.author}
        text={commentData.text}
        date={commentData.date}
      />
      <Comment
        author={{ name: 'React Lover', avatarUrl: 'https://via.placeholder.com/50/0000FF/FFFFFF?text=RL' }}
        text="React membuat pengembangan UI menjadi menyenangkan!"
        date={new Date()}
      /> */}
    </>
  )
}

export default App
