import moment from "moment";

export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private created_at: Date,
        private creator_userId: string,
    ){}

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCreatedAt(): Date {
        return this.created_at;
    }

    public getCreatorUserId(): string {
        return this.creator_userId;
    }

    public static toRecipeModel(recipe: any): Recipe {
        return new Recipe(
            recipe.id,
            recipe.title,
            recipe.description,
            recipe.created_at,
            recipe.creator_userId,
        )
    }
    
    setData(data: any): void {
        this.created_at = data
    }
}