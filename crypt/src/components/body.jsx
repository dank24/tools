import react from 'react'
import { useState, useEffect, } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Body() {

    return(
        <>
        <main className='bodyMainCont'>

            <section id='plainTextSec' className='bodyFirstSec'>
                <textarea id='plainTextInp' placeholder='enter text here' name="" ></textarea>
            </section>

            <section id='cipherTextSec' className='bodySecondSec'>
                <div id='cipherTextDiv'> </div>
                <button id='copyBtn'>copy</button>
            </section>

        </main>
        </>
    )
}

export default Body