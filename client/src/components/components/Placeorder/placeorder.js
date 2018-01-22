import React from 'react';
import './placeorder.css';
import $ from 'jquery';



class Placeorder extends React.Component {
    state = {
        count: 0,
        price: 0
    };

    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });


        this.setState({price: this.state.count * 10})

    };

    // handleDecrement decreases this.state.count by 1
    handleDecrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count - 1 });


        this.setState({price: this.state.count * 10})
    };


    colorbox = (e) => {
        let setShirt = "data-short";
        let defineShirt = $(".shirt_type").val();
        let color = $(this).attr("color");
        $('.place-image').empty();
        if (defineShirt ==="long"){
            setShirt = "data-long"
        }
        if(defineShirt ==="hoodie"){
            setShirt = "data-hoodie"
        }
        let imageLink = e.currentTarget.getAttribute(setShirt)

        let addImage = '<img class = "colorImage" src="' + imageLink + '">';
        $('.place-image').append(addImage);
        console.log(e.currentTarget.getAttribute('data-short'));


    };


    render() {
        return (


        <div className="container z-depth-5 col s12 center" style={{margin: '25px'}} id="placeOrderContainer">
            <div className ="center" id ="placeOrderForm">
                <div className="row">
                    <div className = "col s6 place-image center-align">
                    </div>
                    <div className="col s6">
                        <div className="container">
                            <form id ="form ">
                                <h2 className="center-align red-text" id="placeOrder">Place Order</h2>

                                <div className="tap-target" data-activates="menu">
                                    <div className="tap-target-content">
                                        <h5>Title</h5>
                                        <p>A bunch of text</p>
                                    </div>
                                </div>
                                <div className ="row center">
                                    <div className="col s3">
                                    </div>
                                    <div className="center col s6">
                                        <select className="browser-default size white lighten-1">
                                            <option className =" grey lighten-1" value="" disabled selected>Size</option>
                                            <option className =" grey lighten-1" value="small">small</option>
                                            <option className =" grey lighten-1" value="medium">medium</option>
                                            <option className =" grey lighten-1" value="large">large</option>
                                        </select>
                                    </div>
                                </div>
                                <div className ="row center">
                                    <div className="col s3">
                                    </div>
                                    <div className="center col s6">
                                        <select className="browser-default shirt_type white lighten-1">
                                            <option className =" grey lighten-1" value="" disabled selected>Type of Shirt</option>
                                            <option className =" grey lighten-1" value="short">Short-Sleeve T-shirt</option>
                                            <option className =" grey lighten-1" value="long">Long-Sleeve T-Shirt</option>
                                            <option className =" grey lighten-1" value="hoodie">Hoodie</option>
                                        </select>
                                    </div>
                                </div>

                                <div className ="row center">
                                    <div className="col s3">
                                    </div>
                                    <div className="center col s6">
                                        <div className="colorBox red" onMouseOver={this.colorbox} color="red" data-short="https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=28147644" data-long="https://images-eu.ssl-images-amazon.com/images/I/61ud7oEwSUL._UL1500_.jpg" data-hoodie="http://b2df38f86a7f09c2a0ac-475946e33defe001a473c152934553a7.r67.cf3.rackcdn.com/S00348_front.jpg"></div>
                                        <div className="colorBox white" onMouseOver={this.colorbox} color="white" data-short="http://p.globalsources.com/IMAGES/PDT/S1156516470/Plain-White-T-shirt.jpg" data-long="http://www.theadairgroup.com/images/Adult-Long-Sleeve-T-Shirt-White_large.jpg" data-hoodie="http://i.ebayimg.com/images/i/141981968624-0-1/s-l1000.jpg"></div>
                                        <div className="colorBox blue" onMouseOver={this.colorbox} color="blue" data-short="https://i.ebayimg.com/images/g/Ex4AAOxyrM5TH3W1/s-l300.jpg" data-long="https://i5.walmartimages.com/asr/082409d7-cdc9-432d-bd92-3c3ac15dd911_1.7a5b3cf6a429d8b99f2987a155dea5bd.jpeg" data-hoodie="https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4026ef0cc7c4844b9d335306aa30fe5c/d8860e88-c3b8-4e4f-a5a4-3869bfbe7a56.jpg"></div>
                                        <div className="colorBox green" onMouseOver={this.colorbox} color="green" data-short="https://i.ebayimg.com/images/g/2MoAAOxyUI1TH3TE/s-l300.jpg" data-long="https://www.entripy.com/content/images/thumbs/0023113_jerzees-hidensi-t-long-sleeve-t-shirt.jpeg" data-hoodie="https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4026ef0cc7c4844b9d335306aa30fe5c/6745cb2b-5b01-44cc-8c1c-d2e1764920a5.jpg"></div>
                                        <div className="colorBox black" onMouseOver={this.colorbox} color="black" data-short="https://gd.image-gmkt.com/SGP-SALE-CHEAP-PLAIN-MAN-TSHIRT-MAN-SHIRT-BLACK-TEE-SHIRT-MEN/li/558/823/606823558.g_400-w_g.jpg" data-long="https://www.sunspel.com/media/catalog/product/cache/4/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh5013-bkaa.jpg" data-hoodie="https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=73405156"></div>
                                        <div className="colorBox yellow" onMouseOver={this.colorbox} color="yellow" data-short="https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=8264785" data-long="https://i5.walmartimages.com/asr/41cac9c0-f014-44d0-8549-2952bacb40ed_1.caef78b848d9becab4e330ab93c44a6c.jpeg" data-hoodie="https://s3-eu-west-1.amazonaws.com/megaimage/mega-lutbc1072-20.jpg"></div>
                                    </div>
                                </div>
                                <div className ="row center">
                                    <div className="col s2">
                                    </div>
                                    <div className="input-group col s8 pickQuantity" id="plusMinus">
                                            <span className="input-group-btn">
                                                <button type="button" onClick = {this.handleDecrement} className="center red quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                                                  <i className="material-icons">remove</i>
                                                </button>
                                            </span>

                                            <input type="text" id="quantity" name="quantity" className="input-number center" value={this.state.count} />

                                            <span className="input-group-btn">
                                                <button type="button" onClick = {this.handleIncrement} className="center red quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                                 <i className="material-icons center">add</i>
                                                </button>
                                            </span>

                                    </div>
                                </div>
                                <div className ="row center">
                                    <div className="col s3">
                                    </div>
                                    <div className ="center col s6">
                                        <textarea id="notes" className ="grey lighten-4" name="notes" placeholder="Tell us about your design" ></textarea>
                                    </div>
                                </div>
                                <div className ="row center">
                                    <div className="col s3">
                                    </div>
                                    <div className ="center col s6">
                                        <p id ="addPrice" className="center red-text"><strong>Price: {this.state.price}</strong></p>
                                    </div>
                                </div>
                                <div className ="row center">
                                    <div className="col s3">
                                    </div>
                                    <div className="col s6 center-align center section">
                                        <button className="btn waves-effect waves-light red" id="placeorder" type="submit" name="action">Order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
export default Placeorder;