import React from 'react';
import './cardcss.css';
import {Data} from './data';

function Card(){
    return(
        <div className="cardContainer">
            {Data.map((item) => {
                return(
                    <div className="card">
                <div class="cardimage">
                    <img src={item.src} alt="1" height="50%" width="50%"/>
                </div>
                <div class="name">
                    <p>{item.name}</p>
                </div>
                <div class="desc">
                    <p>{item.desc} 
                        </p>
                </div>
                <div class="button"><a className="b" href="">Share</a><pre></pre><a className="b" href="">Learn More</a></div>
                                    
            </div>
                )
                
            }
            )}
            
        </div>
    )
}
export default Card;