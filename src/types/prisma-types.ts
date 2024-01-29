// prisma-types.ts
export interface User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    hash: string;
    firstName?: string | null;
    LastName?: string | null;
    link: string;
  }
  
  export interface Bookmark {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description?: string | null;
    link: string;
  }
  