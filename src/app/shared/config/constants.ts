import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

    public readonly ALCOHOLIC_LIST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';
    public readonly CATEGORY_LIST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    public readonly GLASS_LIST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
    public readonly INGREDIENTS_LIST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

    public readonly ALCOHOLIC_FILTER_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=';
    public readonly CATEGORY_FILTER_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
    public readonly GLASS_FILTER_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=';
    public readonly INGREDIENTS_FILTER_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

    public readonly SEARCH_COCKTAIL_BY_NAME_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    public readonly SEARCH_INGREDIENT_BY_NAME_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=';

    public readonly DRINK_DETAIL_BY_ID_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    public readonly INGREDIENT_DETAIL_BY_ID_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=';

    public readonly RANDOM_COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    public readonly INGREDIENT_THUMBNAIL_SMALL_URL = 'https://www.thecocktaildb.com/images/ingredients/{0}-Small.png';
    public readonly INGREDIENT_THUMBNAIL_MEDIUM_URL = 'https://www.thecocktaildb.com/images/ingredients/{0}-Medium.png';
    public readonly INGREDIENT_THUMBNAIL_LARGE_URL = 'https://www.thecocktaildb.com/images/ingredients/{0}.png';

}