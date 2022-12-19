import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {

    const [btn, setBtn] = useState(false);
    const refCharac = useRef(null);

    useEffect(() => {
        refCharac.current.classList.add("startingImg");
        setTimeout(() => {
            refCharac.current.classList.remove("startingImg");
            setBtn(true)
        }, 1000);

    }, [])

    const setLeftImg = () => {
        refCharac.current.classList.add("leftImg");
    }

    const setRightImg = () => {
        refCharac.current.classList.add("rightImg");
    }

    const clearImg = () => {
        if (refCharac.current.classList.contains("leftImg")) {
            refCharac.current.classList.remove("leftImg");
        } else if (refCharac.current.classList.contains("rightImg")) {
            refCharac.current.classList.remove("rightImg");
        }
    }

    const displayBtn = btn && (
        <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <Link className="btn-welcome" to="/signup">Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <Link className="btn-welcome" to="/login">Connexion</Link>
            </div>
        </Fragment>
    )

    return (
        <main ref={refCharac} className="welcomePage">
            {displayBtn}
        </main>
    )
}

export default Landing