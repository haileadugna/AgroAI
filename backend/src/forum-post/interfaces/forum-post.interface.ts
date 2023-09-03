import { Types, Document } from "mongoose";
import { User } from "src/user/entities/user.entity";

export interface ForumPostInterface extends Document{  
    author: User;
    content: string;
}
