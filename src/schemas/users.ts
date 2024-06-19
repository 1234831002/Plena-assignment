import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop({ required: true })
    userName: string;

    @Prop({ type: Date })
    birthdate: Date;

    // @Prop({ type: SchemaTypes.Array, ref: User })
    // blockedUsers: Array<User>;
    _id: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);