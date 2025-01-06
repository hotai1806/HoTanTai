import { AppDataSource } from "../data-source";
import { Resource } from "../entities/Resource";
import {
  CreateResourceDto,
  UpdateResourceDto,
  ResourceFilters,
} from "../dtos/resource.dto";
import { Like, Repository } from "typeorm";

export class ResourceService {
  private resourceRepository: Repository<Resource>;

  constructor() {
    this.resourceRepository = AppDataSource.getRepository(Resource);
  }

  async create(data: CreateResourceDto): Promise<Resource> {
    const resource = this.resourceRepository.create(data);
    return await this.resourceRepository.save(resource);
  }

  async list(filters: ResourceFilters) {
    const where = filters.name ? { name: Like(`%${filters.name}%`) } : {};

    const [resources, total] = await this.resourceRepository.findAndCount({
      where,
      take: filters.limit,
      skip: filters.offset,
      order: {
        createdAt: "DESC",
      },
    });

    return {
      data: resources,
      meta: {
        total,
        limit: filters.limit,
        offset: filters.offset,
      },
    };
  }

  async findOne(id: number): Promise<Resource | null> {
    return await this.resourceRepository.findOneBy({ id });
  }

  async update(id: number, data: UpdateResourceDto): Promise<Resource | null> {
    const resource = await this.resourceRepository.findOneBy({ id });
    if (!resource) return null;

    this.resourceRepository.merge(resource, data);
    return await this.resourceRepository.save(resource);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.resourceRepository.delete(id);
    return result.affected ? result.affected > 0 : false;
  }
}
