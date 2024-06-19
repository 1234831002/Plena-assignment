import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop({ required: true, unique: true })
    userName: string;

    @Prop({ type: Number })
    age: Number;

    @Prop({ type: Date })
    birthdate: Date;
    
    @Prop({ type: Boolean, default: true })
    isActive: Boolean;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "users" })
    blockedUsers: [mongoose.Schema.Types.ObjectId];

    _id: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);