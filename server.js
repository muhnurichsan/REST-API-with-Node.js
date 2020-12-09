const express = require('express')
const router = express();
const port = 2001;
const user = require("./models/User");


router.use(express.urlencoded({ extended: true }));

//get all user data
router.get("/", async(req, res) => {
    const getAllUser = await user.findAll({});
    res.json(getAllUser);
});

//create new user data
router.post("/", async(req, res) => {
    try {
        const { firstname, lastname } = req.body;
        const newUser = new user({
            firstname,
            lastname
        })
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        console.log(error);
    }
});
//get data by ID
router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const getUserById = await user.findAll({
        where: {
            id: id
        }
    })
    await getUserById;
    res.json(getUserById);
});

//update user data by ID
router.put("/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const { firstname, lastname } = req.body;
        const updateUser = await user.update({
            firstname,
            lastname
        }, {
            where: {
                id: id
            }
        })
        await updateUser;
        res.json(updateUser);
    } catch (error) {
        console.log(error);
    }
})

//delete user data by ID
router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const deleteUserById = await user.destroy({
        where: {
            id: id
        }
    })
    await deleteUserById;
    res.json(deleteUserById);
});


router.listen(port, () => {
    console.log(`server running at localhost:${port}`);
})