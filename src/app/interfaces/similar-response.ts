export interface SimilarMovieResponse {
    page:number;
    results:Results[];
    total_pages: number;
    total_results:number;
}
export interface Results{
    poster_path:string|null;
    adult:boolean;
    overview:string;
    release_date:string;
    genre_ids:GenreId[];
    id:number;
    original_title:string;
    original_language:string;
    title:string;
    backdrop_path:string;
    popularity:number;
    vote_count:number;
    video:boolean;
    vote_average:number;
    total_pages:number;
    total_results:number;

}
export interface GenreId {
    id: number;
}

