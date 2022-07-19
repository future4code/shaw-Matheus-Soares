import { Request, Response } from "express";
import moment from "moment";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { User, USER_ROLES } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {

    signUp = async (req: Request, res: Response): Promise<any> => {
        try {
            const { name, email, password, role } = req.body

            if (!name || !email || !password || !role) {
                res.statusCode = 400
                throw new Error("Please provide name, email, password and role")
            }

            if (password.length < 6) {
                res.statusCode = 400
                throw new Error("Password must have at least 6 characters")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserByEmail(email)

            if (user) {
                res.statusCode = 400
                throw new Error('User already exists')
            }

            const id = new IdGenerator().generate()


            const cypherPassword = new HashManager().createHash(password)

            const newUser = new User(id, name, email, cypherPassword, role)

            await userDB.insertUser(newUser)

            const token = new Authenticator().generateToken({
                id,
                role
            })

            res.status(200).send({
                message: 'User created successfully',
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("Please provide email and password")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserByEmail(email)

            if (!user) {
                res.statusCode = 400
                throw new Error('User does not exist')
            }

            const isPasswordValid = new HashManager().compareHash(password, user.password)

            if (!isPasswordValid) {
                res.statusCode = 400
                throw new Error('Invalid password')
            }

            const token = new Authenticator().generateToken({
                id: user.id,
                role: user.role
            })

            res.status(200).send({
                message: 'User logged in successfully',
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getProfileLogged = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 422
                throw new Error("Please provid a token")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(authenticationData.id)

            if (!user) {
                res.statusCode = 404
                throw new Error("User not found")
            }

            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getProfileById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 422
                throw new Error("Please provid a token")
            }

            if (!id || id === ":id") {
                res.statusCode = 400
                throw new Error("Please provid an id")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(id)

            if (!user) {
                res.statusCode = 404
                throw new Error("User not found")
            }

            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    followUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { followed_id } = req.body

            if (!followed_id) {
                res.statusCode = 400
                throw new Error("Please provid an id")
            }

            if (!token) {
                res.statusCode = 422
                throw new Error("Please provid a token")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(authenticationData.id)

            if (!user) {
                res.statusCode = 404
                throw new Error("User not found")
            }

            if (user.id === followed_id) {
                res.statusCode = 400
                throw new Error("You can't follow yourself")
            }

            const userToFollow = await userDB.getUserById(followed_id)

            if (!userToFollow) {
                res.statusCode = 404
                throw new Error("User to follow not found")
            }

            const followers = await userDB.getFollowers(authenticationData.id)

            if (followers.find((follower: any) => follower.followed_id === followed_id)) {
                res.statusCode = 400
                throw new Error("You already follow this user")
            }

            await userDB.insertFollow(user.id, userToFollow.id)

            res.status(200).send({
                message: "User followed successfully"
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    unfollowUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { followed_id } = req.body

            if (!followed_id) {
                res.statusCode = 400
                throw new Error("Please provid an id")
            }

            if (!token) {
                res.statusCode = 422
                throw new Error("Please provid a token")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(authenticationData.id)

            if (!user) {
                res.statusCode = 404
                throw new Error("User not found")
            }

            if (user.id === followed_id) {
                res.statusCode = 400
                throw new Error("You can't unfollow yourself")
            }

            const userToUnfollow = await userDB.getUserById(followed_id)

            if (!userToUnfollow) {
                res.statusCode = 404
                throw new Error("User to follow not found")
            }

            const followers = await userDB.getFollowers(authenticationData.id)

            if (!followers.find((follower: any) => follower.followed_id === followed_id)) {
                res.statusCode = 400
                throw new Error("You don't follow this user")
            }

            await userDB.deleteFollow(user.id, userToUnfollow.id)

            res.status(200).send({
                message: "User unfollowed successfully"
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getRecipesFeed = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 422
                throw new Error("Please provid a token")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(authenticationData.id)

            if (!user) {
                res.statusCode = 404
                throw new Error("User not found")
            }

            const recipes = await userDB.selectRecipesUserFeed(user.id)

            res.status(200).send({
                recipes
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    removeUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { id } = req.params

            if (!token) {
                res.statusCode = 422
                throw new Error("Please provid a token")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)

            if (!authenticationData) {
                res.statusCode = 401
                throw new Error("Invalid token")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserById(id)

            if (!user) {
                res.statusCode = 404
                throw new Error("User not found")
            }

            if (authenticationData.role !== USER_ROLES.ADMIN) {
                res.statusCode = 401
                throw new Error("You are not authorized to do this, only admins can do this")
            }

            const recipeDB = new RecipeDatabase()
            const recipes = await recipeDB.getUserRecipes(id)
            
            if (recipes.length > 0) {
                for (const recipe of recipes) {
                    await recipeDB.deleteRecipe(recipe.getId())
                }
            }

            const followers = await userDB.getFollowers(id)
        
            if (followers.length > 0) {
            for (const follower of followers) {
                await userDB.deleteFollow(id, follower.followed_id)
            }
            }

            const followings = await userDB.getFollowings(id)

            if (followings.length > 0) {
            for (const following of followings) {
                await userDB.deleteFollow(following.follower_id, id)
            }
            }

            await userDB.deleteUser(id)

            res.status(200).send({
                message: "User deleted successfully"
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}