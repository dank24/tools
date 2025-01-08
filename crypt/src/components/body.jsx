import react from 'react'
import { useState, useEffect, } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Body() {

//      Variables
     let alphas = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n',
        'o','p','q','r','s','t','u','v','w','x','y','z'
     ]

     let initialPos = 0

    const [inpValue, setInpValue] = useState();    
    const [textArr, setTextArr] = useState([]);

    const [secondSTxt, setSecondSTxt] = useState('')
    const [sAlpha, setSAlpha] = useState([])

//      Functions
    // handle inputs function
    function handleInput(e) {
        let text = e.target.value

        setInpValue(text)
        let arr = text.split('') 
        setTextArr(arr)

        console.log(arr)
        console.log(text)
    }

    //  textOn second screen function
    function secondScreen() {
        //setSecondSTxt(inpValue)
        let a = sAlpha.join('')

        setSecondSTxt(a)
 }

    //  shift alphabets function
    let arr = []
    function shiftAlpha(k, a, A, sP) {
        if(k == a || k == A){
            arr.push(alphas[sP])
            console.log(arr)
            setSAlpha(arr)
        }
    }

    //  add
    function pressedKey(){
        let key = document.addEventListener('keypress', (e) =>{
            shiftAlpha(e.key, 'a', 'A', 1)
            shiftAlpha(e.key, 'b', 'B', 1)
            shiftAlpha(e.key, 'c', 'C', 1)
            shiftAlpha(e.key, 'd', 'D', 1)
            shiftAlpha(e.key, 'e', 'E', 1)
            shiftAlpha(e.key, 'f', 'F', 1)
            shiftAlpha(e.key, 'g', 'G', 1)
            shiftAlpha(e.key, 'h', 'H', 1)
            shiftAlpha(e.key, 'i', 'I', 1)
            shiftAlpha(e.key, 'k', 'K', 1)
            shiftAlpha(e.key, 'l', 'L', 1)
            shiftAlpha(e.key, 'm', 'M', 1)
            shiftAlpha(e.key, 'n', 'N', 1)
            shiftAlpha(e.key, 'o', 'O', 1)
            shiftAlpha(e.key, 'p', 'P', 1)
            shiftAlpha(e.key, 'p', 'Q', 1)
            shiftAlpha(e.key, 'r', 'R', 1)
            shiftAlpha(e.key, 's', 'S', 1)
            shiftAlpha(e.key, 't', 'T', 1)
            shiftAlpha(e.key, 'u', 'U', 1)
            shiftAlpha(e.key, 'v', 'V', 1)
            shiftAlpha(e.key, 'w', 'W', 1)
            shiftAlpha(e.key, 'x', 'X', 1)
            shiftAlpha(e.key, 'y', 'Y', 1)
            shiftAlpha(e.key, 'z', 'Z', 1)
        })
     }


//      Useffects
useEffect(() =>{
    pressedKey()
}, [])

useEffect(() =>{
    secondScreen()    
}, [inpValue])

//      Return
    return(
        <>
        <main className='bodyMainCont'>

            <section id='plainTextSec' className='bodyFirstSec'>
                <textarea id='plainTextInp' value={inpValue} placeholder='enter text here' name="" onChange={(e) =>{
                    handleInput(e)
                }} ></textarea>
            </section>

            <section id='cipherTextSec' className='bodySecondSec'>
                <div id='cipherTextDiv'> {secondSTxt} </div>
                <button id='copyBtn'>copy</button>
            </section>

        </main>
        </>
    )
}

export default Body