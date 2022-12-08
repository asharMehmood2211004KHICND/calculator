import React from 'react'
import '../styles/ButtonBox.css'
import { Button } from './Button'


export const ButtonsBox = () => {
    return (
        <div className='ButtonBox'>

            <div className='first'>
                <Button className="button1" text="C">C</Button>
                <Button className="button1" text="arr">arr</Button>
                <Button className="button1" text="%">%</Button>
                <Button className="button1" text="/">/</Button>
            </div>
            <div className='second'>
                <Button className="button1" text="7">7</Button>
                <Button className="button1" text="6">6</Button>
                <Button className="button1" text="9">9</Button>
                <Button className="button1 " text="*">*</Button>
            </div>
            <div className='third'>
                <Button className="button1" text="4">4</Button>
                <Button className="button1" text="5">5</Button>
                <Button className="button1" text="6">6</Button>
                <Button className="button1" text="-">-</Button>
            </div>
            <div className='forth'>
                <Button className="button1" text="1">1</Button>
                <Button className="button1" text="2">2</Button>
                <Button className="button1" text="3">3</Button>
                <Button className="button1" text="">+</Button>
            </div>
            <div className='fifth'>
                
                <Button className="button1" text="0">0</Button>
                <Button className="button1" text="."></Button>

                <Button className="button15"  text="="> </Button>

            </div>


        </div>
    )
}
