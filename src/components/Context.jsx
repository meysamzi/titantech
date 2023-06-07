import React, { createContext, useState } from 'react'

export const DataContext = createContext();


export const DataProvider = (props) => {
    const [products, setProducts] = useState(
        [
            {
                '_id': '1',
                'title': 'کارت گرافیک ایسوس',
                'images': [

                    // 'http://localhost:3000/images/9.jpg',
                    'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701590589.jpg',
                    'https://images-fe.ssl-images-amazon.com/images/I/61tamF+ebPL._AC_UL600_SR600,600_.jpg',
                    'https://s.maxict.nl/pnew/x/square/600/asus-asus-dual-rtx2060-o6g-evo-videokaart-nvidia-geforce-rtx-2060-6-gb-gddr6-19494168.jpg',

                ],
                'description': 'کارت گرافیک متن ',
                'content': 'محتوا',
                'price': '180000',
                'count': '1',
            },
            {
                '_id': '2',
                'title': 'سی پی یو اینتل',
                'images': [
                    // 'assets/images/product/graphic-card-650x366.jpg',
                    'https://cdn.wccftech.com/wp-content/uploads/2023/06/Gigabyte-700-600-Series-Motherboards-Intel-Next-Gen-Desktop-CPU-Support-gigapixel-standard-scale-2_00x.png',
                    'https://images-eu.ssl-images-amazon.com/images/I/81qGaJcfv1L._AC_UL600_SR600,600_.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUcN_UibRl7NWsKDMJ3XP0axOGPEGOW_Z8raGGlxBg8UVV2m7rWDXmz8ISNXHMAhohjX8&usqp=CAU'
                ],
                'description': 'سی پی یو اینتل',
                'content': 'محتوا',
                'price': '120000',
                'count': '4',
            },
            {
                '_id': '3',
                'title': 'مادربرد ایسوس',
                'images': [
                    'data:image/jpeg;base64,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',
                    'https://cdn.wallpapersafari.com/57/86/36SqLD.jpg',
                    'https://cdn.wallpapersafari.com/57/95/N69GrM.jpg'
                ],
                'description': 'مادربرد ایسوس',
                'content': 'محتوا',
                'price': '420000',
                'count': '3',
            },
            {
                '_id': '4',
                'title': 'کارت گرافیک گیگابایت',
                'images': [
                    'https://tpucdn.com/gpu-specs/images/c/361-bottom.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lhOmF5OWs_8d0QuNJaEoW6FjvsM-arSwqqTvwCI-FsodyvR20Ftes1U7qMke2nPygT8&usqp=CAU',
                    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0k_mtuns2UQaZdh6cvaT9L0aGwkqRn7g714Bh8akarDogklZ0ZugKuASdG0jjhtAMGIs&usqp=CAU'
                ],
                'description': 'کارت گرافیک گیگابایت',
                'content': 'محتوا',
                'price': '420000',
                'count': '3',
            },
            {
                '_id': '5',
                'title': 'کارت گرافیک گیگابایت',
                'images': [
                    'https://tpucdn.com/gpu-specs/images/c/361-bottom.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lhOmF5OWs_8d0QuNJaEoW6FjvsM-arSwqqTvwCI-FsodyvR20Ftes1U7qMke2nPygT8&usqp=CAU',
                    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0k_mtuns2UQaZdh6cvaT9L0aGwkqRn7g714Bh8akarDogklZ0ZugKuASdG0jjhtAMGIs&usqp=CAU'
                ],
                'description': 'کارت گرافیک گیگابایت',
                'content': 'محتوا',
                'price': '420000',
                'count': '3',
            }, {
                '_id': '6',
                'title': 'کارت گرافیک گیگابایت',
                'images': [
                    'https://tpucdn.com/gpu-specs/images/c/361-bottom.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lhOmF5OWs_8d0QuNJaEoW6FjvsM-arSwqqTvwCI-FsodyvR20Ftes1U7qMke2nPygT8&usqp=CAU',
                    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0k_mtuns2UQaZdh6cvaT9L0aGwkqRn7g714Bh8akarDogklZ0ZugKuASdG0jjhtAMGIs&usqp=CAU'
                ],
                'description': 'کارت گرافیک گیگابایت',
                'content': 'محتوا',
                'price': '420000',
                'count': '3',
            }, {
                '_id': '7',
                'title': 'کارت گرافیک گیگابایت',
                'images': [
                    'https://tpucdn.com/gpu-specs/images/c/361-bottom.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lhOmF5OWs_8d0QuNJaEoW6FjvsM-arSwqqTvwCI-FsodyvR20Ftes1U7qMke2nPygT8&usqp=CAU',
                    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0k_mtuns2UQaZdh6cvaT9L0aGwkqRn7g714Bh8akarDogklZ0ZugKuASdG0jjhtAMGIs&usqp=CAU'
                ],
                'description': 'کارت گرافیک گیگابایت',
                'content': 'محتوا',
                'price': '420000',
                'count': '3',
            }, {
                '_id': '8',
                'title': 'کارت گرافیک گیگابایت',
                'images': [
                    'https://tpucdn.com/gpu-specs/images/c/361-bottom.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lhOmF5OWs_8d0QuNJaEoW6FjvsM-arSwqqTvwCI-FsodyvR20Ftes1U7qMke2nPygT8&usqp=CAU',
                    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0k_mtuns2UQaZdh6cvaT9L0aGwkqRn7g714Bh8akarDogklZ0ZugKuASdG0jjhtAMGIs&usqp=CAU'
                ],
                'description': 'کارت گرافیک گیگابایت',
                'content': 'محتوا',
                'price': '420000',
                'count': '3',
            }, {
                '_id': '9',
                'title': 'کارت گرافیک گیگابایت',
                'images': [
                    'https://tpucdn.com/gpu-specs/images/c/361-bottom.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lhOmF5OWs_8d0QuNJaEoW6FjvsM-arSwqqTvwCI-FsodyvR20Ftes1U7qMke2nPygT8&usqp=CAU',
                    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0k_mtuns2UQaZdh6cvaT9L0aGwkqRn7g714Bh8akarDogklZ0ZugKuASdG0jjhtAMGIs&usqp=CAU'
                ],
                'description': 'کارت گرافیک گیگابایت',
                'content': 'محتوا',
                'price': '420000',
                'count': '3',
            },


        ]
    )

    const [cart,setCart] = useState([])

    const addCart = (id) => {
        const data = products.filter(product =>{
                return(
                    product._id === id
                )
        })
        setCart([...cart,...data])
    }

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}



function Context() {
    return (
        <div>Context</div>
    )
}

export default Context