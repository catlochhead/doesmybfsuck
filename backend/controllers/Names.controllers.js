import Name from '../models/Names.js'
import mongoose from 'mongoose';

export const getNames = async (req, res) => {
    const { firstname, lastname } = req.body;

    if (!firstname || !lastname) {
        return res.status(400).json({ success: false, message: "Please provide both first and last names." });
    }

    try {
        // Trim whitespace and make the search case-insensitive
        const name = await Name.findOne({
            firstname: { $regex: `^${firstname.trim()}$`, $options: "i" },
            lastname: { $regex: `^${lastname.trim()}$`, $options: "i" },
        });

        if (name) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(404).json({ success: false });
        }
    } catch (error) {
        console.error("Error searching for name:", error.message);
        res.status(500).json({ success: false, message: "Server error while searching for the name." });
    }
};


export const createName = async (req,res) => {
    const name = req.body; //user will send this data

    if(!name.firstname || !name.lastname){
        return res.status(400).json({success:false, message: "Please provide first and last name"});
    }

    const newName = new Name(name);

    try {
        await newName.save();
        res.status(201).json({success:true, data: newName});
    } catch (error) {
        console.error("Error in Create Name:", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }

};

export const deleteName = async (req,res) => {
    const {id} = req.params; //user will send this data

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "id invalid"});
    }

    try {
        await Name.findByIdAndDelete(id);
        res.status(200).json({success:true});
    } catch (error) {
        console.log("Error in deleting name");
        res.status(500).json({success:false, message: "Server Error"})
    }

};

export const updateName = async (req,res) => {
    const {id} = req.params; //user will send this data

    const name = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "id invalid"});
    }

    try {
        const updatedName = await Name.findByIdAndUpdate(id, name, {new:true});
        res.status(200).json({success:true, data: updatedName});
    } catch (error) {
        console.log("Error in updating name");
        res.status(404).json({success:false, message: "Name not updated"})
    }

};