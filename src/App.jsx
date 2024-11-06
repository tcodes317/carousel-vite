import Carousel from "./components/Carousel";
import './App.css'


const slides=[
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png"
]

function App() {
  return (
    <>
      <main className="App">
        <div className="max-w-lg mx-auto">
          {/** autoSlide={true} >> you can add this to the attributes of Carousel */}
          <Carousel> 
            {slides.map((s) => (
              <img src={s} className="w-[100%]" />
              // <video src={demoVideo} autoplay muted loop />
            ))}
          </Carousel>
        </div>
      </main>
    </>
  )
}

export default App
