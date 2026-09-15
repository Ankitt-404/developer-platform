import { Request, Response } from "express";
declare const createProject: (req: Request, res: Response) => Promise<void>;
declare const getProjects: (req: Request, res: Response) => Promise<void>;
declare const getProject: (req: Request, res: Response) => Promise<void>;
declare const updateProject: (req: Request, res: Response) => Promise<void>;
declare const deleteProject: (req: Request, res: Response) => Promise<void>;
export { createProject, getProjects, getProject, updateProject, deleteProject };
//# sourceMappingURL=project.d.ts.map