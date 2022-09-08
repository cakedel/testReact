import { useState } from 'react';
import './App.css';
import MainSlider from './component/MainSlider';

const DB = [
  {
    id: 1,
    content: "menu01",
    link: "/",
    submenu: [
      {
        content: "smenu01",
        link: "/"
      },
      {
        content: "smenu02",
        link: "/"
      },
      {
        content: "smenu03",
        link: "/"
      }
    ]
  },
  {
    id: 2,
    content: "menu02",
    link: "/",
    submenu: [
      {
        content: "smenu021",
        link: "/"
      },
      {
        content: "smenu022",
        link: "/"
      },
      {
        content: "smenu23",
        link: "/"
      }
    ]
  },
  {
    id: 3,
    content: "menu03",
    link: "/",
    submenu: [
      {
        content: "smenu31",
        link: "/"
      },
      {
        content: "smenu32",
        link: "/"
      },
      {
        content: "smenu33",
        link: "/"
      }
    ]
  }

]

function App() {
  const [classChange, setclassChange] = useState("");
  const [toggleClass, settoggleClass] = useState(false);
  // 비구조할당
  // useState()는 변수로 [] 배열을 데리고 다닌다.
  return (
    <>
      <header>
        <h1 className={classChange} >LOGO</h1>
        <h2 className={toggleClass ? 'on' : ''}>Toggle class</h2>
        {/* html 안에 if 문을 쓸 수 없기에 삼항 연산자를 써줘야 한다. */}
        {/* this는 window를 가리킨다. */}
        <button onClick={() => settoggleClass(!toggleClass)}>toggle class</button>
        <nav className="Gnb">
          <ul>
            {DB.map((it, idx) => <li key={idx}>
              <a href="">{it.content}</a>
              <ul className="smenu">
                {it.submenu.map(((smenu, idx) => <li key={idx}><a href={smenu.link}>{smenu.content}</a></li>))}
              </ul>
            </li>)}
          </ul>
        </nav>
      </header>
      <main>
        <MainSlider/>
      </main>
    </>
  );
}

export default App;
