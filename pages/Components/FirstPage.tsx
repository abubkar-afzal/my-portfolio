import Image from "next/image";
import React from "react";
import img1 from "../../public/img1.jpg"

const FirstPage = ()=>{
    return<>
        <div>
            <div>
                <div>Round text</div>
                <div><Image src={img1} alt="Image" width={1020} height={1020}/></div>
            </div>
            <div>
                <div>Hafiz Abubkar Afzal</div>
                <div>Full Stack Developer</div>
                <div>I apperciate your trust gratly.</div>
                <div>
                    <button>View Work</button>
                    <button>Contact Me</button>
                </div>
            </div>
        </div>
    </>
}

export default FirstPage;