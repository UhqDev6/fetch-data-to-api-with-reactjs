// const root = document.getElementById('root');
// const element = document.createElement('h1');
// element.innerText = 'hello world';
// element.className = 'heading-1';
// root.appendChild(element);

/* const p1 = React.createElement('h1', {
    children: 'hello react',
    className: 'heading-1',
});
 const p2 = React.createElement('h1', {
    children: 'hello react2',
    className: 'heading-2',
});
 const li1 = React.createElement('li', {
    children: 'coto',
});
 const li2 = React.createElement('li', {clasName: 'food'} , 'konro');
 const element = React.createElement('div', {
    children: [p1,p2,li1,li2],
}); */
// const element = (
//     <ul>
//         <li>one</li>
//     </ul>
// );
// const bio = text => {
//     return text.toUpperCase();
// }
// const name = "ulhaq";
// const element = (
//     <h1>{bio(name)}</h1>
// );
// const Halo = (props) => {
//     console.log(props);
//     return <p>Halo <b>{props.name}</b></p>
// }
// const element = (
//     <>
//     <img src="https://images.unsplash.com/photo-1660467095171-4052fcacfa69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt="gambar" width="300"/>
//     <p>Halo <b>Ulhaq</b></p>
//     <p>Halo <b>Dhiya</b></p>
//     {Halo('nurul')}
//     <Halo name="Nurul" />
//     <Halo name="alfiyyah" />
//     </>
// );
// const time = () => {
//     const element = (
//     <div>
//         <h1>Jama Sekarang</h1>
//         <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//     );
// ReactDOM.render(element, root);
// }
// setInterval(()=> {
//     time();
// }, 1000);
// const klikAku = (msg) => {
//     alert(msg);
// }
// const element = (
//     <>
//         <div style={{
//             width:200,
//             height:200,
//             backgroundColor:'blue'
//             }}>
//         </div>
//         <div className="box">
//         <button onClick={()=> {
//             klikAku("haiii fia")
//         }}>Klik</button>
//         </div>
//     </>
// );
// const App = () => {
//     const [count, setCount] = React.useState(1);
//     // const count = state[0];
//     // const updateCount = state[1];
//     return (
//         <>
//             <button onClick={()=> {
//                 setCount(count - 1);
//             }}>-</button>
//             <span>{count}</span>
//             <button onClick={()=> {
//                 setCount(count + 1);
//             }}>+</button>
//         </>
//     );
// }
// const App = () => {
//     const [login, setLogin] = React.useState(false);
//     if(login){
//         return (
//             <>
//                 <h1>Anda sudah login bang</h1>
//                 <button onClick={()=> {
//                     setLogin(false);
//                 }}>logout</button>
//             </>
//         );
//     }
//     return (
//         <> 
//             <h1>Sign in dlu bang !!</h1>
//             <p>{login ? <b>Anda sudah Login</b> : <i>Anda belum Login</i>}</p>
//             <button onClick={()=> {
//                 setLogin(true);
//             }}>Login</button>
//         </>
//     );
// }
// const App = () => {
//     const [login, setLogin] = React.useState(false);
//     const judulRef = React.useRef(null);
//     /* manipulasi dom menggunakan useEffect */
//     React.useEffect(()=> {
//         // const judul = document.getElementById('judul');
//         setTimeout(()=> {
//             judulRef.current.textContent = "application";
//         }, 1000);
//     }, []);
//     return (
//         <>
//             <h1 ref={judulRef}>Application</h1>
//         </>
//     );
// }
// const App = () => {
//     const fruits = ['Apple','Anggur','Alpukat','Semangka'];
//     return (
//         <ul>
//         {fruits.map((fruit)=> {
//             return <li key={fruit}>{fruit}</li>
//         })}
//         </ul>
//     );
// }
// const App = () => {
//     // const nameRef = React.useRef(null);
//     const [name, setName] = React.useState('masukkan nama');
//     const sendData = (event) => {
//         event.preventDefault();
//         // const nama = nameRef.current.value;
//         console.log(`nama ${name}`);
//         // const data = document.getElementById('name').value;
//         // console.log(`ini nama ${data}`);
//     }
//     return (
//         <form onSubmit={sendData}>
//             <div>
//                 <label>Name :</label>
//                 <input type="text" name="name" id="name" value={name} onChange={(event)=> {
//                     setName(event.target.value);
//                 }} required />
//             </div>
//             <div>
//                 <button type="submit">Send</button>
//             </div>
//         </form>
//     );
// }
const App = () => {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const getData = async () => {
      const request = await fetch('https://the-lazy-media-api.vercel.app/api/games?page=1');
      const response = await request.json();
      console.log(response);
      setNews(response);
      setLoading(false);
    };

    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Games"), loading ? /*#__PURE__*/React.createElement("h4", null, "sedang memuat data...") : /*#__PURE__*/React.createElement("ul", null, news.map(item => {
    console.log(item);
    return /*#__PURE__*/React.createElement("div", {
      key: item.key
    }, /*#__PURE__*/React.createElement("h2", null, item.title), /*#__PURE__*/React.createElement("p", null, item.desc), /*#__PURE__*/React.createElement("img", {
      src: item.thumb
    }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, item.author)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, item.time)));
  })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);