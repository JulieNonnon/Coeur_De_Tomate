import { Injectable } from '@angular/core';
import { Product } from '../../mocks/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PRODUCT_URL } from '../../shared/urls';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router: Router) {}

  //Méthode pour récupérer mes produits
  getProducts(): Observable<Product[]> {
    return this.http.get<{data:Product[]}>(PRODUCT_URL).pipe(map(response =>response.data));
  }

  //Méthode pour retourner le dernier produit
  getLastProduct(): Observable<Product> {
    return this.http.get<Product>(`${PRODUCT_URL}/last`);
  }

  //Méthode pour récupérer un produit par son Id
  //Condition: produit retourné si son id existe
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${PRODUCT_URL}/${id}`).pipe(
      map((product: Product) => {
        if (!product) {
          this.router.navigateByUrl('/error404');
          throw new Error(`Le produit avec l'id ${id} est introuvable.`);
        }
        return product;
      })
    );
  }

  // constructor(
  //   private router: Router
  // ) { }

  // getProducts(): Product[] {
  //   return this.products;
  // }

  // getLastProduct(): Product {
  //   return this.products[this.products.length - 1];
  // }

  // //Méthode pour récupération d'un produit par son Id
  // //Condition: produit retourné si son id existe
  // getProductById(id: number): Product {
  //   const product = this.products.find(product => product.id === id);
  //   if (product) {
  //     return product;
  //   } else {
  //     this.router.navigateByUrl('/error404');
  //     throw new Error("le produit avec l'id ${id} est introuvable.");
  //   }
  // }

  // private products: Product[] = [
  //   { 
  //     id: 1, 
  //     title: 'Coeur de boeuf', 
  //     img: 'assets/img/product-coeur-de-boeuf.png',
  //     smallDescription: "Sachet individuel d’une quinzaine de graines.", 
  //     longDescription: "Découvrez l'exquise Tomate Cœur de Bœuf, une variété qui séduira les amateurs de tomates par sa forme distinctive et son goût exceptionnel. Ces tomates sont caractérisées par leur grande taille, leur forme côtelée et leur chair charnue, offrant une expérience gustative riche et savoureuse.", 
  //     price: 4,
  //     pitch: "Faites de la Tomate Cœur de Bœuf le joyau de votre jardin et savourez des récoltes abondantes de ces délicieuses tomates. Transformez vos plats en créations culinaires irrésistibles grâce à cette variété exceptionnelle.",
  //     feature1: "Forme Unique : Les tomates Cœur de Bœuf se distinguent par leur forme généreuse et arrondie, évoquant celle d'un cœur. Chair Charpentée : La chair de ces tomates est juteuse, dense et pleine de saveurs, idéale pour des salades gourmandes, des sauces ou des sandwiches.",
  //     feature2: "Sucrosité Délicate : Les tomates Cœur de Bœuf offrent une douceur naturelle équilibrée avec une légère acidité, créant une combinaison de saveurs inoubliable. Arôme Enivrant : Chaque bouchée libère un arôme frais et enivrant qui capture l'essence même des tomates cultivées avec soin.",
  //     feature3: "Semences de Qualité : Nos graines de tomates Cœur de Bœuf sont sélectionnées avec soin pour garantir des plants vigoureux et productifs. Cultivation Responsable : Nous nous engageons à promouvoir des pratiques agricoles durables pour vous offrir des produits de la plus haute qualité.",
  //     category: "classic", 
  //   },
  //   { 
  //     id: 2, 
  //     title: 'Beauty Queen', 
  //     img: 'assets/img/product-beauty-queen.png',
  //     smallDescription: "Sachet individuel d’une quinzaine de graines.", 
  //     longDescription: "Plongez dans l'élégance avec la Tomate Beauty Queen, une variété qui porte bien son nom grâce à sa beauté éclatante et son goût exquis. Ces tomates sont un véritable régal pour les yeux et les papilles, idéales pour ceux qui recherchent une touche de sophistication dans leur jardin et leurs plats.", 
  //     price: 5,
  //     pitch: "Transformez votre jardin en un royaume de beauté en cultivant la Tomate Beauty Queen et laissez-vous enchanter par sa splendeur et ses saveurs exquises. Ajoutez une touche d'élégance à vos repas et émerveillez-vous devant la majesté de cette variété de tomate.",
  //     feature1: "Apparence Ravissante : La Tomate Beauty Queen séduit par sa peau lisse et brillante, d'un rouge profond parsemé de striures dorées, créant un spectacle visuel irrésistible.Forme Délicate : Ces tomates ont une forme légèrement aplatie et côtelée, évoquant la silhouette gracieuse d'une reine, ajoutant une dimension esthétique à votre jardin.",
  //     feature2: "Douceur Délicate : La Tomate Beauty Queen offre une douceur subtile équilibrée par une légère acidité, créant une harmonie de saveurs parfaitement équilibrée. Parfum Enivrant : Chaque tomate dégage un arôme délicat qui embaume le jardin et annonce la promesse de délices culinaires à venir.",
  //     feature3: "Semences de Qualité : Nos graines de Tomate Beauty Queen sont sélectionnées avec soin pour assurer des plants vigoureux et productifs, garantissant une récolte abondante. Engagement envers la Qualité : Nous nous engageons à vous offrir des produits de la plus haute qualité, cultivés avec passion et souci du détail.",
  //     category: "classic",  
  //   },
  //   { 
  //     id: 3, 
  //     title: 'Noire de crimée', 
  //     img: 'assets/img/product-noire-de-crimee.png',
  //     smallDescription: "Sachet individuel d’une quinzaine de graines.", 
  //     longDescription: "Plongez dans l'exotisme avec la Tomate Noire de Crimée, une variété unique réputée pour son aspect sombre et sa saveur incomparable. Originaire de la région de Crimée, cette tomate est un véritable trésor culinaire, parfait pour ceux qui recherchent une expérience gustative riche et exotique.", 
  //     price: 3,
  //     pitch: "Ajoutez une touche d'exotisme à votre jardin en cultivant la Tomate Noire de Crimée et savourez des récoltes abondantes de ces précieuses tomates. Laissez-vous séduire par sa beauté sombre et ses saveurs uniques qui évoquent les mystères de la Crimée.",
  //     feature1: "Couleur Intense : La Tomate Noire de Crimée se distingue par sa couleur profonde, presque pourpre, qui contraste magnifiquement avec sa chair juteuse. Forme et Texture : Ces tomates ont une forme arrondie à légèrement aplatie et une texture charnue, offrant une expérience en bouche à la fois tendre et juteuse.",
  //     feature2: "Complexité Gustative : La saveur de la Tomate Noire de Crimée est un mélange enivrant de douceur sucrée et d'acidité subtile, avec des notes terreuses qui ajoutent une profondeur de caractère. Arôme Mystérieux : Chaque tomate libère un arôme envoûtant, évoquant les terres fertiles de la Crimée où elle est cultivée depuis des générations.",
  //     feature3: "Graines de Qualité : Nos graines de Tomate Noire de Crimée sont sélectionnées avec rigueur pour assurer des plants robustes et productifs. Respect de la Tradition : Nous honorons les méthodes traditionnelles de culture pour préserver l'authenticité et la qualité de cette variété emblématique.",
  //     category: "classic",  
  //   },
  //   { 
  //     id: 4, 
  //     title: 'Ananas', 
  //     img: 'assets/img/product-ananas.png',
  //     smallDescription: "Sachet individuel d’une quinzaine de graines.", 
  //     longDescription: "Plongez dans l'exotisme sucré de la Tomate Ananas, une variété captivante réputée pour sa chair juteuse et son goût délicieusement sucré. Originaire des tropiques, cette tomate est un véritable trésor pour les amateurs de saveurs exotiques et les passionnés de jardinage.", 
  //     price: 6,
  //     pitch: "Transformez votre jardin en un paradis tropical en cultivant la Tomate Ananas et laissez-vous envoûter par sa beauté et ses saveurs exotiques. Ajoutez une touche de soleil à vos repas et savourez l'éclat de cette variété de tomate exceptionnelle.",
  //     feature1: "Couleurs Tropicales : La Tomate Ananas séduit par sa peau rayée jaune doré et rouge, évoquant les couleurs vives des fruits tropicaux mûrs à point. Texture Succulente : Ces tomates ont une chair juteuse et fondante, offrant une expérience en bouche à la fois douce et rafraîchissante.",
  //     feature2: "Douces et Sucrées : La Tomate Ananas offre une douceur sucrée inégalée, rappelant les arômes envoûtants des fruits tropicaux mûrs sous le soleil. Notes Subtiles : Chaque bouchée révèle des nuances subtiles de saveurs tropicales, évoquant des souvenirs de vacances paradisiaques.",
  //     feature3: "Graines de Qualité : Nos graines de Tomate Ananas sont sélectionnées avec soin pour garantir des plants vigoureux et productifs, prêts à prospérer dans votre jardin. Engagement envers l'Excellence : Nous nous engageons à vous offrir des produits de la plus haute qualité, cultivés avec passion et dévouement.",
  //     category: "classic",  
  //   },
  //   { 
  //     id: 5, 
  //     title: 'Green Zebra', 
  //     img: 'assets/img/product-green-zebra.png',
  //     smallDescription: "Sachet individuel d’une quinzaine de graines.", 
  //     longDescription: "Découvrez l'exotisme rafraîchissant de la Tomate Green Zebra, une variété unique qui marie la fraîcheur de la couleur verte avec la douceur juteuse des tomates. Ces tomates sont un régal visuel et gustatif, idéales pour apporter une touche d'originalité à votre jardin et à vos plats.", 
  //     price: 2,
  //     pitch: "Transformez votre jardin en une oasis de fraîcheur en cultivant la Tomate Green Zebra et laissez-vous envoûter par sa beauté et ses saveurs uniques. Ajoutez une touche exotique à vos plats et émerveillez-vous devant la vivacité de cette variété de tomate.",
  //     feature1: "Couleur Éclatante : La Tomate Green Zebra se distingue par sa peau rayée vert clair et jaune, créant un contraste saisissant qui attire immédiatement l'attention. Texture Croquante : Ces tomates ont une chair ferme et juteuse, offrant une expérience en bouche à la fois croquante et succulente.",
  //     feature2: "Équilibre Parfait : La Tomate Green Zebra offre une combinaison délicate de douceur sucrée et d'acidité rafraîchissante, créant une symphonie de saveurs équilibrée. Arôme Vibrant : Chaque tomate exhale un parfum frais et vivifiant qui évoque les chaudes journées d'été et les promenades dans le jardin.",
  //     feature3: "Graines de Qualité : Nos graines de Tomate Green Zebra sont soigneusement sélectionnées pour garantir des plants vigoureux et productifs, prêts à prospérer dans votre jardin. Engagement envers la Durabilité : Nous nous engageons à promouvoir des pratiques agricoles durables pour assurer la santé de la planète et la qualité de nos produits.",
  //     category: "classic",  
  //   },
  //   { 
  //     id: 6, 
  //     title: 'White Beauty', 
  //     img: 'assets/img/product-white-beauty.png',
  //     smallDescription: "Sachet individuel d’une quinzaine de graines.", 
  //     longDescription: "Explorez l'élégance intemporelle de la Tomate White Beauty, une variété unique qui marie la douceur délicate de la couleur blanche avec une saveur rafraîchissante et succulente. Ces tomates sont un régal pour les yeux et les papilles, idéales pour apporter une touche de sophistication à votre jardin et à vos plats.", 
  //     price: 66.55,
  //     pitch: "Transformez votre jardin en un sanctuaire de beauté en cultivant la Tomate White Beauty et laissez-vous envoûter par sa splendeur et ses saveurs uniques. Ajoutez une touche d'élégance à vos repas et émerveillez-vous devant la pureté de cette variété de tomate.",
  //     feature1: "Blancheur Éclatante : La Tomate White Beauty séduit par sa peau lisse et nacrée, d'un blanc pur et lumineux qui évoque la pureté et l'innocence. Texture Tendre : Ces tomates ont une chair tendre et juteuse, offrant une expérience en bouche à la fois douce et rafraîchissante.",
  //     feature2: "Douceur Subtile : La Tomate White Beauty offre une douceur subtile équilibrée par une légère acidité, créant une symphonie de saveurs délicates et harmonieuses. Fraîcheur Exquise : Chaque bouchée libère un parfum frais et envoûtant, évoquant la pureté et la fraîcheur des jardins en fleurs.",
  //     feature3: "Graines de Qualité : Nos graines de Tomate White Beauty sont sélectionnées avec soin pour garantir des plants vigoureux et productifs, prêts à prospérer dans votre jardin. Engagement envers la Qualité : Nous nous engageons à vous offrir des produits de la plus haute qualité, cultivés avec passion et dévouement.",
  //     category: "classic",  
  //   },
  // ];


}
