import User from './models';

export const createUser = async (req, res) => {
	const{userName, password} = req.body;
	const newUser = new User({ userName, password});
	try{
	return res.status(201).json({user: await newUser.save()});

	}catch(e) {
	return res.status(e.status).json({error:true, message:'Error with User creation'});
}

}


export const getUsers = async (req, res) => {

	try{
		return res.status(200).json({users: await User.find({})});

		}catch(e) {
		return res.status(e.status).json({error:true, message:'Error with User creation'});
	}

}


