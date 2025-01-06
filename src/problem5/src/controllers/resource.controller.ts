import { Request, Response } from "express";
import { ResourceService } from "../services/resource.service";
import { CreateResourceDto, UpdateResourceDto } from "../dtos/resource.dto";
import { validate } from "class-validator";

export class ResourceController {
  private resourceService: ResourceService;

  constructor() {
    this.resourceService = new ResourceService();
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const resourceData = new CreateResourceDto();
      Object.assign(resourceData, req.body);

      const errors = await validate(resourceData);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      const result = await this.resourceService.create(resourceData);
      return res.status(201).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  list = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, limit = 10, offset = 0 } = req.query;
      const result = await this.resourceService.list({
        name: name as string,
        limit: Number(limit),
        offset: Number(offset),
      });
      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  getOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const resource = await this.resourceService.findOne(
        Number(req.params.id)
      );
      if (!resource) {
        return res.status(404).json({ error: "Resource not found" });
      }
      return res.json(resource);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const resourceData = new UpdateResourceDto();
      Object.assign(resourceData, req.body);

      const errors = await validate(resourceData);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      const result = await this.resourceService.update(
        Number(req.params.id),
        resourceData
      );

      if (!result) {
        return res.status(404).json({ error: "Resource not found" });
      }

      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await this.resourceService.delete(Number(req.params.id));
      if (!result) {
        return res.status(404).json({ error: "Resource not found" });
      }
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}
