import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
@Injectable({
  providedIn: 'root',
})
export class recipesService {
  recipes: Recipe[]=[
    {
        "id": 1,
        "title": "Archibald",
        "description": "Mon meilleur ami depuis tout petit !",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        "createdDate": new Date(),
        "stars": 5
      },
      {
        "id": 2,
        "title": "Three Rock Mountain",
        "description": "Un endroit magnifique pour les randonnées.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
        "createdDate": new Date(),
        "stars": 5
      },
      {
        "id": 3,
        "title": "Un bon repas",
        "description": "Mmmh que c'est bon !",
        "imageUrl": "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        "createdDate": new Date(),
        "stars": 5
      },
      {
        "id": 4,
        "title": "Archibald",
        "description": "Mon meilleur ami depuis tout petit !",
        "imageUrl": "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        "createdDate": new Date(),
        "stars": 5
      },
      {
        "id": 5,
        "title": "Three Rock Mountain",
        "description": "Un endroit magnifique pour les randonnées.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
        "createdDate": new Date(),
        "stars": 5
      },
      {
        "id": 6,
        "title": "Un bon repas",
        "description": "Mmmh que c'est bon !",
        "imageUrl": "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        "createdDate": new Date(),
        "stars": 5
      },
      {
        "id": 7,
        "title": "Un bon repas",
        "description": "Mmmh que c'est bon !",
        "imageUrl": "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        "createdDate": new Date(),
        "stars": 5
      },
      {
        "id": 8,
        "title": "Un bon repas",
        "description": "Mmmh que c'est bon !",
        "imageUrl": "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        "createdDate": new Date(),
        "stars": 5
      },
      {
        "id": 9,
        "title": "Un bon repas",
        "description": "Mmmh que c'est bon !",
        "imageUrl": "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        "createdDate": new Date(),
        "stars": 5
      },
      {
        "id": 10,
        "title": "Un bon repas",
        "description": "Mmmh que c'est bon !",
        "imageUrl": "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        "createdDate": new Date(),
        "stars": 5
      }
  ]
}
