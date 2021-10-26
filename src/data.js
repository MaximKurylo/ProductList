

const data = {
    productData: [
        {
            id: 1,
            img: 'https://www.kv.by/sites/default/files/tomato.jpg',
            name: 'Tomato',
            label: 'Red sweet tomato',
            price: 44
        },
        {
            id: 2,
            img: 'https://thefreshandnatural.com/wp-content/uploads/2020/05/APPLE-GREEN.jpg',
            name: 'Apple',
            label: 'Green sweet apple',
            price: 20
        },
        {
            id: 3,
            img: 'https://src.zakaz.atbmarket.com/cache/photos/catalog_product_gal_mob_1.png',
            name: 'Banana',
            label: 'Yellow banana',
            price: 32 
        }
    ],
};

localStorage.setItem('data', data)

export default data;