import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class User {
    @Prop({ required: true })
    username: string;
    
    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true})
    fullname: string;

    @Prop({ required: true})
    profilepic: string;
    
}

export const UserSchema = SchemaFactory.createForClass(User);