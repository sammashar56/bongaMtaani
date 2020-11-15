"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    categorytitle: {
        type: String,
        required: true
    },
    isActivated: {
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true
});
//# sourceMappingURL=categories.js.map