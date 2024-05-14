import React from 'react';
import axios from 'axios';
import image3 from '../Asset/th3.jpeg'
import image4 from '../Asset/th4.jpg'
import image7 from '../Asset/th7.jpeg'
import image8 from '../Asset/th8.jpeg'
import image11 from '../Asset/th11.jpeg'
import image9 from '../Asset/th9.jpeg'


function SixDresses(){
    const dresses = [
        { id: 1, name: 'Tops', imageUrl: image3, description: 'good', price: 100 },
        { id: 2, name: 'T-shrt', imageUrl: image4, description: 'very good', price: 150 },
        { id: 3, name: 'hort', imageUrl: image7, description: 'ok', price: 120 },
        { id: 4, name: 'tops', imageUrl: image8, description: 'good', price: 130 },
        { id: 5, name: 'tops', imageUrl: image9, description: 'good', price: 110 },
        { id: 6, name: 'tops', imageUrl: image11, description: 'okey', price: 140 }
    ];

    const removeFromFavorites = async (id) => {
        try {
            await axios.delete(`/api/dresses/${id}`);
            // Optionally, update the UI to reflect the removal of the dress from favorites
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="favourites">
            <center><h1>My Favourites Page</h1></center>
        <div className="center-container">
            <div className="six-dresses">
                {dresses.map(dress => (
                    <div key={dress.id} className="dress-card">
                        
                        <img src={dress.imageUrl} alt={dress.name} />
                        <h3>{dress.name}</h3>
                        <p>{dress.description}</p>
                        <p>${dress.price}</p>
                        {/* Remove from favorites button */}
                        <button onClick={() => removeFromFavorites(dress.id)}>Remove from favorites</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default SixDresses;
