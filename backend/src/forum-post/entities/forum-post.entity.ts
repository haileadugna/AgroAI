import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { User } from 'src/user/entities/user.entity';

@Schema()
export class ForumPost {
    @Prop({ required: true })
    author: User;

    @Prop({ required: true })
    content: string;
}

export const ForumPostSchema = SchemaFactory.createForClass(ForumPost);
