import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit({ data }) {
    let { id } = useParams();
    //lay san phan co ma so {id} trong tap du lieu {data}

    const index = data.map(x => x.id).indexOf(id);
    const item = data[index];
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [pic, setPic] = useState(item.pic);

    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // doc du lieu nhap tu cac o id, name, price

        item.name = name;
        item.price = price;
        item.pic = pic;
        //dieu huong ve trang product 
        nav('/product');

        // alert("Hello");

    }

    return (

        <div>
            <h2>Edit Product</h2>

            <form>
                <label>ID</label>
                <input type="text" class="form-control"
                    placeholder="input id"
                    id="id" name="id" value={id} required
                    readOnly />

                <label>Name</label>
                <input type="text" class="form-control mt-3"
                    placeholder="input name"
                    id="name" name="name" value={name} required
                    maxLength={30}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Price</label>
                <input type="text" class="form-control mt-3"
                    placeholder="input price"
                    id="price" name="price" value={price} required
                    onChange={(e) => setPrice(e.target.value)} pattern='\d+(\.\d{2,4})?' />

                <label>Pic</label>
                <input type="text" class="form-control mt-3"
                    placeholder="input pic"
                    id="pic" name="pic" value={pic} required
                    onChange={(e) => setPic(e.target.value)} />

                <button onClick={(e) => handleSubmit(e)}>Save</button>
            </form>
        </div>


    );
}

export default Edit;