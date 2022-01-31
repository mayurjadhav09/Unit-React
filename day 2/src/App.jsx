import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='navbar'>
        <div className='logo'><img className='logoimg' src="https://s.imgur.com/images/logo-1200-630.jpg?2" alt="" /></div>

        <div className='newpostbutton'>
          <button className='newpt'>New Post</button>
        </div>

        <div id='searchBar'>
          <input type="text" name="" id="" placeholder='Imgaes,#tags, @users Oh my!' />
          <div> <img className='logoimg' src="https://thumbs.dreamstime.com/z/search-icon-magnifying-glass-icon-vector-magnifier-loupe-sign-search-icon-magnifying-glass-icon-vector-magnifier-loupe-sign-218558515.jpg" alt="" /></div>
        </div>

        
        <div className='newpostbutton'><button className='newpt' >Go Ad-Free</button></div>
        <div className='logo'>Sign in</div>
        <div className='newpostbutton'><button className='newpt'>Sign Up</button></div>

      </div>
<div id='body1'>
      <div className='mobi'>
        <h1>Mobile Operating system</h1>
        {[
          {name:"Android"},
          {name:"Blackbarry"},
          {name:"Iphone"},
          {name:"Windows Phone"}
        ].map((e)=>{
          return <li>{e.name}</li>
        })}
        <h1>Mobile Manufaturers </h1>
        {[
          {name1:"Samsung"},
          {name1:"HTC"},
          {name1:"Micromax"},
          {name1:"Apple"}
        ].map((e)=>{
          return <li>{e.name1}</li>
        })}

      </div>
      <div className='scroll'>
        {[
          {src:"https://i.imgur.com/KXjdvjW_d.webp?maxwidth=128&shape=thumb",title:"Dog day sunday"},
          {src:"https://i.imgur.com/iMCpEU7_d.webp?maxwidth=128&shape=thumb",title:"Genius level marketing"},
          {src:"https://i.imgur.com/4peD3NS_d.webp?maxwidth=128&shape=thumb",title:"How it should be done"},
          {src:"https://i.imgur.com/QhjdfyK_d.webp?maxwidth=128&shape=thumb",title:"confuse bear"},
          {src:"https://i.imgur.com/atfkuhZ_d.webp?maxwidth=128&shape=thumb",title:"Do I assume u "},
          {src:"https://i.imgur.com/fRW7Ns9_d.webp?maxwidth=128&shape=thumb",title:"NFT"},
          {src:"https://i.imgur.com/GnUqySJ_d.webp?maxwidth=128&shape=thumb",title:"My own worst Enemy"},
        ].map((a)=>{
          return <div className='simg'> <img src={a.src} alt="" /> {a.title}  </div>  
        })
        
        }



      </div>
      </div>
      
      
      
      
     
     
    </div>
  );
}

export default App;
