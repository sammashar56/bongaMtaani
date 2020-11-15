"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true,
        default: "user"
    },
    isVerified: {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true
});
//# sourceMappingURL=user.js.map