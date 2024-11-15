import { ContactRepository } from '../repository'
import { AppDataSource } from '../config/connection'
import { QueryExpressionMap } from 'typeorm/query-builder/QueryExpressionMap';
import { Like } from 'typeorm';

export default class ContactService {
    private contactRepository: ContactRepository;

    constructor() {
        this.contactRepository = new ContactRepository(AppDataSource);
    }

    async createContact(contactData) {
        try {
            const contactedData = this.contactRepository.create(contactData)
            await this.contactRepository.save(contactedData);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteContact(contactId: string) {
        try {
            await this.contactRepository.delete({ id: contactId });
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async editContact(contactId: string, dataToUpdate: any) {
        try {
            await this.contactRepository.update({ id: contactId }, dataToUpdate);
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllContact(filter: any) {
        try {
          const limit = filter.limit || 10;   
          const page = filter.page || 1;      
          const skip = (page - 1) * limit;   
      
          // Initialize query builder
          const queryBuilder = this.contactRepository.createQueryBuilder("contacts");
      
          // Dynamically add filters to the query
          if (filter.firstName) {
            queryBuilder.andWhere("contacts.firstName ILIKE :firstName", {
              firstName: `%${filter.firstName}%`,
            });
          }
          if (filter.lastName) {
            queryBuilder.andWhere("contacts.lastName ILIKE :lastName", {
              lastName: `%${filter.lastName}%`,
            });
          }
          if (filter.contact) {
            queryBuilder.andWhere("contacts.contact ILIKE :contact", {
              contact: `%${filter.contact}%`,
            });
          }
          if (filter.email) {
            queryBuilder.andWhere("contacts.email ILIKE :email", {
              email: `%${filter.email}%`,
            });
          }
          if (filter.company) {
            queryBuilder.andWhere("contacts.company ILIKE :company", {
              company: `%${filter.company}%`,
            });
          }
          if (filter.jobTitle) {
            queryBuilder.andWhere("contacts.jobTitle ILIKE :jobTitle", {
              jobTitle: `%${filter.jobTitle}%`,
            });
          }
      
          // Apply pagination
          queryBuilder.skip(skip).take(limit);
      
          // Execute query and get results
          const [result, count] = await queryBuilder.getManyAndCount();
      
          return {
            data: result,
            total: count,
          };
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
      
}