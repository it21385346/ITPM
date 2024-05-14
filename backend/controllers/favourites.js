// controllers/dressController.js

const Dress = require('../models/Dress');
const Favorite = require('../models/Favorite');

exports.addToFavorites = async (req, res) => {
    try {
        const { id } = req.params;
        const dress = await Dress.findById(id);
        if (!dress) {
            return res.status(404).json({ error: 'Dress not found' });
        }
        const favorite = new Favorite({ dress: id });
        await favorite.save();
        res.status(200).json({ message: 'Dress added to favorites' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.removeFromFavorites = async (req, res) => {
    try {
        const { id } = req.params;
        await Favorite.findByIdAndDelete(id);
        res.status(200).json({ message: 'Dress removed from favorites' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
