import Header from "./components/Header";
import Headerpost from "./components/Headerpost";
import Post from "./components/Post";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="container min-h-screen ">
       <Header/>    
       <Headerpost/>
       <Post/>
       <Footer/>
    </main>
  );
}
