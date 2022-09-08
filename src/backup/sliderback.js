import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    {
        slideid: 1,
        content: "01 Slide Title",
        desc: "01 Slide inner",
        link: "/"
    },
    {
        slideid: 2,
        content: "02 Slide Title",
        desc: "02 Slide inner",
        link: "/"
    },
    {
        slideid: 3,
        content: "03 Slide Title",
        desc: "03 Slide inner",
        link: "/"
    }

]

const MainSlider = () => {
    const [num, setNum] = useState();
    const slideRef = useRef();
    useEffect(() => {
        setNum(0)
    }, [])
    // 랜더링 되었을 때 한 번만 실행하는 Hook
    // [] 의존성 배열, 없으면 업데이트될때마다 계속 실행한다.
    const slideSet = {
        dots: true,
        afterChange: idx => setNum(idx),
    }

    return (
        <>
            <Slider {...slideSet} ref={slideRef}>
                {
                    SLIDE.map((slide, idx) =>
                        <figure
                            key={idx} className={`itm0${slide.slideid} ${idx === num ? 'on' : ''}`}
                        >
                            <div className='slideInner'>
                                <h2>{slide.content}</h2>
                                <p>{slide.desc}</p>
                                <a href={slide.link}>more</a>
                            </div>
                        </figure>
                    )
                }
            </Slider >

            <div>0{num + 1} / 0{SLIDE.length}</div>
            <div className='arrow'>
                <button onClick={() => slideRef.current.slickPrev()}>prev</button>
                <button onClick={() => slideRef.current.slickNext()}>next</button>
            </div>
            <ul className='dots'>
                {
                    SLIDE.map((dots, idx) =>
                        <li
                            key={idx}
                            onClick={() => slideRef.current.slickGoTo(idx)}
                            className={idx === num ? 'on' : ''}
                        >{dots.slideid}
                        </li>
                    )
                }
            </ul>
            <div className='content'>
                <div>
                    {SLIDE[num]?.desc}
                    {/* ? Null 병합 연산자, 옵셔널 체이닝. */}
                </div>
            </div>
        </>
    )
}

export default MainSlider;