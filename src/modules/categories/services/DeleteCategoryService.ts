import CategoriesRepository from "../repositories/CategoriesRepository";
import AppError from "../../../errors/AppError";

import { DeleteResult } from "typeorm";

interface IRequest {
    id: string;
}

class DeleteCategoryService {
    public async execute({ id} : IRequest): Promise<DeleteResult> {
        const categoriesRepository = new CategoriesRepository();
        
        if (!id) {
            throw new AppError("Id is required", 401);
        }

        const category = categoriesRepository.delete(id);

        return category;
    }

}

export default DeleteCategoryService;