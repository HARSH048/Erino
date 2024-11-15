"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const { Column, Entity, PrimaryGeneratedColumn } = require("typeorm");
let Contact = class Contact {
};
exports.Contact = Contact;
__decorate([
    PrimaryGeneratedColumn('uuid')
], Contact.prototype, "id", void 0);
__decorate([
    Column({ name: 'firstName', nullable: false })
], Contact.prototype, "firstName", void 0);
__decorate([
    Column({ name: 'lastName', nullable: true })
], Contact.prototype, "lastName", void 0);
__decorate([
    Column({ name: 'email', nullable: false, unique: true })
], Contact.prototype, "email", void 0);
__decorate([
    Column({ name: 'phoneNumber', nullable: false, unique: true })
], Contact.prototype, "phoneNumber", void 0);
exports.Contact = Contact = __decorate([
    Entity({ name: 'contacts' })
], Contact);
