import { Types, Document } from "mongoose";

export interface UserInterface extends Document{  
    username: string;
    password: string;
    email: string;
    fullname: string;
    profilepic: string;
}
