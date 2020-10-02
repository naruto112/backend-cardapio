import { Repository, getRepository } from "typeorm";
import Aditional from "../entities/Aditional";

interface IAditional {
  id?: string;
  owner?: string;
  name: string;
  quantity: number;
  price: number;
}

class AditionalsRepository {
  private ormRepository: Repository<Aditional>;

  constructor() {
    this.ormRepository = getRepository(Aditional);
  }

  public async create(aditionalData: IAditional): Promise<Aditional> {
    const aditional = this.ormRepository.create(aditionalData);

    await this.ormRepository.save(aditional);

    return aditional;
  }

  public async findByOwner(owner: string): Promise<Aditional[]> {
    const aditionals = await this.ormRepository.find({
      where: { owner },
    });
    return aditionals;
  }

  public async findById(id: string): Promise<Aditional | undefined> {
    const aditional = this.ormRepository.findOne(id);
    return aditional;
  }

  public async save(aditionalData: IAditional): Promise<Aditional> {
    return this.ormRepository.save(aditionalData);
  }
}

export default AditionalsRepository;
