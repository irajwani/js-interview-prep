"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const Table = (props) => {
    return null;
};
const App = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Table, { items: [{ id: '1', name: 'Imad' }], renderItem: true })));
exports.App = App;
