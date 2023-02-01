import './App.css'
function Product(props) {
            return (
                <div style={{display:"inline-block",marginRight:50,marginTop:30}} className="ui four cards">
                <div class="ui card">
                    <div class="image">
                        
                        <img src={props.image} alt="nature" width={300} height={150}/>
                    </div>
                    <div class="card-content">
                        <p class="title product-title">{props.name}</p>
                        <div class="content">
                            Lizards are a widespread group of squamate<br></br>
                            reptiles,with over 6,000 species,ranging across<br></br>
                            all continents except Antarctica
                            <br></br>
                        </div>
                        <div>
                            <br></br>
                        <a  style={{color:"blue"}}href="product.html" target="_blank">
                            <strong>SHARE</strong>
                        </a>
                        <a style={{color:"blue"}}  href="product.html" target="_blank">
                            <strong>LEARN MORE</strong>
                        </a>
                        

                        </div>
                    </div>
                </div>
                </div>
            
                
            )
        }


export default Product;