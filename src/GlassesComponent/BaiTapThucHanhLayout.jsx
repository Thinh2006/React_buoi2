import React ,{useState} from 'react'
import './thuchanhLayout.css'


const BaiTapThucHanhLayout = () => {
  
    const [imgsrc, setImg] = useState('./images/glassesImage/v1.png');
    const handleImg = (number) => (event) => {
        setImg(`./images/glassesImage/v${number}.png`)
    }

    return (
    <div style={{background : "url('./images/glassesImage/background.jpg')", backgroundSize: "cover"}}>
        <header className='bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white fs-4' style={{height:100}}>THE GLASS APP ONLINE</header>
        <div className="models my-5">
            <div className="container d-flex justify-content-between" style={{width:600}}>
                <div className="image-left position-relative">
                    <img style={{height:250, width:200}} src="./images/glassesImage/model.jpg" alt="" />
                    <img className="position-absolute img-item" src='./images/glassesImage/v1.png' style={{height:50, width:100, top:60 , left:50}}></img>
                    <div className="content position-absolute bg-warning bg-opacity-50" style={{bottom:0, fontSize:10}}>
                        <h6>GUCCI G8850U</h6>
                        <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                    </div>
                </div>
                <div className="image-right position-relative">
                    <img style={{height:250, width:200}} src="./images/glassesImage/model.jpg" alt=""/>
                    <img className="position-absolute img-item" src={imgsrc} style={{height:50, width:100, top:60 , left:50, }}></img>
                </div>
            </div>
        </div>
        <div className="glasses py-5">
            <div className="container bg-light p-3" style={{width:1000}}>
                <img src="./images/glassesImage/g3.jpg" alt="" style={{height:50, width:100}} className='mx-4 border my-3' onClick={handleImg('3')} type="button"/>
                <img src="./images/glassesImage/g1.jpg" alt="" style={{height:50, width:100}} className='mx-4 border my-3' onClick={handleImg('1')} type="button"/>
                <img src="./images/glassesImage/g2.jpg" alt="" style={{height:50, width:100}} className='mx-4 border my-3' onClick={handleImg('2')} type="button"/>
                <img src="./images/glassesImage/g4.jpg" alt="" style={{height:50, width:100}} className='mx-4 border my-3' onClick={handleImg('4')} type="button"/>
                <img src="./images/glassesImage/g5.jpg" alt="" style={{height:50, width:100}} className='mx-4 border my-3' onClick={handleImg('5')} type="button"/>
                <img src="./images/glassesImage/g6.jpg" alt="" style={{height:50, width:100}} className='mx-4 border my-3' onClick={handleImg('6')} type="button"/>
                <img src="./images/glassesImage/g7.jpg" alt="" style={{height:50, width:100}} className='mx-4 border my-3' onClick={handleImg('7')} type="button"/>
                <img src="./images/glassesImage/g8.jpg" alt="" style={{height:50, width:100}} className='mx-4 border my-3' onClick={handleImg('8')} type="button"/>
                <img src="./images/glassesImage/g9.jpg" alt="" style={{height:50, width:100}} className='mx-4 border my-3' onClick={handleImg('9')} type="button"/>
            </div>
        </div>
    </div>
    )
}

export default BaiTapThucHanhLayout